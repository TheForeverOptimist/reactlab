import React, { useState } from 'react'
import './NewSkillForm.css';
import SkillList from './SkillList.jsx'

function NewSkillForm(props) {
    const [newSkill, setNewSkill] = useState({
        name: '',
        level: 3
    })

    function handleInputChange(e) {
         setNewSkill({ ...newSkill, [e.target.name]: e.target.value})
    }

    function handleAdd(e) {
        e.preventDefault();
        props.handleAddSkill(newSkill);
        setNewSkill({
            name: '',
            level: 3
        });
    }

    return (
        <div className='NewSkillForm'>
            <h2>New Skills</h2>
            <form onSubmit={handleAdd}>
                    <label>SKILL</label>
                    <input
                    type='text'
                    name="name"
                    value={newSkill.name}
                    onChange={handleInputChange}
                    required
                    pattern=".{2,}" />
                    <div className="selected">
                        <label>LEVEL</label>
                        <select name="level" onChange={handleInputChange}>
                            <option value="">Select:</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3} selected>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <div className="buttons">
                        <button type="submit">ADD TO-DO</button>
                    </div>
                </form>
            </div>
            );
}


export default NewSkillForm;

// import React, {useState} from 'react';
// import "./NewSkillForm.css";

// function NewSkillForm({handleAddSkill}) {
//     const [newSkill, setNewSkill] = useState({name: '', level: 3})

    
//   function handleNameChange(event) {
//     setNewSkill({ ...newSkill, name: event.target.value });
//   };

//   function handleLevelChange(event) {
//     setNewSkill({ ...newSkill, level: parseInt(event.target.value) });
//   };

//   function handleSubmit(event) {
//     event.preventDefault();
//     handleAddSkill(newSkill);
//     setNewSkill({ name: "", level: 3 });
//   };

//   return (
//     <div className='NewSkillForm'>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="input">Skill: </label>
//           <input
//             type="text"
//             id="input"
//             name="input"
//             value={newSkill.name}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div className='LevelOption'>
//           <label htmlFor="select">Level: </label>
//             <select id="select" name="select" value={newSkill.level} onChange={handleLevelChange}>
//                 <option value=""></option>
//                 <option value={1}>1</option>
//                 <option value={2}>2</option>
//                 <option value={3}>3</option>
//                 <option value={4}>4</option>
//                 <option value={5}>5</option>
//             </select>
//         </div>
//         <button type="submit" id="addSkill">Add Skill</button>
//       </form>
//     </div>
//   );
// }

// export default NewSkillForm;