import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillHeart } from "react-icons/ai";
function PopUp({ move,moveName }) {
  const [show, setShow] = useState(false);
  const [favIcon, setfavIcon] = useState("iconFavNo");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [massage, setMassage] = useState("");

  useEffect(() => {
    let favoriteMoviesId=JSON.parse(localStorage.getItem("favorite")).map((element)=>{ return move.id})
    console.log(localStorage.getItem("favorite") &&
    favoriteMoviesId.includes(move.id));
    if (
      localStorage.getItem("favorite") &&
      favoriteMoviesId.includes(move.id)
    ) {
      setfavIcon("iconFavYes");
setMassage(`Remove ${moveName} from favorite list`)
    }else{
        setMassage(`Add ${moveName} to favorite list`)
    }

    
  }, []);

  const favoriteButton = () => {
    let favoriteMoviesId=JSON.parse(localStorage.getItem("favorite")).map((element)=>{ return move.id})
    if (
      !localStorage.getItem("favorite") ||
      !favoriteMoviesId.includes(move.id)
    ) {
      let moveFavArr = localStorage.getItem("favorite")
        ? favoriteMoviesId
        : [];
      localStorage.setItem("favorite", JSON.stringify([...moveFavArr, move]));
      setfavIcon("iconFavYes");
      setMassage(`Remove ${moveName} from favorite list`)
    } else {
      let moveFavArr = JSON.parse(localStorage.getItem("favorite")).filter(
        (element) => {
          return element.id !== move.id;
        }
      );
      localStorage.setItem("favorite", JSON.stringify(moveFavArr));
      setMassage(`Add ${moveName} to favorite list`)
      setfavIcon("iconFavNo");
    }
    handleClose();
  };

  return (
    <>
      <p className={`${favIcon}`} onClick={handleShow}>
        <AiFillHeart />
      </p>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Favorite </Modal.Title>
        </Modal.Header>
        <Modal.Body>{massage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={favoriteButton}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
