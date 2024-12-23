import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Noteaccordion({ title, content, _id, category, createdAt }) {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  const delHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      console.log(`Deleting note with id: ${id}`);
      // Perform delete operation, e.g., API call
    }
  };

  return (
    <>
      <Accordion
        open={open === _id}
        key={_id}
        className="mb-2 rounded-2xl border-2 p-2 bg-blue-100 border-blue-500 px-4"
      >
        <AccordionHeader
          onClick={() => handleOpen(_id)}
          className={`border-b-0 transition-colors ${
            open === _id ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          <div className="flex flex-row w-full justify-between">
            <div>{title}</div>
            <div className="flex flex-row gap-2">
              <Link to={`/note/${_id}`}>
                <Button color="blue" size="sm">
                  Edit
                </Button>
              </Link>
              <Button color="red" size="sm" onClick={() => delHandler(_id)}>
                Delete
              </Button>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="overflow-visible text-base bg-white text-blue-500 rounded-lg px-6 pt-4 font-normal">
          <p className="px-2 bg-deep-orange-500 text-orange-50 inline-block rounded-full">
            Category: {category}
          </p>
          <p className="w-full pt-2">{content}</p>
        </AccordionBody>
        <div className="p-2 text-sm text-gray-500">
          Created on: {new Date(createdAt).toLocaleDateString()}
        </div>
      </Accordion>
    </>
  );
}
