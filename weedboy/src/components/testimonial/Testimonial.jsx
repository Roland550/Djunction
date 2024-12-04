import './testimonial.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import AV1 from "../../assets/avt1.jpeg"
import AV2 from "../../assets/avt2.jpeg"
import AV3 from "../../assets/avt3.jpeg"
import AV4 from "../../assets/avt4.jpeg"
import AV5 from "../../assets/avt5.jpeg"
import AV6 from "../../assets/avt9.jpg"

export default function Testimonial() {
    const testimonials = [ 
        { 
          id: 1, 
          testimonial: 
          "I was blown away by the quality of the products and the exceptional customer service. I've never been happier with a purchase!",
          avatar:AV6, 
          Cname: "--Kevin White", 
        }, 
        { 
          id: 2, 
          testimonial: 
          "I was skeptical at first, but the products really delivered. The prices are unbeatable and the shipping was fast. I'm a customer for life!", 
          avatar: AV1, 
          Cname: "--Michael Kim", 
        }, 
        { 
          id: 3, 
          testimonial: 
          "I've tried other products like this before, but none of them compare to the quality and effectiveness of this one. I'm so glad I found this company!", 
          avatar: AV2, 
          Cname: "--Sarah Taylor", 
        }, 
        { 
          id: 4, 
          testimonial: 
          "I've been using this product for a few weeks now and I can already see a huge difference in my skin. It's clearer, smoother, and more radiant than ever before! I've tried many other products in the past, but this one is by far the best. I'm so glad I found it!",
          avatar: AV3, 
          Cname: "--Jessica Hall", 
        }, 
        { 
          id: 5, 
          testimonial: 
          "I've been using this product for a few months now and I can already see a huge difference in my hair. It's longer, stronger, and more vibrant than ever before!", 
          avatar: AV5, 
          Cname: "--David Lee", 
        }, 
        { 
          id: 6, 
          testimonial: 
          "I was impressed by the customer service I received from this company. They were friendly, helpful, and really went above and beyond to make sure I was satisfied with my purchase.", 
          avatar: AV4, 
          Cname: "--Emily Chen", 
        }, 
      ]; 
  return (
     <section id='testimonial'>
      
      <h2>What people say</h2> 
      <p>This testimonie prove how our customer tes and validate our product with confident</p>
      <Swiper className="container testimonials__container" 
       modules={[Navigation, Pagination, Scrollbar, A11y]} 
      spaceBetween={30}
      slidesPerView={3} 
      breakpoints={{
        // When the viewport width is >= 768px (tablet and above)
        768: {
          slidesPerView: 3, // Display 3 slides per view
        },
        // When the viewport width is >= 480px and < 768px
        480: {
          slidesPerView: 2, // Display 2 slides per view
        },
        // When the viewport width is < 480px (mobile)
        0: {
          slidesPerView: 1, // Display 1 slide per view
          direction: 'horizontal', // Optional: Make slides stack vertically
        },
      }}
     
      > 
        {testimonials.map((testi) => { 
          return ( 
            <SwiperSlide key={testi.id} className="testimonial"> 
              <div className="client__avatar"> 
                <img src={testi.avatar} alt="client avatar" /> 
              </div> 
              <h5 className="client__name"> {testi.Cname} </h5> 
              <small className="client__review"> {testi.testimonial} </small> 
            </SwiperSlide> 
            
          ); 
        })} 
      
      </Swiper> 
     </section>
  )
}
