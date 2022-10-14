import bookClass from "../Class";

function saveBook(name, author) {
  if (name && author) {
    const booksave = new bookClass(name, author);
    return { type: "SAVE", payload: booksave };
  }
}

function deleteBook(id) {
  return { type: "DELETE", payload: id };
}

function favoriteBook(title, author, thumbnail, id) {
  if (title && author) {
    const booksave = new bookClass(title, author, thumbnail, id);
    return { type: "FAVORITE", payload: booksave };
  }
}

export { saveBook, favoriteBook, deleteBook };
