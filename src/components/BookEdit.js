import { useState } from "react";
function BookEdit() {
  const [title,setTitle]=useState('');
  const handleChange=(event)=>{
    setTitle(event.targer.value);

  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log('New title', title);
  }
  return <div>
    <form onSubmit={handleSubmit} className="book-edit">    
    <label>Title</label>
    <input className="input" value={title} onChange={handleChange}/>
    <button className="button is-primary" onClick={handleSubmit}>Save</button>
    </form>
  </div>;
}

export default BookEdit;
