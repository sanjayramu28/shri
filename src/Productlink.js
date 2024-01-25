import React, { useState } from 'react'
import Product1 from './Buying.js'


const Productlink = () => {

  let [Iname,SetIname]=useState()

  const  toggle = (i)=> {
    SetIname(i);
  }

  let [points,Setpoints]=useState()

  const point=(i)=>
  {
    Setpoints(i);
  }

  let[img,Setimg]=useState()

  const imgs=(src)=>{
    Setimg(src);
  }

  let [price,Setprice]=useState()

  const prices=(pri)=>
  {
    Setprice(pri);
  }

  return (
    
    <div>
    
      <div className='row container-fluid  rounded-2' id='product'>
        <div className='col-lg-4 charger border border-success-subtle p-2 shadow-lg' id='1' onClick={()=>charger(1)} >

        </div>
        <div className='col-lg-4 router shadow' onClick={()=>charger(2)} >

        </div>
        <div className='col-lg-4 wifi6 shadow-lg' onClick={()=>charger(3)} >

        </div>
        <p className='col-lg-6 cctv mt-4 shadow-lg' onClick={()=>charger(4)} >

        </p>
      </div>
      <Product1 Iname={Iname}  points={points} img={img} price={price}/>
    </div>
    
  )
  function charger (id) {
    if(id===1)
  {
    toggle("65W Adapter with Triple port output. (Type C1 +Type C2+ Type A) DPA-F6521");
    point("PDQC compatible Fast Charging Adapter ");
    imgs('https://img.freepik.com/free-photo/wan-wlan-technology-connection-computers_1232-4122.jpg?size=626&ext=jpg&ga=GA1.1.1161449929.1704814302&semt=sph')
    prices('500')
  }
  else if(id===2) {
  toggle("routerr");
  point("Some points About Router");
  }
  else if(id===3)
  {
  toggle("wifi6");
  point("Highlight the high data transfer speeds and improved performance offered by your Wi-Fi solution, providing faster internet access for users.");
  }
  else if(id===4)
  {
  toggle("cctv");
  point("Emphasize the continuous monitoring capability of the CCTV system, providing round-the-clock surveillance to enhance security.");
  }
}
}
 
export default Productlink;
