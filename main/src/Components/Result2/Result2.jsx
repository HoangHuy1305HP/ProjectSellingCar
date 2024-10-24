import React from 'react';
import './Result2.css'
import Option from '../Option/Option';
const Result2 = () => {
    return (
        <div>
            <div className='result'>
           
           
           <h1>6 Results</h1>
           <select className='sort-select'>
               <option value="">Sort by</option>
           </select>
          <Option></Option>
   </div>
   
        </div>
    );
}

export default Result2;
