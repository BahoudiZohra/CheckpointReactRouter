import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const AddMovie = ({add}) => {

    const [show, setShow] = useState(false);
    const handleCancel = () =>setShow(false);
    const handleSubmitt = () =>setShow(true);

    //Initialisation State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rate, setRate] = useState("");

    // Update State

    const HandleTitle = (e) => { setTitle(e.target.value) }
    const HandleDescription = (e) => { setDescription(e.target.value) }
    const HandleRate = (e) => { setRate(e.target.value) }
    const HandlePosterUrl = (e) => { setPosterUrl(e.target.value) }

   // Function add Movie
   const handlMovie = (e) =>{
    let newMovie = {title, description, rate, posterUrl};
    add(newMovie);
   }
  return (
    <>
    <Button variant="primary" onClick={handleSubmitt} style={{marginTop:'50px', marginLeft:'650px', marginBottom:'50px'}}>
      Add New Movie
    </Button>

    <Modal show={show} onHide={handleCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie title"
              autoFocus
              value={title}
              onChange={(e) => HandleTitle(e)}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter movie description"
              autoFocus
              value={description}
              onChange={(e) => HandleDescription(e)}
            />
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter movie Rate"
              autoFocus
              value={rate}
              onChange={(e) => HandleRate(e)}
            />
            <Form.Label>PosterUrl</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              value={posterUrl}
              onChange={(e) => HandlePosterUrl(e)}
            />
          </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Close
        </Button>
        <Button variant="primary" onClick={() =>handlMovie()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default AddMovie
