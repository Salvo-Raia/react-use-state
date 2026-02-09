export default function AccordionItem ({title, description}) {
    return  <div className="accordion-item">
                <div className="accordion-title">
                    <h2>{title}</h2>
                </div>
                <div className='accordion-content'>
                    <p>{description}</p>
                </div>
            </div>        
}