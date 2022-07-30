import React from 'react'
import './SixthSlider.css'
import  data from '../../technology_data.js'

const SixthSlider = () => {
    return (
        <div className="SixthSlider_background">
            <div className="sixthslider_content">
                {data.map((img) => {
                    const {id, image} = img;
                    return <div key={id} className='technology_images'>

                    <img src={image} alt="" className='technology_image'/>
                    </div> 
                       
                })}
            </div>
        </div>
    )
}

export default SixthSlider;

