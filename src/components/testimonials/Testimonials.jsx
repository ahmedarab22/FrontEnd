import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar: AVTR1,
    name: 'Ahmed Samow',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius quidem perferendis recusandae hic consectetur, rem similique eveniet est! Ex vero omnis veritatis quae! "
  
  },

  {
    avatar: AVTR2,
    name: 'Ali Nur',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius quidem perferendis recusandae hic consectetur, rem similique eveniet est! Ex vero omnis veritatis quae! "
  
  },

  {
    avatar: AVTR3,
    name: 'Abdullahi Lovw',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius quidem perferendis recusandae hic consectetur, rem similique eveniet est! Ex vero omnis veritatis quae! "
  
  },

  {
    avatar: AVTR4,
    name: 'Ahmed Samow',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius quidem perferendis recusandae hic consectetur, rem similique eveniet est! Ex vero omnis veritatis quae! "
  
  }
]
const Testmonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
          
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name,review}) => {
            return(
              <SwiperSlide className='testmonial'>
              <div className="client__avatar">
                <img src={avatar} alt="avatar one"/>
              </div> 
    
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
    
            </SwiperSlide>
            )

            
          })
        }




        

      </Swiper>
      </section>
      
  )
}

export default Testmonials
