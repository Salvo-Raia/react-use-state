import languages from './languages.js';

export default function Accordion () {
    return (
        <div>
            <div className='accordion-btns'>
                <ul>
                    {languages.map((item => (
                        <li><button>{item.title}</button></li>
                    )))}
                </ul>
            </div>
            {languages.map((item => (
                <div key={item.id} className='accordion-item'>
                    <div className='accordion-content'>
                        <p>{item.description}</p>
                    </div>
                </div>
            )))}
        </div>
    )
}