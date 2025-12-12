# farmAte

A full-stack monorepo for the farmAte application, built with Turborepo for efficient build orchestration across multiple applications and shared packages.

## 🏗️ Monorepo Structure

```
farmAte/
├── apps/
│   ├── ai/              # AI service application
│   ├── app/             # React Native mobile app (Expo)
│   ├── client/          # Next.js web application
│   └── server/          # Backend server application
├── packages/
│   ├── translations/    # Shared translations and i18n
│   ├── ui/             # Shared UI components library
│   └── zod/            # Shared Zod schemas for validation
├── package.json        # Root package configuration
└── turbo.json         # Turborepo configuration
```

## 📦 Applications

### Client (`apps/client`)

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Linting**: Biome
- **Purpose**: Web application frontend

### App (`apps/app`)

- **Framework**: Expo ~54
- **Language**: TypeScript
- **Navigation**: Expo Router 6
- **Purpose**: Cross-platform mobile application (iOS, Android, Web)

### Server (`apps/server`)

- **Purpose**: Backend API and business logic

### AI (`apps/ai`)

- **Purpose**: AI-powered features and services

## 🎁 Shared Packages

### `packages/ui`

Shared UI components that can be used across web and mobile applications.

### `packages/translations`

Internationalization (i18n) and translation files shared across all apps.

### `packages/zod`

Shared Zod schemas for type-safe validation across frontend and backend.

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm 10.0.0 (specified in package.json)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd farmAte

# Install dependencies for all apps and packages
npm install
```

## 📜 Available Scripts

### Development

```bash
# Run all apps in development mode
npm run dev

# Run only the web client
npm run client:dev

# Run only the server
npm run server:dev
```

### Build

```bash
# Build all apps and packages
npm run build
```

### Lint

```bash
# Lint all apps and packages
npm run lint
```

### Test

```bash
# Run tests across all apps and packages
npm run test
```

## 🔧 Turborepo Configuration

This monorepo uses Turborepo for:

- **Incremental builds**: Only rebuilds what changed
- **Parallel execution**: Runs tasks across workspaces simultaneously
- **Remote caching**: Shares build artifacts across team members
- **Task pipelines**: Manages dependencies between tasks

### Task Pipeline

- `build`: Builds apps with dependency awareness (`^build` ensures dependencies build first)
- `dev`: Runs development servers (non-cached, persistent)
- `lint`: Runs linting across all workspaces
- `test`: Runs test suites

## 📱 Mobile App (Expo)

### Running the Mobile App

```bash
cd apps/app

# Start Expo development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web
```

## 🌐 Web Client (Next.js)

### Running the Web Client

```bash
cd apps/client

# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## 🔗 Workspace Management

This monorepo uses npm workspaces to manage dependencies:

- All apps in `apps/*` are workspaces
- All packages in `packages/*` are workspaces
- Dependencies can be installed at root or per workspace

### Installing Dependencies

```bash
# Install for a specific workspace
npm install <package> --workspace=client

# Install for all workspaces
npm install <package> --workspaces
```

## 🛠️ Technology Stack

- **Build System**: Turborepo
- **Package Manager**: npm with workspaces
- **Web Framework**: Next.js 16 with React 19
- **Mobile Framework**: Expo with React Native
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Linting**: Biome (web), ESLint (mobile)
- **Validation**: Zod

## 📝 Development Workflow

1. **Create a new feature**: Work in the relevant app directory
2. **Share code**: Extract reusable logic to packages
3. **Run locally**: Use `npm run dev` to start all services
4. **Build**: Run `npm run build` to ensure everything compiles
5. **Lint**: Run `npm run lint` before committing

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes in the relevant app or package
3. Test locally with `npm run dev`
4. Lint your code with `npm run lint`
5. Submit a pull request

## 📄 License

ISC

## 👥 Authors

farmAte Team
