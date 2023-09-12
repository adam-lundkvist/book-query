import React from "react";
import Button from "react-bootstrap/Button";

export function Book(props) {
  const book = props.book;
  if (!book) {
    return <div></div>;
  } else {
    const coverImageLink = "https://covers.openlibrary.org/b/id/";
    const coverImage = coverImageLink + book.cover_i + "-M.jpg";
    return (
      <div className="selected-book">
        <div>
          <img src={coverImage} className="selected-book-img" />
          <h2>Author</h2>
          <p>{book.author_name}</p>
        </div>
        <div>
          <h2>Title</h2>
          <p>{book.title}</p>
        </div>
        <div>
          <h2>Publisher</h2>
          {book.publisher.length === 1 ? (
            <p>{book.publisher}</p>
          ) : (
            book.publisher.slice(0, 5).map((publisher) => (
              <span>
                {publisher}
                {", "}
              </span>
            ))
          )}
        </div>
        <div>
          <h2>Subjects</h2>
          <p>{book.subject}</p>
        </div>
        <Button
          className="back-button"
          variant="secondary"
          onClick={props.backToList}
        >
          Go Back
        </Button>
      </div>
    );
  }
}
