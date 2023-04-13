import React from 'react'
import './SkillListItem.css';


function SkillListItem(props) {
    const { name, level } = props.skill;
    return (
      <li className="SkillListItem">
        <div>{name}</div>
        <div>Level: {level}</div>
      </li>
    );
  }
export default SkillListItem;