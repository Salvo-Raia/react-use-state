export default function AccordionItem ({title, description, isOpen}) {
    return  <div className="accordion-item">
                <div className="accordion-title">
                    <h2>{title}</h2>
                </div>
                {isOpen && (<div className='accordion-content'>
                    <p>{description}</p>
                </div>)}
            </div>        
}