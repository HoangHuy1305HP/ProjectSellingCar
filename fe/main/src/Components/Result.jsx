import React from 'react'
import '../Css/Result.css'
import Option from './Option/Option'
function Result() {
  return (
    <div>
        <div className='result'>
           
           
                <h1>6 Results</h1>
                <select className='sort-select'>
                    <option value="">Sort by</option>
                </select>
               <Option></Option>
        </div>
        <div className='Carlist'></div>
        
    </div>
  )
}

export default Result