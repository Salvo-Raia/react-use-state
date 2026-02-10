import { useState } from 'react';
import AccordionItem from './AccordionItem.jsx';
import languages from './languages.js';
import Buttons from './Buttons.jsx';

export default function Accordion () {
    const [selectedIndex, setselectedIndex] = useState(null);
    
    return (
        <div className='accordion-wrapper'>
            <div className='accordion-btns'>
                <ul>
                    {languages.map((item, index) => (
                        <Buttons key={index} item={item} selectedIndex={selectedIndex} setselectedIndex= {setselectedIndex}/>
                    ))}
                </ul>
            </div>
                <AccordionItem title={languages[selectedIndex]?.title} description={languages[selectedIndex]?.description} isOpen={selectedIndex !== null} />
        </div>
    )
}