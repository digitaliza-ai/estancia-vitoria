import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const About = () => {
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
      {/* About Section */}
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-subtitle">Nossa História</span>
              <h2 className="section-title">Estância Vitória</h2>
              <p>
                A Estância Vitória nasceu do sonho de criar um espaço único onde as pessoas
                pudessem celebrar seus momentos mais especiais em harmonia com a natureza.
                Localizada em um ambiente privilegiado, nossa estância oferece a combinação
                perfeita entre elegância e rusticidade.
              </p>
              <p>
                Nossa missão é proporcionar experiências inesquecíveis, oferecendo
                espaços versáteis e acolhedores para casamentos, aniversários,
                confraternizações e eventos corporativos, sempre com o compromisso
                de superar as expectativas de nossos clientes.
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
              <img src="/assets/img/sobre.png" alt="Estância Vitória - Ambiente Natural e Acolhedor" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section-padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para Celebrar na Estância Vitória?</h2>
            <p className="cta-text">
              Entre em contato conosco e agende uma visita para conhecer nossos espaços.
              Nossa equipe está pronta para ajudar você a planejar o evento dos seus sonhos
              em um ambiente único e acolhedor.
            </p>
            <Link href="/contact" className="btn-primary">
              Agendar Visita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
