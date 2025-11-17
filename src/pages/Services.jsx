import React from 'react';
import Link from 'next/link';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <span className="hero-subtitle">Conheça Nossos Espaços</span>
          <h1 className="hero-title">Ambientes Únicos para Eventos Especiais</h1>
          <p className="hero-description">
            Descubra os espaços versáteis da Estância Vitória, perfeitos para 
            casamentos, aniversários, confraternizações e celebrações inesquecíveis.
          </p>
          <div className="hero-buttons">
            <Link href="/products" className="btn-secondary">Ver Galeria</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section-padding" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nossos Espaços</span>
            <h2 className="section-title">Ambientes para Cada Ocasião</h2>
          </div>

          <div className="services-grid">
            {/* Card 1: Salão Principal */}
            <div className="service-card">
              <div className="service-img">
                <div className="service-icon">
                  <i className="fas fa-home"></i>
                </div>
                <div className="service-number">01</div>
              </div>
              <div className="service-content">
                <h3>Salão Principal</h3>
                <p className="service-intro">
                  Nosso salão principal é o coração da Estância Vitória, oferecendo
                  um ambiente amplo e elegante para grandes celebrações. Com capacidade
                  para até 200 pessoas, é perfeito para casamentos, formaturas e eventos corporativos.
                </p>

                <div className="service-specs">
                  <h4>Características:</h4>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Capacidade:</span>
                      <span className="spec-value">
                        Até 200 pessoas
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Área:</span>
                      <span className="spec-value">
                        300m² cobertos
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Climatização:</span>
                      <span className="spec-value">Ar condicionado central</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Iluminação:</span>
                      <span className="spec-value">
                        LED decorativa e ambiente
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Som:</span>
                      <span className="spec-value">
                        Sistema profissional incluso
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Decoração:</span>
                      <span className="spec-value">Personalizada conforme evento</span>
                    </div>
                  </div>
                </div>

                <div className="service-benefits">
                  <h4>Incluso na Locação:</h4>
                  <ul className="service-features">
                    <li>
                      <i className="fas fa-check-circle"></i> Mesas e cadeiras
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Sistema de som
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Iluminação decorativa
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Cozinha equipada
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Estacionamento
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Área externa integrada
                    </li>
                  </ul>
                </div>

                <Link href="/contact" className="service-link">
                  Solicitar Orçamento <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Card 2: Área Externa */}
            <div className="service-card">
              <div className="service-img">
                <div className="service-icon">
                  <i className="fas fa-tree"></i>
                </div>
                <div className="service-number">02</div>
              </div>
              <div className="service-content">
                <h3>Área Externa</h3>
                <p className="service-intro">
                  Cercada pela natureza exuberante, nossa área externa oferece
                  um ambiente único para eventos ao ar livre. Ideal para cerimônias
                  de casamento, confraternizações e festas mais intimistas.
                </p>

                <div className="service-specs">
                  <h4>Características:</h4>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span className="spec-label">Capacidade:</span>
                      <span className="spec-value">Até 150 pessoas</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Área:</span>
                      <span className="spec-value">500m² de jardim</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Cobertura:</span>
                      <span className="spec-value">Tendas disponíveis</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Paisagismo:</span>
                      <span className="spec-value">
                        Jardim com árvores nativas
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Iluminação:</span>
                      <span className="spec-value">
                        Decorativa e funcional
                      </span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Acesso:</span>
                      <span className="spec-value">Integrado ao salão principal</span>
                    </div>
                  </div>
                </div>

                <div className="service-benefits">
                  <h4>Incluso na Locação:</h4>
                  <ul className="service-features">
                    <li>
                      <i className="fas fa-check-circle"></i> Mobiliário para área externa
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Iluminação de jardim
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Ponto de energia
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Acesso à cozinha
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Banheiros próximos
                    </li>
                  </ul>
                </div>

                <Link href="/contact" className="service-link">
                  Solicitar Orçamento <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
