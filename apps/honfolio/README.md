# HonFolio

Welcome to HonFolio, a Next.js based client application for managing investment portfolios. This application is part of a larger monorepo and leverages npm workspaces for dependency management.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 7 or higher, which supports workspaces)

### Installation

First, clone the entire monorepo and navigate to the root directory:

```
git clone https://github.com/your-username/honfolio-client.git
cd honfolio-client
```

Install dependencies for all workspaces from the root of the monorepo:

```
npm install
```

### Running the HonFolio Application

To run the HonFolio app located in `apps/honfolio`, use the npm workspaces command from the monorepo root:

```
npm run dev -w honfolio
```

### Building the Application

To build the HonFolio app for production:

```
npm run build -w honfolio
```

### Running in Production

To start the HonFolio app in production mode:

```
npm run start -w honfolio
```

### Linting and Testing

Lint the application:

```
npm run lint -w honfolio
```

Run tests:

```
npm run test -w honfolio
```

Perform type checking:

```
npm run typecheck -w honfolio
```

## License

This project is licensed under the [MIT License](./LICENSE).

## Additional Resources

- [Project Documentation](./docs)
- [Issue Tracker](https://github.com/your-username/honfolio-client/issues)
- [Pull Requests](https://github.com/your-username/honfolio-client/pulls)
