import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// npm install react-bootstrap bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <Form className='p-5' style={{ maxWidth: '40vw', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'start', backgroundColor: 'white', borderRadius: 8 }}>
        <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{display: 'flex', flexDirection: 'column', alignItems: 'start', minWidth: '100%'}}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" style={{display: 'flex', flexDirection: 'column', alignItems: 'start', minWidth: '100%'}}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" style={{display: 'flex', flexDirection: 'column', alignItems: 'start', minWidth: '100%'}}>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{minWidth: '100%'}}>
        Submit
      </Button>
    </Form>
  );
}

export default Login;