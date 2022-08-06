import React, { useState } from 'react'
import './Slider.scss'
import {AiFillCaretLeft,AiFillCaretRight} from 'react-icons/ai'

import item1 from '../../../assets/images/slider1.webp'
import item2 from '../../../assets/images/slider2.webp'
import item3 from '../../../assets/images/slider3.webp'


const images = [item1, item2, item3]



const Slider = () => {

  const [count,setCount] = useState(0);

  const goLeft = ()=>{
    count>0 && setCount((prev)=>prev-1)
  }
  const goRight = ()=>{
    count < ((images.length)-1) && setCount((prev)=>prev+1)
  }


  // setTimeout(() => {
  //   let num = Math.floor(Math.random() * 3);
  //   console.log(num);
  //   setCount(num)  
  
  // }, 2000);
  
  window.onkeydown = (e)=>{
    
    if(e.keyCode === 37) goLeft()
    if(e.keyCode === 39) goRight()
    
  }
  return (
    <div className='slider'>
        <div className="slider-window">
            <img src={images[count]} alt="imaage" />
            {count===0 && <h1 className='new-season'>New Season</h1>}
            {count===0 && <p className='women-collection'>Women Collection</p>}
            {count===0 && <a href="https://fonts.google.com/?preview.size=36"><button className='shop-now-button-women'>Shop Now</button></a> }

            {count===1 && <h1 className='new-arrivals'>New Arrivals</h1>}
            {count===1 && <p className='men-collection'>Men Collection</p>}
            {count===1 && <a href='https://fonts.google.com/?preview.size=36'><button className='shop-now-button-men'>Shop Now</button></a>}

            {count===2 && <p className='men-new-season'>Men New-Season</p>}
            {count===2 && <h1 className='jackets'>Jackkets & Coats</h1>}
            {count===2 && <a href='https://preview.colorlib.com/theme/cozastore/index.html' > <button className='shop-now-button'>Shop Now</button></a>}
            <AiFillCaretLeft className='slider-left' onClick={goLeft}/>
            <AiFillCaretRight className='slider-right' onClick={goRight}/>
        </div>
        
    </div>
  )
}

export default Slider