import React, { useState } from 'react';
import '../static/css/Accordion.css'
function Accordion({items, darkModeClass}) {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }

    function itemBody(item) {
        return (
            <div className="accordion-item-body fade-test">
                {item.body}
            </div>
        );
    }

    return (
        <div className={`accordion ${darkModeClass}`}>
            <h1 className='accordion-title' aria-label='Learn more about author'>Learn More About Me</h1>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="accordion-item"
                    onClick={() => handleClick(index)}
                    aria-label='Accordian item'
                >
                    <div className="accordion-item-header">
                        <div className="accordion-item-header-text" aria-label='Accordian item content'>{item.header}</div>
                    </div>
                    {index === activeIndex ? itemBody(item) : ""}
                </div>
            ))}
        </div>
    );
}

export default Accordion;