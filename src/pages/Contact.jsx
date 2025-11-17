import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    guests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      // Criar mensagem para WhatsApp
      const eventTypeText = formData.eventType ? 
        document.querySelector(`option[value="${formData.eventType}"]`)?.textContent || formData.eventType 
        : '';

      // Formatar data para DD/MM/YYYY
      const formattedDate = formData.eventDate ? 
        new Date(formData.eventDate + 'T00:00:00').toLocaleDateString('pt-BR') 
        : '';

      const whatsappMessage =
        `Olá, Estância Vitória! Gostaria de solicitar um orçamento.\n\n` +
        `📝 *Dados do Evento:*\n` +
        `Nome: ${formData.name}\n` +
        `Tipo de evento: ${eventTypeText}\n` +
        `Data: ${formattedDate}\n` +
        `Horário: ${formData.eventTime}\n` +
        `Número de convidados: ${formData.guests}\n\n` +
        `Aguardo retorno para mais informações. Obrigado!`;

      // Codificar a mensagem para URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Redirecionar para WhatsApp (número atualizado para a estância)
      window.location.href = `https://wa.me/5544991718217?text=${encodedMessage}`;

      // Resetar formulário
      setFormData({
        name: '',
        eventType: '',
        eventDate: '',
        eventTime: '',
        guests: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <span className="hero-subtitle">ENTRE EM CONTATO</span>
          <h1 className="hero-title">Planeje seu Evento Conosco</h1>
          <p className="hero-description">
            Nossa equipe está pronta para ajudar você a realizar o evento dos seus sonhos
            na Estância Vitória. Solicite um orçamento personalizado e agende uma visita.
          </p>
          <div className="hero-buttons">
            <Link href="/services" className="btn-primary">Nossos Espaços</Link>
            <Link href="/products" className="btn-secondary">Ver Galeria</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section-padding" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Entre em Contato</span>
            <h2 className="section-title">Solicite um Orçamento</h2>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <p>
                Estamos prontos para tornar seu evento inesquecível na Estância Vitória.
                Oferecemos espaços únicos e toda infraestrutura necessária para sua celebração.
              </p>
              <p>
                Preencha o formulário ao lado ou entre em contato conosco através
                de um dos canais abaixo:
              </p>

              <div className="footer-contact" style={{ marginTop: '30px' }}>
                <p><i className="fas fa-phone"></i> (44) 9171-8217</p>
                <p><i className="fas fa-map-marker-alt"></i> Chácara para locação em Paranavaí</p>
                <p><i className="fas fa-map-marker-alt"></i> Saída para Tamboara</p>
                <p>
                  <i className="fas fa-clock"></i> Seg a Dom: 8h às 18h (Agendamento)
                </p>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-control" 
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventType">Tipo de Evento</label>
                  <select 
                    id="eventType" 
                    className="form-control" 
                    value={formData.eventType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione o tipo de evento</option>
                    <option value="casamento">Casamento</option>
                    <option value="aniversario">Aniversário</option>
                    <option value="evento-corporativo">Evento Corporativo</option>
                    <option value="formatura">Formatura</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="eventDate">Data do Evento</label>
                  <input 
                    type="date" 
                    id="eventDate" 
                    className="form-control" 
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventTime">Horário do Evento</label>
                  <input 
                    type="time" 
                    id="eventTime" 
                    className="form-control" 
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Número de Convidados</label>
                  <input 
                    type="number" 
                    id="guests" 
                    className="form-control" 
                    placeholder="Ex: 100"
                    value={formData.guests}
                    onChange={handleInputChange}
                    min="1"
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento via WhatsApp'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section-padding" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Depoimentos</span>
            <h2 className="section-title">O que nossos clientes dizem</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Realizamos nosso casamento na Estância Vitória e foi perfeito!
                  O ambiente é lindo, a equipe muito atenciosa e nossos convidados
                  ficaram encantados. Recomendo de olhos fechados!"
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">C</div>
                  <div className="testimonial-info">
                    <h4>Carla & Roberto</h4>
                    <p>Casamento - 2024</p>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Comemoramos os 50 anos da minha mãe na estância e foi incrível!
                  O espaço é acolhedor, a natureza ao redor é linda e tudo
                  funcionou perfeitamente. Voltaremos com certeza!"
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">M</div>
                  <div className="testimonial-info">
                    <h4>Família Martins</h4>
                    <p>Aniversário - 2024</p>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Fizemos nossa confraternização de empresa na Estância Vitória.
                  Espaço amplo, bem estruturado e a equipe nos deu todo suporte.
                  Nossos funcionários adoraram!"
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">E</div>
                  <div className="testimonial-info">
                    <h4>Empresa TechSol</h4>
                    <p>Evento Corporativo - 2024</p>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
