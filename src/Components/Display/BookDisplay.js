import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./BookDisplay.css";
import { saveAs } from "file-saver";
import loader from "../../images/Loading.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import BookIndex from "./BookIndex";

const BookDisplay = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [bookCat, setBookCat] = useState("");
  const [topBannerImg, setTopBannerImg] = useState([]);
  const history = useHistory();

  const [selectedButton, setSelectedButton] = useState("");

  //for searching book
  const handleSearch = (e) => {
    setSearch(e.target.value);
    // search butoon a click na korei jokhn change korbo tokhni data dekhabe
    // handeSearchSubmit(e);
  };

  //gatting the radio button value and set inte state
  const filterbookCat = (bookType) => {
    setBookCat(bookType);
  };

  //gatting the button value for search and filter it by its subject name
  const buttonFilterBookCat = (btnBookType) => {
    const filterResult = books.filter((product) => {
      return product?.bookSubject === btnBookType;
    });
    setFilteredBooks(filterResult);
  };

  //ata conditionally search kore value onujay
  const handeSearchSubmit = (e) => {
    e.preventDefault();
    if (bookCat === "bookName") {
      const filterResult = books.filter((product) =>
        product?.bookName
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      );

      setFilteredBooks(filterResult);
    }
    if (bookCat === "authorName") {
      const filterResult = books.filter((product) =>
        product?.authorName
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      );
      setFilteredBooks(filterResult);
    }
    if (bookCat === "isbn") {
      const filterResult = books.filter((product) =>
        product?.isbn
          ?.toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      );
      setFilteredBooks(filterResult);
    }
    if (bookCat === "sourceName") {
      const filterResult = books.filter((product) =>
        product?.sourceName
          ?.toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
      );
      setFilteredBooks(filterResult);
    }
  };

  //getting books data

  const bookBaseData = `${process.env.REACT_APP_BACKEND_URL}/getBookData`;

  useEffect(() => {
    axios.get(bookBaseData).then((response) => {
      setBooks(response.data);
      setFilteredBooks(response.data);
    });
  }, []);

  //Top banner img reading/getting form server

  useEffect(() => {
    if (topBannerImg.length === 0) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/DisplayBookTopImage`)
        .then((response) => {
          setTopBannerImg(response.data);
        });
    }
  }, [topBannerImg]);

  //this is for download book
  const handleDownload = (download) => {
    saveAs(download);
  };

  //logout and status into logout
  const handeLogoutStatusChange = async () => {
    // remove the login and session data from storage and redirect to the home page
    sessionStorage.removeItem("dataOfdermatologyBooks24");
    sessionStorage.removeItem("pcData");
    sessionStorage.removeItem("mblData");
    setTimeout(() => {
      history.push("/");
    }, 500);
  };

  return (
    <main className="book_display">
      {filteredBooks?.length === 0 && topBannerImg?.length === 0 && (
        <div className="loader">
          <img src={loader} alt="Loading......" />
        </div>
      )}

      <section className="book_display_header">
        {topBannerImg.map((tpBanner) => (
          <LazyLoadImage
            key={tpBanner._id}
            src={tpBanner?.topdisplayBookBanner}
            alt="Neourology Library"
            className="img-fluid bannerImg"
            effect="blur"
            width={"100%"}
            height={"auto"}
          />
        ))}
      </section>
      <section className="container-fluid book_display_body my-3">
        <div className="logout-and-publish-btns">
          <button
            className="logout_btn"
            onClick={() => handeLogoutStatusChange()}
          >
            <div className="logout-icon">
              <img
                src="https://res.cloudinary.com/dozt7xeil/image/upload/v1691862021/DentalJournal/power_vl9a2g.png"
                alt=""
                className="log-i"
              />
            </div>
            <span className="log-txt">Logout</span>
          </button>
        </div>

        <form className="my-5">
          <section className="index-and-searchBtn">
            <div className="bookIndex-btn-body">
              <a
                className="btn BookIndex_btn"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                <img
                  src="https://res.cloudinary.com/dozt7xeil/image/upload/v1691864540/DentalJournal/index_vgs1ua.png"
                  alt=""
                  className="index-icon"
                />{" "}
                Index
              </a>
              <BookIndex />
            </div>
            <div className="search-section d-flex justify-content-center">
              <input
                type="text"
                className="searchbar"
                placeholder={
                  selectedButton === "orthoJournal"
                    ? "Search book title, source name, author name, doi, ..."
                    : "Search book name, author name, isbn, ..."
                }
                onChange={handleSearch}
              />
              <button
                type="submit"
                className="btn search_btn"
                onClick={handeSearchSubmit}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </section>
          <div className="sideFilter my-4">
            {selectedButton === "orthoJournal" ? (
              <span className="radioSearch">
                <input
                  type="radio"
                  id="book_name"
                  name="search"
                  value="bookName"
                  onClick={() => filterbookCat("bookName")}
                />
                <label htmlFor="book_name">Title</label>
              </span>
            ) : (
              <span className="radioSearch">
                <input
                  type="radio"
                  id="book_name"
                  name="search"
                  value="bookName"
                  onClick={() => filterbookCat("bookName")}
                />
                <label htmlFor="book_name">Book Name</label>
              </span>
            )}

            {selectedButton === "orthoJournal" && (
              <span className="radioSearch">
                <input
                  type="radio"
                  id="sourceName"
                  name="search"
                  value="sourceName"
                  onClick={() => filterbookCat("sourceName")}
                />
                <label htmlFor="sourceName">Source Name</label>
              </span>
            )}

            <span className="radioSearch">
              <input
                type="radio"
                id="author_name"
                name="search"
                value="authorName"
                onClick={() => filterbookCat("authorName")}
              />
              <label htmlFor="author_name">Author Name</label>
            </span>

            {selectedButton === "orthoJournal" ? (
              <span className="radioSearch extra-btn">
                <input
                  type="radio"
                  id="isbn"
                  name="search"
                  value="isbn"
                  onClick={() => filterbookCat("isbn")}
                />
                <label htmlFor="isbn">DOI/ISBN Number</label>
              </span>
            ) : (
              <span className="radioSearch">
                <input
                  type="radio"
                  id="isbn"
                  name="search"
                  value="isbn"
                  onClick={() => filterbookCat("isbn")}
                />
                <label htmlFor="isbn">ISBN Number</label>
              </span>
            )}
          </div>
        </form>
        {/* button */}
        <section className="special-btn-main">
          <h2 className="mb-5">Select Your Choice</h2>
          <div className="special-btns">
            <span>
              <button
                onClick={() => {
                  buttonFilterBookCat("dOrthoBook");
                  setSelectedButton("dOrthoBook");
                }}
                className={
                  "btn special-btn " +
                  (selectedButton === "dOrthoBook" ? "selected" : "")
                }
              >
                D. Ortho Book
              </button>
            </span>
            <span>
              <button
                onClick={() => {
                  buttonFilterBookCat("orthoJournal");
                  setSelectedButton("orthoJournal");
                }}
                className={
                  "btn special-btn " +
                  (selectedButton === "orthoJournal" ? "selected" : "")
                }
              >
                Ortho Journal
              </button>
            </span>
          </div>
        </section>

        <div className="book_display_main my-3">
          <div className="row bookRow">
            {/* card */}
            {filteredBooks?.map((bookData, index) => (
              <div
                className="col-12 col-md-4 book_card mb-4"
                key={bookData?._id}
              >
                <LazyLoadImage
                  src={bookData?.bookImg}
                  alt=""
                  className="bookImage"
                  effect="blur"
                  width={"100%"}
                  height={"auto"}
                />
                <span className="b_no">
                  <p>{index + 1}</p>
                </span>
                <div className="bookFoot">
                  <p className="b-name pt-2">{bookData?.bookName}</p>
                  <p className="b-name pt-2">{bookData?.authorName}</p>
                  <aside className="actionbtn">
                    <span className="view-btn-span">
                      <Link
                        to={`/viewPdf/${bookData?._id}`}
                        className="view-btn"
                      >
                        View
                      </Link>
                      <i className="bi bi-eye"></i>
                    </span>
                    <span className="download-btn-span">
                      <button
                        className="download-Btn"
                        onClick={() =>
                          handleDownload(bookData?.downloadBookLink)
                        }
                      >
                        Download
                      </button>
                      <i className="bi bi-download"></i>
                    </span>
                  </aside>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookDisplay;
