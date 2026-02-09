import { useState } from 'react';
import AccordionItem from './AccordionItem.jsx';
import languages from './languages.js';

export default function Accordion () {
    const [openState, setOpenState] = useState(null);
    const handleState = (id) => {
       if (openState === id) {
        setOpenState(null); 
       } else {
        setOpenState(id)
       }
    }
    return (
        <div className='accordion-wrapper'>
            <div className='accordion-btns'>
                <ul>
                    {languages.map((item => (
                        <li key={item.id}><button onClick={() => handleState(item.id)} >{item.title}</button></li>
                    )))}
                </ul>
            </div>
            {languages.map((item => (
                <AccordionItem key={item.id} title={item.title} description={item.description} isOpen={openState === item.id} />
            )))}
        </div>
    )
}