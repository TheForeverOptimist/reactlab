import React from 'react'
import SkillListItem from './SkillListItem'

  function SkillList(props) {

    return (
      <div className='SkillList'>
          <ul>
              {props.skills.map((skill, idx) => (
                <SkillListItem skill={skill} key={idx + skill} />
              ))}
              
          </ul>
      </div>
      
    )
  }
  export default SkillList;