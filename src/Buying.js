import React, { useState } from 'react'
import './App.css'


const Buying = (props) => {
  

  let [sclassName, SetclassName] = useState(1);
  const toggle = (i) => {
    SetclassName(i);
  }
  let [qty,Setqty]=useState(1);

  const increment=()=>
  {
    Setqty(qty+1);
  };

  const decrement=()=>
  {
    Setqty(qty-1);
  };

  function Calculate()
  {
    for(var i=0;i<qty;i++)
    {
      // var Newprice=price+price;
    }
  }

  return (
    <div >
      <div className='tabs row container-fluid p-3' >
        <div className='text-end col-lg-12'>
          <button className='active btn p-2' onClick={() => toggle(1)}>Overall</button>
          <button className='btn p-2' onClick={() => toggle(2)}>Price</button>
        </div>
        <div className='col-lg-12 text-center'>
          <p className={sclassName === 1 ? " active" : "overall"}>
            {
              <div className='row justify-content-around'>
                <label className='col-lg-6'>
                  <img src={props.img}></img>
                </label>
                <p className='products-overall col-lg-6 p-5'>
                  <ul className='p-5'>
                    <li>
                      {props.Iname}
                    </li>
                    <li>
                      {props.points}
                    </li>
                  </ul>
                </p></div>
            }
          </p>
        </div>
        <p className={sclassName === 2 ? " active" : "price"}>
          <label>Total Money:</label>
          {props.price}
         <p>
         </p>
            Qty:
              <label>
              <button className='btn' onClick={()=>decrement()}>
                -
              </button></label>
              {qty}
              <label>
              <button className='btn' onClick={()=>increment()}>
                +
              </button>
              </label><p className='text-end'>
              <button className='btn btn-primary' onClick={()=>Calculate(qty)}>Calculate</button>
              </p>
        </p>

      </div>
    </div>

  )

}

export default Buying;

