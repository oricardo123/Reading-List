import { useState } from "react";

const BookEdit = ({ book, onEdit, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book.id, title);
    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input value={title} className="input" onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
