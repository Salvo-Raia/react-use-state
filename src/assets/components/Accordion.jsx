import { useState } from 'react';
import AccordionItem from './AccordionItem.jsx';
import languages from './languages.js';

export default function Accordion () {
    const [selectedIndex, setselectedIndex] = useState(0);

    return (
        <div className='accordion-wrapper'>
            <div className='accordion-btns'>
                <ul>
                    {languages.map((item, index) => (
                        <li key={index}><button onClick={() => setselectedIndex(index)}>{item.title}</button></li>
                    ))}
                </ul>
            </div>
                <AccordionItem title={languages[selectedIndex].title} description={languages[selectedIndex].description} />
        </div>
    )
}