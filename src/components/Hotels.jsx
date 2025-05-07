import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Navbar } from "./Navbar";

export function Hotels() {
  const url = "http://localhost:5175/api/hotels";
  const [hotelsData, setHotelsData] = useState([]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    (async function fetchHotelsData() {
      try {
        const res = await axios.get(url);
        setHotelsData(res.data.data);
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
          {hotelsData.map((hotel) => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              key={hotel._id}
            >
              <li
                style={{
                  margin: "1rem 0",
                  fontSize: "1.2rem",
                }}
              >
                {hotel.name}
              </li>
              <RiDeleteBin5Fill
                onClick={() =>
                  toast.promise(handleDelete(hotel._id), {
                    loading: "Deleting Hotel..",
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
