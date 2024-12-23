import React, { useEffect, useState } from "react";
import { Noteaccordion } from "../components/Noteaccordion";
import Mainscreen from "../components/Mainscreen";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";

function Mynotes() {
  const [notes, setNotes] = useState([]); // State for fetched notes

  const api = axios.create({
    baseURL: "http://localhost:5172", // Ensure this matches your backend server
  });

  const fetchNotes = async () => {
    try {
      const response = await api.get("/api/notes");
      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <div className="p-8 text-black">
        <Mainscreen title="Welcome back Suyash">
          <div className="w-full flex flex-col gap-8">
            <div>
              <Link to="/create-note"> {/* Add a proper route for creating a new note */}
                <Button color="blue" size="md">
                  Create New
                </Button>
              </Link>
            </div>

            <div>
              {notes.map((note) => (
                <Noteaccordion
                  title={note.title}
                  content={note.content}
                  _id={note._id}
                  category={note.category}
                  key={note._id}
                />
              ))}
            </div>
          </div>
        </Mainscreen>
      </div>
    </div>
  );
}

export default Mynotes;
