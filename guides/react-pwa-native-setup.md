# React PWA Setup

Configure a React PWA to emulate a seamless native mobile experience.

## Basic PWA Setup

First, initialise your project

```bash
npx create-react-app my-app --template cra-template-pwa-typescript
```

Register the service worker in `src/index.ts`

```
serviceWorkerRegistration.register();
```

You now have a Progress Web App!

## Enhancing the Native-like Experience

To achieve a native feel for your app, it's crucial to establish the configurations and styling early in the development process. Doing so will prevent difficulties in reconfiguring later on when the app has progressed significantly...

### Changing the IOS Status Bar Background

[Guide Reference](https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab)

The default iPhone status bar usually displays a black or white background, which could look visibly obvious to a user's eyes when your application has a different background or Navbar color. 

![image](https://github.com/nc1z/react-pwa-starter/assets/111836326/fc47f7aa-2dbf-4726-8a2b-a784b6850d33)

<sub><sup><a href="https://medium.com/appscope/changing-the-ios-status-bar-of-your-progressive-web-app-9fc8fbe8e6ab">(Image credits to Appscope)</a></sup></sub>

__Solution:__

Add this meta tag to the header in your `public/index.html`

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
```

### Setting up styling, pages and UI components to prevent overscroll and touch action

This is a key configuration and development guideline that really gives your PWA the native-like experience. Most enterprise PWAs do not have this and users will still feel like a website rather than a mobile application.

Without disabling these styles on your root/body/page containers, you will notice that overscrolling your PWA will lead to 'scroll chaining' [(video example)](https://youtu.be/lkaWjWhMQ3E). This means that you will be able to drag your PWA around when it overscrolls, like a webpage (Try scrolling to the bottom of a mobile Safari/Chrome webpage, and you will notice white spaces below)

Here's an example:

<img src="https://github.com/nc1z/react-pwa-starter/assets/111836326/45c0c576-eff6-4978-b1e5-3e418fdb26e4" alt="overscroll example" width="300">

Notice the extra white space that comes up when you overscroll? ugh! 🤮


#### Objective:

![image](https://github.com/nc1z/react-pwa-starter/assets/111836326/9e67e871-8bff-4d34-a998-196b14a23eff)

The problem is that there was a lack of reference code or documentation on how to achieve this in the PWA. Unfortunately, Stackoverflow and ChatGPT did not help, as beyond simple css there was also browser compatibility issues, which we will go through in <a href="#mobile-browser-compatibility">the next section</a>.

After numerous attempts using flexbox, grid, and positions, I was able to achieve the desired native look with the following configuration.

```css
/* SET YOUR TOP-NAVBAR and BOTTOM-NAVBAR WITH THESE FIXED VALUES */
:root {
  --navbar-height: 60px;
  --bottom-nav-height: 76px;
}


.YourTopNavbar {
    height: var(--navbar-height);
    position: "static"; /* THIS ALLOWS THE TOP NAVBAR TO TAKE UP SPACE */
    /* ...INCLUDE OTHER ATTRIBUTES TO SET IT AT THE TOP  */
}

.YourBottomNavbar {
    width: 100vw;
    height: var(--bottom-nav-height);

    position: fixed;
    /* ...INCLUDE OTHER ATTRIBUTES TO SET IT AT THE BOTTOM  */
}

.body {
  /* DISABLE NON-NATIVE-LIKE BEHAVIORS */
  touch-action: none;
  overflow: hidden;
  overscroll-behavior: none;
}

.App {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  color: white;

  /* DISABLE NON-NATIVE-LIKE BEHAVIORS */
  touch-action: none;
  overflow: hidden;
  overscroll-behavior: none;
}

.AppContainer {
  position: relative;
  height: 100vh;

  /* DISABLE NON-NATIVE-LIKE BEHAVIORS */
  touch-action: none;
  overflow: hidden;
  overscroll-behavior: none;
}

.PageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  position: fixed;
  top: var(--navbar-height);
  bottom: var(--bottom-nav-height);
  width: 100vw;

  /* ENABLE NON-NATIVE-LIKE BEHAVIORS */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  padding: 1rem 1rem 2rem 1rem;
  background-color: #30363d;
}

```

This is the hierarchy of components. Was using `MUI` as the component/theming library.

`<Outlet>` points to whatever page is rendered in the route, for example `Home.tsx` which is tagged with the `PageContainer` class

```tsx
<div className="App">
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="AppContainer">
            <Navbar />
            <Outlet />
            <BottomNav />
        </div>
    </ThemeProvider>
</div>

```

Here is `Home.tsx`

```tsx
<Box className="PageContainer">
    {mockData.map((item) => (
        <Box
            key={item.title}
            className="ArrayContainer"
        >
            <Typography variant="subtitle1" fontWeight="bold">{item.title}</Typography>
            <Typography variant="body2">{item.description}</Typography>
        </Box>
    ))}
</Box>
```
As you can see, every page has to be tagged with a `PageContainer` class, which enables the `overflow-y: auto` and `-webkit-overflow-scrolling: touch` attributes. This way, only the main content body can be scrolled.

#### Results:

As you can see below, now if the main content body overflows and we scroll over the limit, if it causes scroll chaining on the parent/root containers and elements, we won't have an issue!

<img src="https://github.com/nc1z/nc1z/assets/111836326/24250088-6481-4c43-b2ad-52816677adc1" alt="pwa-result" width="300">


### Mobile Browser Compatibility

To ensure a fully native-like experience and uphold our dedication to perfection, it's essential to thoroughly test and optimize the application to work seamlessly in all types of browsers.

#### Problem:

- Chrome and Safari has a bottom search bar that minimizes on scroll.
- However, we've disabled scroll on the root/parent/body components.
- When we use `height: 100vh` on the main content body's parent container, on Chrome and Safari full view height means it includes the space behind the browser search bar.
- When we use `position: absolute` and `bottom: XXX` on the main content body's container, it takes the base of the iPhone screen as the relative bottom.
- However, if we use `position: fixed` on the BottomNav, it takes the browser's visible content's base as the relative bottom. This means it stacks above the browser's search bar, which is intended.
- Ultimately, both discrepancies will leave the main content body's container being covered by the BottomNav, causing a visual bug

#### Solution:

To resolve this, simply use `position: fixed` for the main content body's container as well, so that it takes the browser's visible content's base as the relative bottom. That way, both the BottomNav and main content body's container will reference the same base.


### Version Refresh

TBC


