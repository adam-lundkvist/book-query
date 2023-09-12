import React from "react";

import { Book } from "../components/Book";
import { BookList } from "../components/BookList";

export const Search = (props) => {
  return (
    <div className="page-div">
      <Book book={props.book} backToList={props.backToList} />
      {props.book === null ? (
        <BookList books={props.books} displayBook={props.displayBook} />
      ) : null}
    </div>
  );
};
