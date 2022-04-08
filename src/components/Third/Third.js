import React from 'react'
import './Third.css'
import line from '../../assets/images/line.png'

const Third = () => {
    return (
        <>
            <main className="third-part">
                <h2>My Work Experience</h2>
                <div className="third-section-two">
                    <div className="third-section-two-first">

                        <div className="third-section-two-first-one">
                            <h2>Self Employed, Remote</h2>
                            <span>Sep 2020-Aug 2021</span>
                        </div>
                        <div className="third-section-two-first-second">
                            <h2>Heapware Ltd. Lahore</h2>
                            <span>Dec 2021-Apr 2022</span>
                        </div>
                    </div>
                    <div className="third-section-two-second">
                        <img src={line} alt="" />
                    </div>
                    <div className="third-section-two-third">
                        <h3>Web Designer</h3>
                        <p>A Web Designer  for a variety of problems, which may  include designing websites, mobile apps UI and social media stuff.</p>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Third