import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

import Container from "react-bootstrap/Container";

import { Search } from "./pages/Search";
import { SearchBar } from "./components/SearchBar";
import { Header } from "./components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeBook, setActiveBook] = useState(null);
  const [handledInput, setHandledInput] = useState("");

  function search() {
    setResults([]);
    const uri = "https://openlibrary.org/search.json?title=" + query;
    fetch(uri)
      .then((response) => response.json())
      .then((data) => setResults(data.docs));
  }

  function handleQuery(event) {
    const input = event.target.value;
    setHandledInput(input.replace(/ /g, "+"));
    setQuery(handledInput);
  }

  function displayBook(index) {
    setActiveBook(results[index]);
  }

  function closeSelectedBook() {
    setActiveBook(null);
  }

  return (
    <>
      <Header />
      <Container className="container">
        <SearchBar
          query={query}
          handleQuery={handleQuery}
          search={search}
          books={results}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <Search
                book={activeBook}
                backToList={closeSelectedBook}
                books={results}
                displayBook={displayBook}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
}
