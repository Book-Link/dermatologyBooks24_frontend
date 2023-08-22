import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookDisplay.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";

const BookIndex = () => {
  const [books, setBooks] = useState([]);
  const [newFilterBooks, setNewFilterBooks] = useState([]);

  const [selectedButton, setSelectedButton] = useState("");

  const bookBaseData = `${process.env.REACT_APP_BACKEND_URL}/getBookData`;
  useEffect(() => {
    axios.get(bookBaseData).then((response) => {
      setBooks(response.data);
      setNewFilterBooks(response.data);
    });
  }, [bookBaseData]);

  //gatting the button value for search and filter it by its subject name
  const buttonFilterBookCat = (btnBookType) => {
    const filterResult = books?.filter((product) => {
      return product?.bookSubject === btnBookType;
    });
    setNewFilterBooks(filterResult);
  };

  return (
    <section>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Books Name
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          {/* button */}
          <section className="special-btn-main special-button-index">
            <div className="special-btns">
              <span>
                <button
                  type="button"
                  onClick={() => {
                    buttonFilterBookCat("dOrthoBook");
                    setSelectedButton("dOrthoBook");
                  }}
                  className={
                    "btn special-btn index-special " +
                    (selectedButton === "dOrthoBook" ? "selected" : "")
                  }
                >
                  D. Ortho Book
                </button>
              </span>
              <span>
                <button
                  type="button"
                  onClick={() => {
                    buttonFilterBookCat("orthoJournal");
                    setSelectedButton("orthoJournal");
                  }}
                  className={
                    "btn special-btn index-special " +
                    (selectedButton === "orthoJournal" ? "selected" : "")
                  }
                >
                  Ortho Journal
                </button>
              </span>
            </div>
          </section>
          {newFilterBooks?.map((bookData, index) => (
            <div className="mt-3" key={bookData?._id}>
              <ul>
                <li>
                  <a
                    href={`/viewPdf/${bookData?._id}`}
                    className="Index_book_name pt-2"
                  >
                    {bookData?.bookName}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookIndex;
