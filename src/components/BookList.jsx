import React from "react";
import { BookCard } from "./BookCard";
import Row from "react-bootstrap/Row";
import CardPlaceholder from "./CardPlaceholder";
// Komponenten som listar böckerna.
export function BookList(props) {
  const bookList = props.books;
  const slicedBookList = bookList.slice(0, 30);
  return (
    <div className="book-section">
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {slicedBookList.length > 0 ? (
          slicedBookList.map((result, index) => (
            <BookCard
              result={result}
              key={index}
              className="book-card"
              viewBook={() => props.displayBook(index)}
            ></BookCard>
          ))
        ) : (
          <>
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
            <CardPlaceholder />
          </>
        )}
      </Row>
    </div>
  );
}
