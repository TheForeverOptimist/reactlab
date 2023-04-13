import React from 'react'
import './NewSkillForm.css';

function NewSkillForm() {
    return (
        <div className='NewSkillForm'>
            <form>
                <div class="inputField">
                    <label for="input">Skill: </label>
                    <input type="text" id="input" name="input" />
                </div>
                <div class="skillField">
                    <label for="select">Level </label>
                    <select id="select" name="select" style={{width: '65%'}}>
                        <option value="">Select:</option>
                        <option value="level1" selected>1</option>
                        <option value="level2">2</option>
                        <option value="level3">3</option>
                        <option value="level4">4</option>
                        <option value="level5">5</option>
                    </select>
                </div>

                <button type="submit">Add Skill</button>
            </form>
        </div>
    )
}

export default NewSkillForm;