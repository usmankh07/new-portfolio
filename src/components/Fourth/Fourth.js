import React from 'react'
import SimpleSlider from '../FourthSlider/slider'
import './Fourth.css'

const Fourth = () => {
  return (
    <>
        <div id="work" className="fourth_background">
            <main className="fourth_part">
                <h2>My Latest Work</h2>
                <span>Perfect solutions for best digital experience</span>
            <SimpleSlider />
            </main>
        </div>
    </>
  )
}

export default Fourth