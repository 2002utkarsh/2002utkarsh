
import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


export default function Notes({sidebar, notes, on_click_add_notes, 
                                active_note, set_active_note, 
                                delete_pressed, active_note_cha}) {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
};


const formatDate = () => {

    const formatted = new Date().toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
        return "";
    }
    return formatted;
};

    //console.log("THE UUID COUNT IS: ", notes.length);

const format_date = (date) => {

    const formatted = new Date(date).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
        return "";
    }
    return formatted;
};
const save_pressed = (value,value1) =>{
    let a = value+" ";
    const htmlRemoveRegex = /(<([^>]+)>)/gi;
    const b = value.replace(htmlRemoveRegex, '');
    notes.map((note) => (
        note.id === active_note ? (note.title = value, note.text = value1, setValue(a)): ""
      )) 
      localStorage.setItem("notes", JSON.stringify(notes));
    
  
  }


const active_note_change = () => {
    //let a= notes.find((note)=> note.id === active_note);
    console.log("you are in save function")
    let a;
    for( let i = 0; i < notes.length; i++){
      if(notes[i].id === active_note){
        // setNotes(notes[i].title = value1);}  // This is not working NEED TO CHK SETNOTES ALMOST DONE WITH SAVING THE FILE
    setValue(notes[i].title);
    setValue1(notes[i].text);}

  }}

  const active_pressed = (note) =>{
    set_active_note(note.id)
    active_note_change()
  }


  return (
<>
  <div className="columns">

    {sidebar?<><div className="column is-one-fifth">
    <aside className="menu">
      <div className="level">
    <p className="menu-label has-text-centered py-2 level-left">
          <p className="has-text-centered px-6 is-size-4">NOTES</p> 
    </p>
    <button className="level-right" onClick = {()=>{on_click_add_notes()}}>+</button>
    </div>
    <ul className="menu-list has-text-centered" >
        <div className = "app-sidebar-notes" >
        {notes.map((note) => (
            <>
            <div onClick= {()=>active_pressed(note)}>
            <div className={note.id===active_note?"has-background-info":""}>
            <h1><strong><h1 dangerouslySetInnerHTML={{__html: note.title}}></h1></strong></h1>
            <p><h1 dangerouslySetInnerHTML={{__html: note.text && note.text.substr(0,20)}}></h1></p>
            <h3>{format_date(note.date)}</h3>
            <hr></hr>
            </div>
            </div>

            </>
        ))}
        </div>


    </ul>
    </aside>
    
    </div></>:<></>}

    <>{notes.length===0?<p className='has-text-centered is-size-2 py-6 '><b className="py-6">...Click on + to add a new note...</b></p>:""}</>
    <div className={notes.length===0?"is-hidden":""}>
    

  <div className='column is-four-fifth'>
  <nav className="navbar py-1" aria-label="main navigation">
  
  <div className="navbar-menu">
    <div className="navbar-start">
    
    <div id="text1"><ReactQuill theme="bubble" placeholder='TITLE'  value={value} onChange={setValue}/>
    <p className='text1 px-3 is-size-6'>{formatDate()}</p>
    </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item" onClick = {()=>save_pressed(value,value1)}><a>SAVE</a></div>
      <div className="navbar-item" onClick = {()=> delete_pressed(active_note)}><a>DELETE</a></div>
    
      </div>
    </div>
    
</nav>
    {console.log((active_note_cha))}
    <div id="text2" ><ReactQuill className='editor' theme="snow" value={value1} onChange={setValue1} /></div>
    {console.log(value1)}
    </div>
    </div>
    </div>
    </>
  );
}

                                
