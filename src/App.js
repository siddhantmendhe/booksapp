import axios from 'axios';
import {useState, useEffect} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books,setBooks]= useState([]);

  //fetchbooks
  const fetchBooks= async()=>{
    const response= await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }

  //Initial render
  useEffect(()=>{
    fetchBooks();

  },[]);


  //delete books by id
  const deleteBookById= async(id)=>{
    await axios.delete(`http://127.0.0.1:3001/books/${id}`);
    const updateBooks=books.filter((book)=>{
      return book.id!==id;
    });
    setBooks(updateBooks);
  }
  //Create new book
  const createBook= async (title)=>{
  const response= await axios.post('http://127.0.0.1:3001/books',{title});

    const updateBooks=[...books,response.data];
    
    setBooks(updateBooks);
   
  }
//editBookById

  const editBookById= async (id,title)=>{
    const response=await axios.put(`http://127.0.0.1:3001/books/${id}`,{
      title
    });
    const updateBooks=books.map((book)=>{
      if(book.id===id){
        return {...book, ...response.data};
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
