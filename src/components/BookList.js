import BookShow from './BookShow'
function BookList({books,onDelete}) {
  const renderedBooks=books.map((book)=>{
    return <BookShow key={book.id} onDelete={onDelete} book={book}/>;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
