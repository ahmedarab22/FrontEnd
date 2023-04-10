import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
const Exprience = () => {
  return (
    <section id='experience'>
      <h5>What Iskills I Hava </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h2>FrontEnd Development </h2>
          <div className="experience__content">

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermidiate</small>
              </div>

            </article>

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>ReactJs</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>
            
          </div>

        </div>
       { /*  end of fronend */}

        
        <div className="experience__backend">

        <h2>BackEnd Development </h2>
          <div className="experience__content">

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermidiate</small>
              </div>

            </article>

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>java</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
 
            </article>

            <article className='experience__details'>
              < BsFillCheckCircleFill className='experience__details-icons'/>
              <div>
              <h4>MySql</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>
            
          </div>


        </div>
      </div>

      </section>
      
  )
}

export default Exprience
