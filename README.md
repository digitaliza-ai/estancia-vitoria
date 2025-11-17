# Estância Vitória - Website

Este é o website da **Estância Vitória**, um espaço único para locação de eventos e festas particulares, desenvolvido em React com Next.js.

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm

### Instalação e Execução

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar em modo desenvolvimento:**
```bash
npm run dev
```

3. **Acessar o projeto:**
Abra o navegador em `http://localhost:3000`

4. **Configurar fotos (opcional):**
Consulte o arquivo `CONFIGURACAO_FOTOS.md` para instruções detalhadas sobre como configurar a galeria de fotos com Google Drive.

5. **Build para produção:**
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx      # Cabeçalho com navegação
│   ├── Footer.jsx      # Rodapé
│   ├── WhatsAppFloat.jsx # Botão flutuante do WhatsApp
│   └── ProductsCarousel.jsx # Carrossel de produtos
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Página inicial
│   ├── About.jsx       # Página sobre a estância
│   ├── Services.jsx    # Página dos espaços disponíveis
│   ├── Products.jsx    # Galeria de fotos
│   └── Contact.jsx     # Página de contato
├── styles/             # Arquivos CSS
│   ├── style.css       # Estilos principais
│   ├── products.css    # Estilos dos produtos
│   └── products-carrosel.css # Estilos do carrossel
├── App.jsx             # Componente principal
└── main.jsx            # Ponto de entrada
```

## ✅ Funcionalidades

- **Navegação responsiva** com menu mobile
- **Galeria de fotos** com integração ao Google Drive
- **Filtros por categoria** (Salão Principal, Área Externa, Eventos, Geral)
- **Formulário de contato** com redirecionamento para WhatsApp
- **Animações de contadores** na seção sobre
- **Design responsivo** para todos os dispositivos
- **Roteamento** entre páginas
- **Botão flutuante** do WhatsApp
- **Categorização automática** de fotos baseada no nome do arquivo

## 🎯 Tecnologias

- React 18
- Next.js 15
- React Router DOM
- CSS3
- Font Awesome
- Google Fonts
- Google Drive API

## 📞 Contato da Estância

- **Telefone:** (44) 99999-9999
- **Email:** contato@estanciavitoria.com
- **Localização:** Estância Vitória - Região Rural

## 📋 Arquivos de Configuração

- `CONFIGURACAO_FOTOS.md` - Instruções para configurar a galeria de fotos
- `.env.example` - Exemplo de variáveis de ambiente (renomeie para `.env.local`)

---

**Desenvolvido com ❤️ usando React + Next.js**

