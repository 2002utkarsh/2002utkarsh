import react, {useState, useEffect} from 'react';
import Header from './components/Header';
import Notes from './components/Notes';
import uuid from "react-uuid";

let notes_array = [];
function App() {

  const delete_pressed =(id)  => {
    let ans = window.confirm("Are you sure you want to delete this note?");
    if(ans === true){
    setNotes(notes.filter((note) => note.id !== id));}
    };


  const on_click_add_notes = () => {
    const new_note = {
      id: uuid(),
      title: "Untitled Note",
      text: "Text review",
      date: Date.now()
    }
    setNotes([new_note, ...notes])
  }

  const active_note_change = (value) => {
    //let a= notes.find((note)=> note.id === active_note);
    // let a;
    // for( let i = 0; i < notes.length; i++){
    //   if(notes[i].id === active_note){
    //     value =notes[i].title;}
  }
    //console.log("The value :", value);

  const [notes, setNotes] = useState(
      localStorage.notes ? JSON.parse(localStorage.notes) : []
    )

    
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);


  // const [notes, setNotes] = useState([]);

  const empty_1 = () => {}

  const [active_note, set_active_note] = useState(false);


  const on_click_sidebar = () => {
    if(sidebar === false){
      setSidebar(true);
      console.log("Sidebar khul jaa");
    }
    else{
      setSidebar(false);
    }

  
  }

  

  const [sidebar, setSidebar] = useState(false);

  // sidebar = {sidebar} on_click_sidebar = {on_click_sidebar}
  return(
    <>
    <Header on_click_sidebar = {on_click_sidebar} />
    <Notes sidebar={sidebar} notes = {notes} on_click_add_notes={on_click_add_notes}
            active_note = {active_note} set_active_note = {set_active_note}
            
            delete_pressed={delete_pressed} active_note_cha = {active_note_change()}
            />

    </>
  );
  }

export default App;
