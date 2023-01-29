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
  const createBook=(title)=>{
    const updateBooks=[...books,{id: Math.round(Math.random()*9999),title,},];
    
    setBooks(updateBooks);
   
  }

  return <div className='app'>
    
    <BookList books={books} onDelete={deleteBookById}/>
    <BookCreate onCreate={createBook}/></div>;
}

export default App;
