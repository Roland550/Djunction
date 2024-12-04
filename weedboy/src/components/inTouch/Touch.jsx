
import './touch.css'
import touch from "../../assets/sit.jpg"
export default function Touch() {
  return (
   <>
   <h1 className='title_touch'>Contact us</h1>
    <div className='container_touch'>
      
      <div className="icon">
        <img src={touch} alt="" />
      </div>
      <div className="former">
          <form action="">
              <input type="text" name="" id="" placeholder='Name'/> <br/>
             
              
              <input type="email" name="" id="" placeholder='Email'/><br/>
              <textarea name="" id=""  placeholder='Write something...'></textarea><br/>
              <input type="submit" value="Send" />
          </form>
      </div>
  </div>
   </>
  )
}
