# Production Grade API using tRPC

A production-grade REST API built with **tRPC**, **Express**, and **TypeScript** following Contract-Driven Development (CDD) principles.

## Features

- ✅ Type-safe API with tRPC
- ✅ OpenAPI documentation generation
- ✅ Contract-driven development
- ✅ Express.js HTTP server
- ✅ TypeScript for type safety
- ✅ Zod schema validation

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables template (if exists)
cp .env.example .env
```

### Development

```bash
# Start development server with auto-reload
pnpm run dev
```

The server will start on `http://localhost:3000`

### Build

```bash
# Build the project
pnpm run build

# Start production server
pnpm run start
```

## Project Structure

```
src/
├── index.ts              # Entry point
└── server/
    ├── context.ts        # tRPC context
    ├── index.ts          # Router setup
    ├── trpc.ts           # tRPC initialization
    └── routes/           # API route handlers
        └── todo/
            ├── models.ts
            └── todo.routes.ts
```

## API Documentation

Once running, OpenAPI/Swagger documentation is available at:
- `http://localhost:3000/api-docs`

## Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server

## Technologies

- **tRPC** - Type-safe RPC framework
- **Express.js** - Web server
- **TypeScript** - Type safety
- **Zod** - Schema validation
- **OpenAPI** - API documentation

## License

MIT
