import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ title, disc, img, btn, price }) {
  return (
    <>


      <div className="m-2" style={{ width: '18rem', flexShrink: 0 }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img className='homeCards' variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{disc}</Card.Text>
            <h6>Price: {price}</h6>
            <Button className='text-white mt-2' style={{ width: "130px", height: "44px", backgroundColor: " #f53f85", fontWeight: "500", border: "none", borderRadius: "0" }} >{btn}</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default BasicExample;