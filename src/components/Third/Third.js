import React from 'react'
import './Third.css'
import line from '../../assets/images/line.png'

const Third = () => {
    return (
        <>
        <div id="experience" className="third_background">

            <main className="third-part">
                
                <h2>My Work Experience</h2>
                <div className="third-section-two">
                    <div className="third-section-two-first">

                        <div className="third-section-two-first-one">
                            <h2>Self Employed, Remote</h2>
                            <span>Sep 2020-Aug 2021</span>
                        </div>
                        <div className="third-section-two-first-second">
                            <h3>Web Designer</h3>
                            <p>A Web Designer for a variety of problems, which may include designing websites, mobile apps UI and social media stuff.</p>
                        </div>
                    </div>
                    <div className="third-section-two-third">
                    <div className="third-section-two-third-one">
                            <h2>Internship at Heapware</h2>
                            <span>Dec 2021-March 2022</span>
                        </div>
                        <div className="third-section-two-third-second">
                            <h3>Frontend Engineer (ReactJs, NextJs)</h3>
                            <p>I started working on their E-Learning Website and after that me and some other interns  started working on their pos System. Although we didn't complete it.</p>
                        </div>
                    </div>

                    <div className="third-section-two-second">
                        <img src={line} alt="" />
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Third
