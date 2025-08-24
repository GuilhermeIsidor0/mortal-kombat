# Site + Banco + Docker (Node.js + MySQL)

## Introdução
Projeto exemplo de site com Node.js/Express servindo uma página estática e uma API (`/api/usuarios`) conectada a MySQL. A execução é orquestrada por Docker Compose.

## Justificativa
Consolidar conteúdos de desenvolvimento web, banco de dados relacional e conteinerização, alinhado às práticas de entrega em repositórios GitHub.

## Tecnologias usadas
- **Node.js + Express**
- **MySQL**
- **Docker & Docker Compose**
- **GitHub** (código, issues, wiki/README)

## Estrutura de pastas
```
.
├─ public/              # frontend estático
├─ sql/                 # scripts SQL (init do MySQL)
├─ index.js             # servidor Express
├─ package.json
├─ Dockerfile
├─ docker-compose.yml
└─ .env.example
```

## Como rodar com Docker (local)
1. Crie um arquivo `.env` baseado em `.env.example` (opcional).
2. Rode: `docker compose up --build`
3. Acesse: `http://localhost:3000`  
   - API: `http://localhost:3000/api/usuarios`

## Endpoints
- `GET /api/usuarios` → lista usuários do banco
- `GET /health` → status simples

## Considerações futuras
- Autenticação de usuários e CRUD completo
- Frontend em framework (React/Vue)
- Testes automatizados e CI/CD com Actions
- Implantação em Kubernetes
