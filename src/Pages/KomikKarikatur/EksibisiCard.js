import React, { useState } from "react";
import "./EksibisiCard.scss";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const EksibisiCard = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="data-container">
      <Card style={{marginTop: 50, marginBottom: 50}}>
        <a href={data.link} target="_blank">
        <Card.Img variant="top" src={data.file_poster} />
        </a>
        <Card.Body>
          <Card.Title> {data.judul} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {data.nama}{" "}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {data.sklh}{" "}
          </Card.Subtitle>

          <Modal show={show} onHide={handleClose}>
            <Modal.Body>{data.uraian} </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#" onClick={handleShow}>
            Baca Deskripsi
          </Card.Link>
        </Card.Footer>
      </Card>
    </div>
  );
};
