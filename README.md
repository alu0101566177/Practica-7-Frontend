# Práctica 7 – Especies de Canarias (Astro SSR + GraphQL)

## Arranque

Necesitas dos terminales: una para la API simulada (`api-simul`) y otra para este frontend.

### 1. API simulada (`api-simul`)

```bash
cd api-simul
npm install        # o: pnpm install
npm start          # o: pnpm start
```

La API queda disponible en http://localhost:4000/graphql.

### 2. Frontend (esta página)

1. Crea el archivo `.env` a partir del ejemplo:

   ```bash
   # macOS / Linux / Git Bash
   cp .env.example .env

   # Windows (PowerShell)
   Copy-Item .env.example .env
   ```

   Contenido esperado:

   ```env
   GRAPHQL_URL=http://localhost:4000/graphql
   ```

2. Instala las dependencias:

   ```bash
   npm install        # o: pnpm install
   ```

3. Arranca el servidor de desarrollo:

   ```bash
   npm run dev        # o: pnpm dev
   ```

   La web estará en http://localhost:4321.

## Otros comandos

| Comando             | Descripción                          |
| ------------------- | ------------------------------------ |
| `npm run build`     | Compila para producción              |
| `npm run preview`   | Previsualiza la build                |
| `npm run lint`      | Ejecuta ESLint                       |
| `npm run lint:fix`  | Ejecuta ESLint corrigiendo problemas |
