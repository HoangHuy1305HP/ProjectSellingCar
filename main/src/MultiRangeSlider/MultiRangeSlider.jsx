import React from 'react'
import './MultiRangeSlider.css'
import { useState } from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function MultiRangeSlider() {
    const [range, setRange] = useState([0, 3000000]);

  const handleChange = (newRange) => {
    setRange(newRange);
  }
  return (
    <div className="slider-container">
      <div className='pricerange'>
       <h3>Price Range</h3> 
       <div className="range-display">
        <div>${range[0]}</div>
        <div>to</div>
        <div>${range[1]}</div>
      </div>
      </div>
      <div className='range'>
       <Slider
       className='thanhrange'
        range
        min={0}
        max={3000000.00}
        step={1}
        value={range}
        onChange={handleChange}
        trackStyle={[{ backgroundColor: '#152836' }]} // Màu của thanh trượt
        railStyle={{ backgroundColor: '#bbb' }} // Màu của đường ray
        handleStyle={[
          { borderColor: '#0056b3', backgroundColor: '#007bff' }, // Màu của tay cầm
          { borderColor: '#0056b3', backgroundColor: '#007bff' } // Màu của tay cầm
        ]}
        tipFormatter={(value) => `$${value}`} // Định dạng của tooltip
        allowCross={false} // Ngăn chặn tay cầm vượt qua nhau
      /> 
      </div>
      
      
    </div>
  )
}

export default MultiRangeSlider