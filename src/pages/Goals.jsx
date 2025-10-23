import React, { useEffect, useState } from 'react'

import '../App.css'

function Goals() {

  const [goal, setGoal]  = useState("");
  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : [];
  })

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const [showForm, setShowForm] = useState(false);

  function toggle() {
    setShowForm(!showForm)
  }

  function closeForm(){
    setShowForm(false)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const text = goal.trim();
    if(!text) return;
    const newGoal = {
      id: Date.now(),
      text,
      achieved: false
    };
    setGoals((prev) => [...prev, newGoal]);
    setGoal("")
    setShowForm(false)
  }


  const startEditing = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id) => {
    setGoals((prev) => prev.map((goal) => goal.id === id ? 
    {...goal, text: editingText} : goal))
    setEditingId(null);
  }

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id))
  }

  const setAchieved = (id) => {
    setGoals((prev) =>
    prev.map((goal) => goal.id === id ? {...goal, achieved: !goal.achieved} : goal))
  }

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals))
  }, [goals])

  

 
 return (
    <div className=' flex flex-col max-h-96 bg-[#fffefec2] m-5 mt-4 p-4 shadow-lg rounded-sm'>
      <h1 className='text-3xl font-semibold'>Goals</h1>
      {showForm && <form action=""
      onSubmit={handleSubmit}
       className='goalForm'>
        <button className='self-end'
        onClick={closeForm}
        type='button'
        >X</button>
        <label>New goal</label><br />
        <input type="text" 
        value={goal} 
        onChange={(e) => setGoal(e.target.value)}
        placeholder='add new gaol..'
        className='w-3/4 p-4 border-s shadow-lg rounded-2xl'
        />
         <button className='bg-blue-100 shadow-lg m-2.5 p-2 rounded-2xl text-sm '
        >
          Add Goal</button>
      </form>}
      <ul className='flex flex-col w-full text-pretty max-h-96 overflow-y-scroll'>
        {goals.map((g) => (
          <li key={g.id} className='goal'>
            {editingId === g.id ? (
              <>
              <input
              value={editingText}
              className='min-w-40'
              onChange={(e) => setEditingText(e.target.value)}
              />
              <button onClick={() => saveEdit(g.id)}
                className=''
                >📑</button>
              <button onClick={() => setEditingId(null)}>✖</button>
              </>
            ) : (
              <>
               <input type="checkbox"
               id='checkbox'
               checked={g.achieved}
               onChange={() => setAchieved(g.id)}
               className='size-7 mx-3.5'
               />            
                <span>{g.text}</span>
               <button onClick={() => startEditing(g.id, g.text)}
               className='ml-auto'

                >✏</button>
              <button
            type='button'
            onClick={() => deleteGoal(g.id)}
            className=''
            >
              🚮
            </button>
               </>
            )}
          </li>
        ))}
      </ul>
        <button
         className='bg-blue-50 shadow-lg w-25 m-2.5 p-2 rounded-sm' 
         onClick={toggle}
        >
          Add Goal
          </button>
    </div>
  )
}

export default Goals
