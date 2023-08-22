import React, { useState, useEffect, useRef } from "react";

const PopupEditBookList = ({ singleBook }) => {
  const { _id } = singleBook;
  const [suceesMsg, setSuccessMsg] = useState(false);
  const [message, setMessage] = useState("");
  const bookImgRef = useRef();
  const bookNameRef = useRef();
  const authorNameRef = useRef();
  const isbnRef = useRef();
  const bookNumberRef = useRef();
  const bookLinkRef = useRef();
  const downloadBookLinkRef = useRef();
  const bookSubjectRef = useRef();
  const sourceNameRef = useRef();

  //  update book image
  const handleEditBookImage = (e) => {
    e.preventDefault();
    //this poroduct sotoreing all input value like object and properties
    const editBook = {
      bookImg: bookImgRef?.current?.value,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/updateBookImage/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editBook),
    })
      .then((res) => res.json())
      .then((result) => {
        bookImgRef.current.value = "";
      });
    // alert("product successfully updated");
    setMessage("Your Product Udpade Successfully");
    window.location.reload();
  };

  // update book Name
  const handleEditBookName = (e) => {
    e.preventDefault();
    //this poroduct sotoreing all input value like object and properties
    const editBook = {
      bookName: bookNameRef?.current?.value,
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/updateBookName/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editBook),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        bookNameRef.current.value = "";
      });
    // alert("product successfully updated");
    setMessage("Your Product Udpade Successfully");
    window.location.reload();
  };

  // update author name
  const handleEditBookAuthorName = (e) => {
    e.preventDefault();
    //this poroduct sotoreing all input value like object and properties
    const editBook = {
      authorName: authorNameRef?.current?.value,
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/updateBookAuthorName/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editBook),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        authorNameRef.current.value = "";
      });
    // alert("product successfully updated");
    setMessage("Your Product Udpade Successfully");
    window.location.reload();
  };

  //  update isbn
  const handleEditBookIsbn = (e) => {
    e.preventDefault();
    //this poroduct sotoreing all input value like object and properties
    const editBook = {
      isbn: isbnRef?.current?.value,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/updateBookIsbn/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editBook),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        isbnRef.current.value = "";
      });
    // alert("product successfully updated");
    setMessage("Your Product Udpade Successfully");
    window.location.reload();
  };

  // update book number
  const handleEditBookNumber = (e) => {
    e.preventDefault();
    //this poroduct sotoreing all input value like object and properties
    const editBook = {
      bookNumber: bookNumberRef?.current?.value,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/updateBookNumber/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editBook),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        bookNumberRef.current.value = "";
      });
    // alert("product successfully updated");
    setMessage("Your Product Udpade Successfully");
    window.location.reload();
  };

  //  update booklink
  const handleEditBookLink = (e) => {
    e.preventDefault();
    //this poroduct sotoreing all input value like object and properties
    const editBook = {
      bookLink: bookLinkRef?.current?.value,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/updateBookLink/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editBook),
    })
      .then((res) => res.json())
      .then((result) => {
        bookLinkRef.current.value = "";
      });
    // alert("product successfully updated");
    setMessage("Your Product Udpade Successfully");
    window.location.reload();
  };

  // update download book link
  const handleEditBookDownloadLink = (e) => {
    e.preventDefault();
    //this poroduct sotoreing all input value like object and properties
    const editBook = {
      downloadBookLink: downloadBookLinkRef?.current?.value,
    };

    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/updateBookDownloadLink/${_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editBook),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        downloadBookLinkRef.current.value = "";
      });
    // alert("product successfully updated");
    setMessage("Your Product Udpade Successfully");
    window.location.reload();
  };

  // update booksubject
  const handleEditBookSubject = (e) => {
    e.preventDefault();
    //this poroduct sotoreing all input value like object and properties
    const editBook = {
      bookSubject: bookSubjectRef?.current?.value,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/updateBookSubject/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editBook),
    })
      .then((res) => res.json())
      .then((result) => {
        bookSubjectRef.current.value = "";
      });
    // alert("product successfully updated");
    setMessage("Your Product Udpade Successfully");
    window.location.reload();
  };

  //  update Source Name
  const handleEditSourceName = (e) => {
    e.preventDefault();
    //this poroduct sotoreing all input value like object and properties
    const editBook = {
      sourceName: sourceNameRef?.current?.value,
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/updateSourceName/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editBook),
    })
      .then((res) => res.json())
      .then((result) => {
        sourceNameRef.current.value = "";
      });
    // alert("product successfully updated");
    setMessage("Your Product Udpade Successfully");
    window.location.reload();
  };

  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdropBook"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Edit Your data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* this is modal body */}

              <div
                className="card"
                style={{
                  width: "100%",
                }}
              >
                {/* image update */}
                <form className="bookInputForm" onSubmit={handleEditBookImage}>
                  <div className="mb-3">
                    <label htmlFor="InputBookImage" className="form-label">
                      Book Image Link:
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="InputBookImage"
                      placeholder={singleBook?.bookImg}
                      ref={bookImgRef}
                    />
                  </div>

                  {suceesMsg && (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      <strong>Book successfully update!</strong>
                    </div>
                  )}
                  <button type="submit" className="btn bookSubmit">
                    Submit
                  </button>
                </form>

                {/* book name update */}
                <form className="bookInputForm" onSubmit={handleEditBookName}>
                  <div className="mb-3">
                    <label htmlFor="InputBookName" className="form-label">
                      Book Name/ Book Title:
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="InputBookName"
                      placeholder={singleBook?.bookName}
                      ref={bookNameRef}
                    />
                  </div>
                  {suceesMsg && (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      <strong>Book successfully update!</strong>
                    </div>
                  )}
                  <button type="submit" className="btn bookSubmit">
                    Submit
                  </button>
                </form>

                {/* Author name update */}
                <form
                  className="bookInputForm"
                  onSubmit={handleEditBookAuthorName}
                >
                  <div className="mb-3">
                    <label htmlFor="InputAuthorName" className="form-label">
                      Author Name:
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="InputAuthorName"
                      placeholder={singleBook?.authorName}
                      ref={authorNameRef}
                    />
                  </div>

                  {suceesMsg && (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      <strong>Book successfully update!</strong>
                    </div>
                  )}
                  <button type="submit" className="btn bookSubmit">
                    Submit
                  </button>
                </form>

                {/* Isbn update */}
                <form className="bookInputForm" onSubmit={handleEditBookIsbn}>
                  <div className="mb-3">
                    <label htmlFor="Inputisbn" className="form-label">
                      ISBN/DOI:
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="Inputisbn"
                      placeholder={singleBook?.isbn}
                      ref={isbnRef}
                    />
                  </div>

                  {suceesMsg && (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      <strong>Book successfully update!</strong>
                    </div>
                  )}
                  <button type="submit" className="btn bookSubmit">
                    Submit
                  </button>
                </form>

                {/* Book number update */}
                <form className="bookInputForm" onSubmit={handleEditBookNumber}>
                  <div className="mb-3">
                    <label htmlFor="InputBookNo." className="form-label">
                      Book No:
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="InputBookNo."
                      placeholder={singleBook?.bookNumber}
                      ref={bookNumberRef}
                    />
                  </div>
                  {suceesMsg && (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      <strong>Book successfully update!</strong>
                    </div>
                  )}
                  <button type="submit" className="btn bookSubmit">
                    Submit
                  </button>
                </form>

                {/* book link update */}
                <form className="bookInputForm" onSubmit={handleEditBookLink}>
                  <div className="mb-3">
                    <label className="form-label">Book Link:</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="InputBookLink"
                      placeholder={singleBook?.bookLink}
                      ref={bookLinkRef}
                    />
                  </div>

                  {suceesMsg && (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      <strong>Book successfully update!</strong>
                    </div>
                  )}
                  <button type="submit" className="btn bookSubmit">
                    Submit
                  </button>
                </form>

                {/* download link update */}
                <form
                  className="bookInputForm"
                  onSubmit={handleEditBookDownloadLink}
                >
                  <div className="mb-3">
                    <label htmlFor="InputDownloadBook" className="form-label">
                      Download Book Link
                    </label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      id="InputDownloadBook"
                      placeholder={singleBook?.downloadBookLink}
                      ref={downloadBookLinkRef}
                    />
                  </div>

                  {suceesMsg && (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      <strong>Book successfully update!</strong>
                    </div>
                  )}
                  <button type="submit" className="btn bookSubmit">
                    Submit
                  </button>
                </form>

                {/* book subject update */}
                <form
                  className="bookInputForm"
                  onSubmit={handleEditBookSubject}
                >
                  <div className="mb-3">
                    <label htmlFor="InputSubjectName" className="form-label">
                      Discipline/Name Book Subject:
                    </label>

                    <select
                      className="input-group form-select"
                      id="InputSubjectName"
                      ref={bookSubjectRef}
                      required
                    >
                      <option value="">Choose</option>
                      <option value="dOrthoBook">D. Ortho Book</option>
                      <option value="orthoJournal">Ortho Journal</option>
                    </select>
                  </div>

                  {suceesMsg && (
                    <div
                      className="alert alert-success text-center"
                      role="alert"
                    >
                      <strong>Book successfully update!</strong>
                    </div>
                  )}
                  <button type="submit" className="btn bookSubmit">
                    Submit
                  </button>
                </form>

                {/* source name update */}
                {singleBook?.sourceName?.length && (
                  <form
                    className="bookInputForm"
                    onSubmit={handleEditSourceName}
                  >
                    <div className="mb-3">
                      <label htmlFor="InputBookImage" className="form-label">
                        Source Name update
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="InputBookImage"
                        placeholder={singleBook?.sourceName}
                        ref={sourceNameRef}
                      />
                    </div>

                    {suceesMsg && (
                      <div
                        className="alert alert-success text-center"
                        role="alert"
                      >
                        <strong>Book successfully update!</strong>
                      </div>
                    )}
                    <button type="submit" className="btn bookSubmit">
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupEditBookList;
