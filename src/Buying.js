import React, { useState } from 'react'
import './App.css'
// import React from 'react'

const Product = (props) => {
  <h1>{props.Iname}</h1>
}

const Buying = () => {
  let [sclassName, SetclassName] = useState(1);
  const toggle = (i) => {
    SetclassName(i);
  }

  return (

    <div >
      <div className='tabs row container-fluid' >
        <div className='text-end col-lg-12'>
          <button className='active btn' onClick={() => toggle(1)}>Overall</button>
          <button className='btn' onClick={() => toggle(2)}>Price</button>
        </div>
        <div className='col-lg-12 text-center'>
          <p className={sclassName === 1 ? " active" : "overall"}>
            button overall
            {
              <div className='row justify-content-around'>
                <p className='products-overall col-lg-6'>
                  <ul>
                    <li>
                      {/* {Iname} */}
                    </li>
                    <li>
                      {/* {charger.points} */}
                    </li>
                  </ul>
                </p></div>
            }
          </p>
          <p className={sclassName === 2 ? " active" : "price"}>
            Button price
          </p>
        </div>
      </div>
    </div>
  )
}


export default  Product ;

