import AccordionItem from './AccordionItem.jsx';
import languages from './languages.js';

export default function Accordion () {
    return (
        <div>
            <div className='accordion-btns'>
                <ul>
                    {languages.map((item => (
                        <li key={item.id}><button>{item.title}</button></li>
                    )))}
                </ul>
            </div>
            {languages.map((item => (
                <AccordionItem key={item.id} description={item.description} />
            )))}
        </div>
    )
}