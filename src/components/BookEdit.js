import { useState } from "react";
function BookEdit() {
  const [title,setTitle]=useState('');
  const handleChange=(event)=>{
    setTitle(event.targer.value);

  }
  return <div>
    <label>Title</label>
    <input className="input" value={title} onChange={handleChange}/>
    <button className="button is-primary">Save</button>

  </div>;
}

export default BookEdit;
