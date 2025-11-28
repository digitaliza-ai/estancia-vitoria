import React, { useEffect, useRef } from "react";
import Link from "next/link";

const Home = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    // Animação dos contadores
    const animateCounters = () => {
      countersRef.current.forEach((counter) => {
        if (!counter) return;

        const target = parseInt(counter.getAttribute("data-target"));
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
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    const aboutSection = document.querySelector(".about");
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
            <Link href="/products" className="btn-secondary">
              Ver Galeria
            </Link>
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
                A Estância Vitória é o local ideal para realizar seus eventos
                mais especiais. Localizada em um ambiente natural privilegiado,
                oferecemos espaços amplos e versáteis para festas particulares,
                casamentos, aniversários e celebrações.
              </p>
              <p>
                Nossa missão é proporcionar momentos únicos e inesquecíveis,
                oferecendo toda a infraestrutura necessária em um ambiente
                acolhedor e cercado pela natureza.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">
                    +
                    <span
                      className="counter"
                      data-target="800"
                      ref={(el) => (countersRef.current[0] = el)}
                    >
                      0
                    </span>
                  </div>
                  <div className="stat-text">Eventos Realizados</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    +
                    <span
                      className="counter"
                      data-target="16"
                      ref={(el) => (countersRef.current[1] = el)}
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
                      data-target="400"
                      ref={(el) => (countersRef.current[2] = el)}
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
              <img
                src="/assets/img/sobre.png"
                alt="Estância Vitória - Ambiente Natural"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="diferencial section-padding" id="diferencial">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nosso Grande Diferencial</span>
            <h2 className="section-title">
              Mais que um Espaço, uma Experiência Completa
            </h2>
            <p className="section-description">
              Na Estância Vitória, você pode fechar pacotes para vários dias ou
              apenas para o final de semana, aproveitando toda nossa
              infraestrutura exclusiva
            </p>
          </div>

          <div className="diferencial-content">
            <div className="diferencial-main">
              <div className="diferencial-card highlight">
                <div className="diferencial-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h3>Hospedagem Completa Inclusa</h3>
                <p>
                  Desfrute do conforto de uma casa onde, além do lazer, você
                  terá tranquilidade para permanecer no local, sem os
                  transtornos de precisar voltar no dia seguinte. É ideal para
                  receber familiares e amigos, especialmente em casamentos e
                  celebrações especiais que merecem momentos únicos.
                </p>
                <div className="diferencial-features">
                  <div className="feature-badge">
                    <i className="fas fa-bed"></i>
                    <span>Quartos</span>
                  </div>
                  <div className="feature-badge">
                    <i className="fas fa-couch"></i>
                    <span>Sala</span>
                  </div>
                  <div className="feature-badge">
                    <i className="fas fa-utensils"></i>
                    <span>Cozinha</span>
                  </div>
                  <div className="feature-badge">
                    <i className="fas fa-leaf"></i>
                    <span>Jardim</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="diferencial-benefits">
              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-calendar-week"></i>
                </div>
                <div className="benefit-content">
                  <h4>Pacotes Flexíveis</h4>
                  <p>
                    Ofrecemos reservas para vários dias, final de semana, ou
                    apenas uma diária, conforme seu evento.
                  </p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="benefit-content">
                  <h4>Conforto para Convidados</h4>
                  <p>
                    Maior comodidade para familiares e amigos durante o evento
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Infraestrutura Completa */}
          <div className="infraestrutura-grid">
            <div className="section-header" style={{ marginTop: "60px" }}>
              <h3 className="section-title" style={{ fontSize: "2rem" }}>
                Infraestrutura Completa
              </h3>
            </div>

            <div className="infra-cards">
              <div className="infra-card">
                <div className="infra-icon">
                  <i className="fas fa-building"></i>
                </div>
                <h4>Salão de Festas</h4>
                <p>Espaço amplo para seu evento</p>
              </div>

              <div className="infra-card">
                <div className="infra-icon">
                  <i className="fas fa-restroom"></i>
                </div>
                <h4>7 Banheiros</h4>
                <p>Total conforto e praticidade para todos</p>
              </div>

              <div className="infra-card featured">
                <div className="featured-corner">
                  <i className="fas fa-star"></i>
                </div>
                <div className="infra-icon">
                  <i className="fas fa-swimming-pool"></i>
                </div>
                <h4>Piscina</h4>
                <p>Área de lazer completa para diversão</p>
              </div>

              <div className="infra-card featured">
                <div className="featured-corner">
                  <i className="fas fa-star"></i>
                </div>
                <div className="infra-icon">
                  <i className="fas fa-futbol"></i>
                </div>
                <h4>Campo de Futebol</h4>
                <p>Diferencial exclusivo para entretenimento</p>
              </div>
            </div>
          </div>

          <div className="diferencial-cta">
            <div className="cta-box">
              <i className="fas fa-info-circle"></i>
              <div>
                <h4>Experimente o Diferencial da Estância Vitória</h4>
                <p>
                  Entre em contato e conheça todos os detalhes dos nossos
                  pacotes personalizados
                </p>
              </div>
              <Link href="/contact" className="btn-primary">
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section-padding">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Pronto para Realizar sua Festa dos Sonhos?
            </h2>
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
