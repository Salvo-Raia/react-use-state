export default function AccordionItem ({title, description, isOpen}) {
    return isOpen ? (
    <div className="accordion-item">
      <div className="accordion-title">
        <h2>{title}</h2>
      </div>
      <div className="accordion-content">
        <p>{description}</p>
      </div>
    </div>
  ) : (
    <div className="accordion-item placeholder">
      <div className="accordion-title">
        <h2>Seleziona un linguaggio</h2>
      </div>
      <div className="accordion-content">
        <p>Nessun linguaggio selezionato. Scegli quello che vuoi approfondire</p>
      </div>
    </div>
  );
}

