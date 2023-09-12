import React from "react";
import Container from "react-bootstrap/Container";

export function Footer() {
  return (
    <footer className="py-3 my-4 bg-dark">
      <Container>
        <div className="d-flex justify-content-between">
          <h3 className="text-center text-muted">World Book Library</h3>
          <p className="text-center text-muted">
            Designed & Built by{" "}
            <a target="_blank" href="https://www.adamlundkvist.com/">
              Adam Lundkvist
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
