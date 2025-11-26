import React, { useState, useEffect } from 'react';

const Products = () => {
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [driveStatus, setDriveStatus] = useState(null);

  // Configuração da integração com Google Drive - 3 pastas separadas
  const SALAO_INTERNO_FOLDER_ID = process.env.NEXT_PUBLIC_DRIVE_FOLDER_SALAO_INTERNO;
  const SALAO_EXTERNO_FOLDER_ID = process.env.NEXT_PUBLIC_DRIVE_FOLDER_SALAO_EXTERNO;
  const EVENTOS_REALIZADOS_FOLDER_ID = process.env.NEXT_PUBLIC_DRIVE_FOLDER_EVENTOS_REALIZADOS;
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;

  // Função para buscar imagens do Google Drive
  const fetchDriveImages = async (folderId) => {
    try {
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,webViewLink,webContentLink)`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        console.error("Erro na API do Google Drive:", data.error);
        return { error: data.error };
      }

      return { files: data.files || [] };
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      return { error: error.message };
    }
  };

  // Função para gerar URL de visualização direta
  const getDirectImageUrl = (fileId) => {
    return `https://lh3.googleusercontent.com/d/${fileId}=s500?authuser=0`;
  };

  // Carregar fotos das 3 pastas separadas
  useEffect(() => {
    const loadPhotos = async () => {
      try {
        // Buscar imagens das 3 pastas separadas
        const [salaoInternoResult, salaoExternoResult, eventosResult] = await Promise.all([
          fetchDriveImages(SALAO_INTERNO_FOLDER_ID),
          fetchDriveImages(SALAO_EXTERNO_FOLDER_ID),
          fetchDriveImages(EVENTOS_REALIZADOS_FOLDER_ID)
        ]);

        // Verificar erros em qualquer pasta
        const errors = [];
        if (salaoInternoResult.error) errors.push(`Salão Interno: ${salaoInternoResult.error}`);
        if (salaoExternoResult.error) errors.push(`Salão Externo: ${salaoExternoResult.error}`);
        if (eventosResult.error) errors.push(`Eventos: ${eventosResult.error}`);

        if (errors.length > 0) {
          console.error("Erros ao carregar imagens:", errors);
          setDriveStatus({
            type: 'error',
            message: 'Erro na conexão com Google Drive',
            details: errors.join('; ')
          });
          setIsLoading(false);
          return;
        }

        // Formatando os dados das fotos de cada pasta
        const salaoInternoPhotos = (salaoInternoResult.files || []).map((image) => ({
          id: image.id,
          name: image.name.split(".")[0],
          imageUrl: getDirectImageUrl(image.id),
          category: 'salao-principal',
        }));

        const salaoExternoPhotos = (salaoExternoResult.files || []).map((image) => ({
          id: image.id,
          name: image.name.split(".")[0],
          imageUrl: getDirectImageUrl(image.id),
          category: 'salao-externo',
        }));

        const eventosPhotos = (eventosResult.files || []).map((image) => ({
          id: image.id,
          name: image.name.split(".")[0],
          imageUrl: getDirectImageUrl(image.id),
          category: 'eventos-realizados',
        }));

        // Combinar todas as fotos
        const allPhotos = [...salaoInternoPhotos, ...salaoExternoPhotos, ...eventosPhotos];

        // Mostrar status de sucesso
        setDriveStatus({
          type: 'success',
          message: 'Conexão com Google Drive bem-sucedida',
          details: `Carregadas ${allPhotos.length} fotos (${salaoInternoPhotos.length} Salão Interno, ${salaoExternoPhotos.length} Salão Externo, ${eventosPhotos.length} Eventos)`
        });

        setPhotos(allPhotos);
        setFilteredPhotos(allPhotos);
      } catch (error) {
        console.error("Erro ao carregar fotos:", error);

        setDriveStatus({
          type: 'error',
          message: 'Erro inesperado',
          details: error.message
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadPhotos();
  }, []);

  // Filtrar fotos
  const handleFilter = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredPhotos(photos);
    } else {
      const filtered = photos.filter(photo => photo.category === filter);
      setFilteredPhotos(filtered);
    }
  };

  return (
    <>
      {/* Galeria de Fotos */}
      <section className="products section-padding" id="products">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Nossa Galeria</span>
            <h2 className="section-title">Conheça a Estância Vitória</h2>
            <p>Explore nossos espaços únicos através desta galeria de fotos</p>
          </div>

          <div className="products-filter">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilter('all')}
            >
              Todas as Fotos
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'salao-principal' ? 'active' : ''}`}
              onClick={() => handleFilter('salao-principal')}
            >
              Salão Interno
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'salao-externo' ? 'active' : ''}`}
              onClick={() => handleFilter('salao-externo')}
            >
              Área Externa
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'eventos-realizados' ? 'active' : ''}`}
              onClick={() => handleFilter('eventos-realizados')}
            >
              Eventos Realizados
            </button>
          </div>

          <div className="products-grid" id="products-container">
            {isLoading ? (
              <div className="loading">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Carregando galeria de fotos...</p>
              </div>
            ) : filteredPhotos.length === 0 ? (
              <div className="loading">
                <i className="fas fa-exclamation-circle"></i>
                <p>Nenhuma foto encontrada. Verifique a configuração do Google Drive.</p>
              </div>
            ) : (
              filteredPhotos.map((photo) => (
                <div key={photo.id} className="product-card" data-category={photo.category}>
                  <div className="product-image">
                    <img 
                      src={photo.imageUrl} 
                      alt={photo.name} 
                      loading="lazy" 
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200/2a4d6e/ffffff?text=Foto+Não+Carregada';
                      }}
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{photo.name}</h3>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>
    </>
  );
};

export default Products;
