import {useState} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books,setBooks]= useState([]);
  //delete books by id
  const deleteBookById=(id)=>{
    const updateBooks=books.filter((book)=>{
      return book.id!==id;
    });
    setBooks(updateBooks);
  }
  //Create new book
  const createBook=(title)=>{
    const updateBooks=[...books,{id: Math.round(Math.random()*9999),title,},];
    
    setBooks(updateBooks);
   
  }
//editBookById

  const editBookById=(id,title)=>{
    const updateBooks=books.map((book)=>{
      if(book.id===id){
        return {...book, title};
      }
      return book;
    })
    setBooks(updateBooks);
  }

  return <div className='app'>
    
    <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
    <BookCreate onCreate={createBook}/></div>;
}

export default App;
