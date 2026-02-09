export default function AccordionItem ({description}) {
    return <div className='accordion-item'>
                    <div className='accordion-content'>
                        <p>{description}</p>
                    </div>
                </div>
}