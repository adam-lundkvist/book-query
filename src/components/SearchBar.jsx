import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { Link, useNavigate } from "react-router-dom";

// Komponenten SearchBar innehåller sökfunktionen med sin tillhörande knapp.
export function SearchBar(props) {
  const [btnClicked, setBtnClicked] = useState(null);
  // Props används för att kunna invokera funktioner och hantera värden från App.js.

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/contacts");
  };

  function submitBtn() {
    props.search();
    setBtnClicked(true);

    if (props.books.length === 0) {
      setTimeout(() => {
        setBtnClicked(false);
      }, 40000);
    }
  }

  function enterClicked(e) {
    if (e.key === "Enter") {
      submitBtn();
    }
  }

  return (
    <div className="search-bar">
      <Form onSubmit={handleSubmit}>
        <InputGroup
          className="d-flex"
          value={props.query}
          onChange={props.handleQuery}
        >
          <Form.Control
            placeholder="Search book title"
            aria-describedby="basic-addon2"
          />
          <Link to="/search">
            <Button
              className="sumbit-btn"
              variant="outline-secondary"
              id="button-addon2"
              onClick={submitBtn}
              type="submit"
            >
              Search
              {btnClicked === true && props.books.length === 0 ? (
                <Spinner animation="border" size="sm" className="spinner" />
              ) : null}
            </Button>
          </Link>
        </InputGroup>
      </Form>
    </div>
  );
}
