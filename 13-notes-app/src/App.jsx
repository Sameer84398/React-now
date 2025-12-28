import React from 'react';
import { useState } from 'react';
import { X } from 'lucide-react';


const App = () => {
   const submitHandler = (e) => {
 
  e.preventDefault();
  const copyTask = [...task];
  copyTask.push({title, details});
  setTask(copyTask);
  setTitle('');
  setDetails('');  // This works once textarea has value={details}
}



  const deleteNote = (idx) => {
  const copyTask = [...task];
  copyTask.splice(idx, 1);
  setTask(copyTask);  // ← Now it will re-render!
}

  const [title,setTitle]=useState('');
  const [details,setDetails]=useState('');
  const [task,setTask]=useState([]);

  return (
    // Changed to min-h-screen and flex-col for mobile, lg:flex-row for desktop
    <div className="min-h-screen flex flex-col lg:flex-row bg-black text-white">

      {/* FORM SECTION */}
      <form 
        onSubmit={submitHandler} 
        className="flex flex-col lg:w-1/2 p-10 gap-4"
      >      
        <h1 className='text-3xl font-bold mb-4'>Add Notes</h1>
        
        {/* Fix: Added 'flex-col' here so inputs stack on top of each other */}
        <div className="flex flex-col w-full max-w-md gap-4">
          <input
            type="text"
            placeholder="Enter title"
            className="px-5 py-2 border-2 border-gray-400 rounded w-full text-white outline-none"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />

          {/* <textarea
            placeholder="Enter details"
            className=""
            onChange={(e)=>{
              setDetails(e.target.value);
            }}

          /> */}

          <textarea 
          value={details}  // ← Critical fix
          placeholder='Enter details here...'
          className='   px-5 py-2 border-2 border-gray-400 rounded w-full h-32 text-white outline-none'
          onChange={(e) => setDetails(e.target.value)}
          />



          <button className="bg-white text-black font-bold px-5 py-2 w-full rounded hover:bg-gray-200 transition-all active:bg-yellow-400
           ">
            Submit Note
          </button>
        </div>
      </form>

      {/* DISPLAY SECTION */}
      <div className='p-10 lg:border-l-2 border-gray-800 lg:w-1/2'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 overflow-auto items-start h-[90%] justify-start'>
          {/* Note Card Example */}
          {/* <div className='h-52 w-40 rounded-2xl bg-white p-4 text-black'>
            <p className="font-bold">Sample Note</p>
          </div> */}
          
        {task.map(function(elem,idx){
            return <div className=" relative h-52 w-40 rounded-2xl bg-[url('https://www.nicepng.com/png/detail/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png')] p-4 text-yellow-500 px-4 py-8 flex justify-between flex-col items-start pt-6 pb-4" key={idx}>
              <div>
              <h3 className="font-bold text-lg leading-snug">{elem.title}</h3>
              <p className='mt-3 leading-tight font-medium text-gray-500 text-sm'>{elem.details}</p>
            </div>
            <button onClick={()=>{deleteNote(idx)}} className='w-full bg-red-400 text-white py-1 text-xs rounded-2xl font-bold cursor-pointer active:scale-95'>Delete Note</button>

              </div>  
          }
        )}
        </div>
      </div>

    </div>
  );
};

export default App;