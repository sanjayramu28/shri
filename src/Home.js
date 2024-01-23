import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img src='https://img.freepik.com/free-photo/usb-charging-gadgets-blurred-background-room-close-up-concept-technology-everyday-life_169016-15480.jpg?size=626&ext=jpg&ga=GA1.1.11406635.1692806813&semt=ais' style={{width:'100%',height:'90vh'}}/>
        <Carousel.Caption>
          <h3>D-LINK</h3>
          <p>ADD ON</p>
          <p>Charge with Trust</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://img.freepik.com/free-photo/closeup-cctv-camera-wall_53876-33830.jpg?size=626&ext=jpg&ga=GA1.1.11406635.1692806813&semt=sph' style={{width:'100%',height:'90vh'}} />
        {/* <video src='https://v1.cdnpk.net/videvo_files/video/free/video0533/small_watermarked/_import_62e62fcbd91ef6.15890640_FPpreview.mp4'  /> */}
        <Carousel.Caption>
          <h3>CCTV</h3>
          <p>Introducing Indigenous Series</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://www.itsasap.com/hs-fs/hubfs/The%20TP-Link%20Archer%20AX50%20(AX3000)%20Dual%20Band%20Gigabit%20Wi-Fi%206%20Router.gif?width=778&name=The%20TP-Link%20Archer%20AX50%20(AX3000)%20Dual%20Band%20Gigabit%20Wi-Fi%206%20Router.gif' style={{width:'100%',height:'90vh'}} />
        <Carousel.Caption>
          <h3 >Eagle PRO AI</h3>
          <p className='text-dark mt-3 fw-bold'>
           One Connection - Infinte Possiblities
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://www.primeabgb.com/wp-content/uploads/2023/10/ASUS-RT-AX53U-WiFi-6-AX1800-Dual-Band-Router.jpg' style={{width:'100%',height:'90vh'}} />
        <Carousel.Caption>
          <h3 >NEXT GENERATION</h3>
          <p className=' fw-bold'>
           SMART WIFI 6 ROUTER
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://img.freepik.com/free-photo/cables-red-light-background_23-2148882660.jpg?size=626&ext=jpg&ga=GA1.1.11406635.1692806813&semt=ais' style={{width:'100%',height:'90vh'}} />
        <Carousel.Caption>
          <h3 >The BackBone Of Your Entire Network</h3>
          <p className=' fw-bold'>
           ROBUST, RELIABLE, RESILENT
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default Home
