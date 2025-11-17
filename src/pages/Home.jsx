import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Home = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    // Animação dos contadores
    const animateCounters = () => {
      countersRef.current.forEach(counter => {
        if (!counter) return;
        
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 200;
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 10);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
      });
    };

    // Observer para animar quando a seção aparecer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <span className="hero-subtitle">Celebre com Estilo</span>
          <h1 className="hero-title">Estância Vitória - Seu Espaço Perfeito</h1>
          <p className="hero-description">
            Realize sua festa dos sonhos em um ambiente único e acolhedor. 
            Espaços amplos, natureza exuberante e toda infraestrutura para 
            tornar seu evento inesquecível.
          </p>
          <div className="hero-buttons">
            <Link href="/services" className="btn-primary">
              Nossos Espaços
            </Link>
            <Link href="/products" className="btn-secondary">Ver Galeria</Link>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-subtitle">Sobre Nós</span>
              <h2 className="section-title">Estância Vitória</h2>
              <p>
                A Estância Vitória é o local ideal para realizar seus eventos mais especiais.
                Localizada em um ambiente natural privilegiado, oferecemos espaços amplos
                e versáteis para festas particulares, casamentos, aniversários e celebrações.
              </p>
              <p>
                Nossa missão é proporcionar momentos únicos e inesquecíveis,
                oferecendo toda a infraestrutura necessária em um ambiente
                acolhedor e cercado pela natureza.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">
                    +<span 
                      className="counter" 
                      data-target="800"
                      ref={el => countersRef.current[0] = el}
                    >
                      0
                    </span>
                  </div>
                  <div className="stat-text">Eventos Realizados</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    +<span 
                      className="counter" 
                      data-target="8"
                      ref={el => countersRef.current[1] = el}
                    >
                      0
                    </span>
                  </div>
                  <div className="stat-text">Anos de Tradição</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <span 
                      className="counter" 
                      data-target="300"
                      ref={el => countersRef.current[2] = el}
                    >
                      0
                    </span>
                  </div>
                  <div className="stat-text">Capacidade Máxima</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-text">Satisfação Garantida</div>
                </div>
              </div>
            </div>

            <div className="about-image">
              <img src="/assets/img/sobre.png" alt="Estância Vitória - Ambiente Natural" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section-padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para Realizar sua Festa dos Sonhos?</h2>
            <p className="cta-text">
              Entre em contato conosco e solicite um orçamento personalizado.
              Nossa equipe está pronta para ajudar você a planejar um evento
              inesquecível na Estância Vitória.
            </p>
            <Link href="/contact" className="btn-primary">
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
