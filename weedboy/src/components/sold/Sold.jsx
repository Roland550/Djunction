import './sold.css'
import pill from '../../assets/jaro.png'


export default function Sold() {

 
   
  
  return (
    <div className='promotion'>
      <div className="pro_left_side">
        <h2>We are currently on promtion</h2>
        <small>Where you get 20% on each drug that you buy</small>
       
      </div>
      <div className="pro_right_side">
        <img src={pill} alt="" />
        <div className="promo">
            <p>20%</p>
            <small>discount</small>
          </div>
      </div>
      
    </div>
  )
}
