import './sold.css'
import pill from '../../assets/jaro.png'


export default function Sold() {

 
   
  
  return (
    <div className='promotion'>
      <div className="pro_left_side">
      <div className="promo">
            <p>20%</p>
            <small>discount</small>
          </div>
        <h2>Exclusive Offer!</h2>
        <small>We are offering a special promotion 20% off  till next month.</small>
        <small>Don't  wait, buy now and save big!</small>
       
      </div>
      <div className="pro_right_side">
        <img src={pill} alt="" />
        
      </div>
      
    </div>
  )
}
