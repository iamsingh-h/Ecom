import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function Slider() {
  const sliderImages = [
    {
       url: "https://img.freepik.com/premium-psd/horizontal-website-banne_451189-110.jpg"
    },
    {
      url:"https://img.freepik.com/premium-psd/horizontal-web-banner-with-laptop-laptop-mockup_451189-71.jpg"
    } 
    
  ]
  return (
    <div>
      <SimpleImageSlider
      width={1440}
      height={600}
      images={sliderImages}
      showNavs={true}
      showBullets={true}
      autoPlay={true} 
    
 /></div>
  )
}

export default Slider