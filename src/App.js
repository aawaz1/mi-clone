import React from 'react'; 
import './App.css';
import NavBar from './Components/navBar'; 
import data from "./Data/data.json"
import Bar from './Components/bar';
import { Routes, Route, BrowserRouter  as Router } from 'react-router-dom';
import Slider from './Components/slider.js'
import Offers from './Components/offers.js'
import Heading from './Components/heading.js'
import StarProducts from './Components/starProducts.js'
import HotAccessoriesMenu from './Components/hotAccessoriesMenu.js'
import HotAccessories from './Components/hotAccessories.js';
import ProductReviews from './Components/productReviews.js'
import Videos from './Components/videos.js'
import Banner from './Components/banner.js'
import Footer from './Components/footer.js'
import NavOptions from './Components/navOptions.js'




function App()  {
  return (
    
    <Router>
      <NavBar /> 
      <Bar />
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home}  audio={data.audio}  accessories={data.accessories}/>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS"/>


    


       
      <StarProducts starProduct={data.starProduct}/> 
      <Heading text="HOT ACCESSORIES"/> 
       <HotAccessoriesMenu/>
       <Routes>
        {/* Nested Route for /music */}
        <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
      </Routes>
      <Routes>
        {/* Nested Route for /music */}
        <Route path="/smartdevice" element={<HotAccessories music={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
      </Routes>
      <Routes>
        {/* Nested Route for /music */}
        <Route path="/home" element={<HotAccessories music={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
      </Routes>
      <Routes>
        {/* Nested Route for /music */}
        <Route path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
      </Routes>
      <Routes>
        {/* Nested Route for /music */}
        <Route path="/mobileaccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Heading text="PRODUCT REVIEWS"/> 

      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/> 
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS"/> 
      <Banner  banner={data.banner}/>
      <Footer  footer={data.footer}/>


      
     
      
      
      

     


       

       
    </Router>
    
  )
}

export default App;
