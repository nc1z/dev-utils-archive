# Javascript File Cloning Script

### Problem:

There are situations where we encounter laborious and repetitive tasks, often resulting from a poorly maintained codebase or other reasons. One common scenario involves the need to create multiple similar files, each with slight variations. Manually copying and pasting code between these files can be a cumbersome and time-consuming process.

### Solution:

To address this issue, we can utilize a script that automates the extraction and duplication of specific content within the files. The script identifies designated annotations within the original file, typically denoted by an annotation containing the `@START_SCRIPT` marker (e.g., "// @START_SCRIPT" or "/* @START_SCRIPT */") and an `@END_SCRIPT` annotation.

The marked content between these annotations will be extracted by the script and subsequently pasted into a newly generated file, for example, "file_clone.jsx".

## Example

### App.jsx

```jsx
import React from 'react'
import logo from './logo.svg'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* @START_SCRIPT */}
                <p>
                    <code>This is a test application</code>
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn more
                </a>
                {/* @END_SCRIPT */}
            </header>
        </div>
    )
}

export default App

```

### App_clone.jsx

```jsx
// EXTRACTED:
                <p>
                    <code>This is a test application</code>
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn more
                </a>
```

## Customisations

The existing script can be enhanced to process multiple files within a directory, extracting annotated content from each file. This can be achieved by utilizing a loop, such as a `for-loop` or `for-each`, once the file system reads and consolidates the files into an array.

By implementing this enhancement, the script gains the capability to automatically iterate through every file in the specified directory, ensuring the extraction of annotated content from each file.

## Clean-up

Do you find it tedious to manually remove annotations from your code before pushing it to a repository? We've got you covered! You can now utilize the `clean.js` script, designed specifically to streamline this process.

The `clean.js` script scans all lines within a designated directory and automatically removes any lines that contain the specified annotations. By running this script, you can easily eliminate the need for manual annotation removal, saving you time and effort.


