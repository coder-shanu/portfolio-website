import React from 'react'
import'./Skills.css';
function Skills() {
  return (
    <div className='skills'>
        <div className='header'>
            <h>Proficiency</h>
             </div>
             <div className='skills-main'>
            
                <div className='skills-bar'>
                <div className='info'>
                    <p>HTML</p>
                    <p>95%</p>
                </div>
                <div className='bar'>
                    <span className='html'></span>
                </div>
                </div>
                <div className='skills-bar'>
                <div className='info'>
                    <p>CSS</p>
                    <p>95%</p>
                </div>
                <div className='bar'>
                    <span className='css'></span>
                </div>
                </div>
                <div className='skills-bar'>
                <div className='info'>
                    <p>JavaScript</p>
                    <p>85%</p>
                </div>
                <div className='bar'>
                    <span className='JavaScript'></span>
                </div>
                </div>
                <div className='skills-bar'>
                <div className='info'>
                    <p>React</p>
                    <p>85%</p>
                </div>
                <div className='bar'>
                    <span className='react'></span>
                </div>
                </div>
                <div className='skills-bar'>
                <div className='info'>
                    <p>DSA</p>
                    <p>85%</p>
                </div>
                <div className='bar'>
                    <span className='DSA'></span>
                </div>
                </div>

             </div>
    </div>
  )
}

export default Skills