import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from  '../../data'
import './FifthSlider.css'

const FifthSlider = () => {
    const [people, setPeople] = useState(data); 
    const [index, setIndex] = useState(0);

    useEffect(() => {
      // lastIndex = 1
        const lastIndex = people.length - 1;
        if (index < 0) {
          setIndex(lastIndex); // 2
        }
        if (index > lastIndex) { // 3
          setIndex(0);
        }
      }, [index, people]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);
  return (
    <section className="section">
      <div className="section-center">
        {people.map((person, personIndex) => {
          // personIndex keep track of each feedback number
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide'; // 
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            console.log(personIndex)
            position = 'lastSlide';
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default FifthSlider