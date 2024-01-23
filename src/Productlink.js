import React, { useState } from 'react'
// import { Product } from './Buying'
const Productlink = () => {
  const Product = props =>
  {
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
    }   
  }

  return (
    <div>
      <div className='row container-fluid  rounded-2' id='product'>
        <div className='col-lg-4 charger border border-success-subtle p-2 shadow-lg' id='1' onClick={()=>charger(1)}>

        </div>
        <div className='col-lg-4 router shadow'>

        </div>
        <div className='col-lg-4 wifi6 shadow-lg'>

        </div>
        <p className='col-lg-6 cctv mt-4 shadow-lg'>

        </p>
      </div>
    </div>
  )

 function charger (id) {
    if(id===1)
  {
   <Product Iname = "65W Adapter with Triple port output. (Type C1 +Type C2+ Type A) DPA-F6521" points = "PDQC compatible Fast Charging Adapter It has Short-circuit,Over voltage, Over current, Over temperature protection    Used to charge Laptop, Mobiles, Bluetooth devices    It has 2* USB-C Ports and 1* USB-A port    Up to 65W Output Power"/>
  // console.log(points);
  }
  else{
  // console.log(points);
  console.log("wrong!?");
  }
}
export {charger};
export default Productlink;
// export {Iname,points};