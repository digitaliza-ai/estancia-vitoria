import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <Link href="/" className="logo">
                <div className="logo-image-footer">
                  <img
                    src="/assets/img/logo.png"
                    alt="Estância Vitória"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'block';
                    }}
                  />
                </div>
                <div className="logo-fallback">Estância Vitória</div>
              </Link>
              <p>Seu evento perfeito é nossa missão</p>
            </div>
            <p>
              Oferecemos espaços únicos e acolhedores para seus eventos especiais,
              com toda infraestrutura e atendimento personalizado.
            </p>
            <div className="footer-social">
              <a 
                href="https://www.instagram.com/vitoria_estancia/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/5544991718217?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20a%20Est%C3%A2ncia%20Vit%C3%B3ria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Links Rápidos</h3>
            <ul>
              <li><Link href="/">Início</Link></li>
              <li><Link href="/services">Espaços</Link></li>
              <li><Link href="/products">Galeria</Link></li>
              <li><Link href="/about">Sobre</Link></li>
              <li><Link href="/contact">Contato</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3 className="footer-heading">Nossos Serviços</h3>
            <ul>
              <li><Link href="/services">Salão Principal</Link></li>
              <li><Link href="/services">Área Externa</Link></li>
              <li><Link href="/products">Galeria de Fotos</Link></li>
              <li><Link href="/contact">Solicitar Orçamento</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Entre em Contato</h3>
            <p><i className="fas fa-phone"></i> (44) 9171-8217</p>
            <p><i className="fas fa-map-marker-alt"></i> Chácara para locação em Paranavaí</p>
            <p><i className="fas fa-map-marker-alt"></i> Saída para Tamboara</p>
            <p>
              <i className="fas fa-clock"></i> Seg a Dom: 8h às 18h (Agendamento)
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Estância Vitória - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
