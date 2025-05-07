import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Navbar } from "./Navbar";

export function Books() {
  const url = "https://backend-13-eight.vercel.app/api/books";
  const [booksData, setBooksData] = useState([]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    (async function fetchBookData() {
      try {
        const res = await axios.get(url);
        setBooksData(res.data.data);
      } catch (error) {
        throw error;
      }
    })();
  }, [deleting]);

  const handleDelete = async (id) => {
    try {
      setDeleting(true);
      await axios.delete(`${url}/delete/${id}`);
    } catch (error) {
      throw error;
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ margin: "2rem" }}>
        <h1 style={{ fontSize: "4rem" }}>All Books</h1>

        <ul style={{ maxWidth: "25rem" }}>
          {booksData.map((book) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={book._id}
            >
              <li
                style={{
                  margin: "1rem 0",
                  fontSize: "1.2rem",
                }}
              >
                {book.title}
              </li>
              <RiDeleteBin5Fill
                onClick={() =>
                  toast.promise(handleDelete(book._id), {
                    loading: "Deleting Book..",
                    success: "Successfully Deleted",
                    error: "Failed to Delete",
                  })
                }
                style={{ fontSize: "1.3rem", cursor: "pointer" }}
              />
            </div>
          ))}
        </ul>
        <Toaster />
      </div>
    </>
  );
}
