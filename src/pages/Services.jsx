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
            <p>Conheça nosso espaço, perfeito para tornar seu evento inesquecível</p>
          </div>

          <div className="services-grid">
            {/* Card 1: Salão Principal */}
            <div className="service-card">
              <div className="service-img">
                <div className="service-icon">
                  <i className="fas fa-crown"></i>
                </div>
                <div className="service-number">01</div>
              </div>
              <div className="service-content">
                <h3>Salão Fechado</h3>

                <div className="service-specs">
                  <h4><i className="fas fa-star"></i> Destaques:</h4>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <i className="fas fa-users"></i>
                      <div>
                        <span className="spec-label">Capacidade</span>
                        <span className="spec-value">Para 100 pessoas</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-ruler-combined"></i>
                      <div>
                        <span className="spec-label">Área Total</span>
                        <span className="spec-value">300m² cobertos</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-benefits">
                  <h4><i className="fas fa-check-double"></i> Infraestrutura Completa:</h4>
                  <ul className="service-features">
                    <li><i className="fas fa-check"></i> Mesas e cadeiras</li>
                    <li><i className="fas fa-check"></i> Cozinha equipada</li>
                    <li><i className="fas fa-check"></i> Banheiros masculino, feminino e cadeirante</li>
                    <li><i className="fas fa-check"></i> Estacionamento amplo</li>
                  </ul>
                </div>

                <Link href="/contact" className="service-link">
                  Solicitar Orçamento <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Card 2: Área Coberta */}
            <div className="service-card featured">
              <div className="featured-badge">
                <i className="fas fa-fire"></i> Mais Procurado
              </div>
              <div className="service-img">
                <div className="service-icon">
                  <i className="fas fa-umbrella"></i>
                </div>
                <div className="service-number">02</div>
              </div>
              <div className="service-content">
                <h3>Área Coberta</h3>

                <div className="service-specs">
                  <h4><i className="fas fa-star"></i> Destaques:</h4>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <i className="fas fa-ruler-combined"></i>
                      <div>
                        <span className="spec-label">Área Total</span>
                        <span className="spec-value">400m² - Pode ser utilizado 
                          tendas para eventos maiores</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-ruler-combined"></i>
                      <div>
                        <span className="spec-label">Área Total Coberta</span>
                        <span className="spec-value">100m² cobertos</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-home"></i>
                      <div>
                        <span className="spec-label">Diferencial Exclusivo</span>
                        <span className="spec-value">Casa disponível para descanso de familiares</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-cloud-sun"></i>
                      <div>
                        <span className="spec-label">Ventilação</span>
                        <span className="spec-value">Natural e arejada</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-shield-alt"></i>
                      <div>
                        <span className="spec-label">Proteção</span>
                        <span className="spec-value">Cobertura total</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-benefits">
                  <h4><i className="fas fa-check-double"></i> Infraestrutura Completa:</h4>
                  <ul className="service-features">
                    <li><i className="fas fa-check"></i> Churrasqueira</li>
                    <li><i className="fas fa-check"></i> Mesa e bancos rústicos</li>
                    <li><i className="fas fa-check"></i> Pontos de energia</li>
                    <li><i className="fas fa-check"></i> Acesso à cozinha</li>
                    <li><i className="fas fa-check"></i> Vista para área verde</li>
                  </ul>
                </div>

                <Link href="/contact" className="service-link">
                  Solicitar Orçamento <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Card 3: Área Externa */}
            <div className="service-card">
              <div className="service-img">
                <div className="service-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <div className="service-number">03</div>
              </div>
              <div className="service-content">
                <h3>Área Externa</h3>

                <div className="service-specs">
                  <h4><i className="fas fa-star"></i> Destaques:</h4>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <i className="fas fa-users"></i>
                      <div>
                        <span className="spec-label">Capacidade</span>
                        <span className="spec-value">Até 300 pessoas</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-ruler-combined"></i>
                      <div>
                        <span className="spec-label">Área Total</span>
                        <span className="spec-value">8.000m² de jardim</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-tree"></i>
                      <div>
                        <span className="spec-label">Paisagismo</span>
                        <span className="spec-value">Árvores nativas e ornamentais</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-sun"></i>
                      <div>
                        <span className="spec-label">Ambiente</span>
                        <span className="spec-value">Natural e aberto</span>
                      </div>
                    </div>
                    <div className="spec-item">
                      <i className="fas fa-campground"></i>
                      <div>
                        <span className="spec-label">Adicional</span>
                        <span className="spec-value">Perfeito para acampamentos e encontros religiosos</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-benefits">
                  <h4><i className="fas fa-check-double"></i> Infraestrutura Completa:</h4>
                  <ul className="service-features">
                    <li><i className="fas fa-check"></i> Tendas disponíveis (opcional)</li>
                    <li><i className="fas fa-check"></i> Pontos de energia</li>
                    <li><i className="fas fa-check"></i> Acesso aos banheiros</li>
                    <li><i className="fas fa-check"></i> Integração com salões</li>
                    <li><i className="fas fa-check"></i> Estacionamento próximo</li>
                  </ul>
                </div>

                <Link href="/contact" className="service-link">
                  Solicitar Orçamento <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="services-info">
            <div className="info-card">
              <i className="fas fa-info-circle"></i>
              <div className="info-content">
                <h4>Personalize seu Evento</h4>
                <p>Todos os nossos espaços podem ser combinados para criar o evento perfeito. Entre em contato para conhecer as opções de pacotes personalizados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
