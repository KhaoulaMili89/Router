import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
function BootstrapModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setNewMovie({
      Id: uuidv4(),
      Title: "",
      Description: "",
      Poster: "",
      Rating: 1,
    });

    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    Id: uuidv4(),
    Title: "",
    Description: "",
    Poster: "",
    Rating: 1,
  });

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = () => {
    props.addMovies(newMovie);
    setNewMovie({
      Id: uuidv4(),
      Title: "",
      Description: "",
      Poster: "",
      Rating: 1,
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movies
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label className="input"> Title :</label>
            <input
              type="text"
              value={newMovie.Title}
              name="Title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="input"> Description :</label>
            <input
              type="text"
              value={newMovie.Description}
              name="Description"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="input"> Poster :</label>
            <input
              type="text"
              value={newMovie.Poster}
              name="Poster"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="input"> Rating :</label>
            <input
              type="text"
              value={newMovie.Rating}
              name="Rating"
              onChange={handleChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BootstrapModal;
