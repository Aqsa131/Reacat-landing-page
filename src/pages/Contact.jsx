import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
      <Form className='p-5 border rounded shadow' style={{ width: '100%', maxWidth: '500px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control style={{borderRadius:"0"}} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control style={{borderRadius:"0"}} type="password" placeholder="Password" />
        </Form.Group>

        <Button
          style={{
            backgroundColor: "#f53f85",
            color: "white",
            border: "none",
            width: "150px",
            height: "50px",
            borderRadius: "0"
          }}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
