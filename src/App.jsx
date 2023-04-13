import {useState} from 'react';
import './App.css';
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'


function App() {

  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  function handleAddSkill(skill) {
    const newArray = [...skills, skill]
    setSkills(newArray);
    console.log(skills)
  }

  const [showSkills, setShowSkills] = useState(true);

  console.log(skills)
  return (
    <div className="App">
      <h1>React Dev Skills </h1>
      <SkillList skills={skills} />
      <hr />
      <NewSkillForm />
    </div>
  );
}

export default App;
