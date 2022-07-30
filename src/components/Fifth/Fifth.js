import React from 'react'
import './Fifth.css'
import FifthSlider from './FifthSlider/FifthSlider'

const Fifth = () => {
  return (
    <>
    <div id='reviews' className="fifth_background">
        <div className="fifth_part">
            <h2>Reviews</h2>
               <FifthSlider />
        </div>
    </div>
    </>
  )
}

export default Fifth