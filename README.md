# Cypress automation - SauceDemo

This repository contains an automated E2E (End-to-End) testing project for the [SauceDemo (Swag Labs)](https://www.saucedemo.com/) demo website, built using Cypress and Typescript.

## 🚀 Tech Stack

*   **[Cypress](https://www.cypress.io/)**: E2E testing framework.
*   **[TypeScript](https://www.typescriptlang.org/)**: JavaScript superset for static typing.
*   **[pnpm](https://pnpm.io/)**: Fast, disk space efficient package manager.
*   **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.

## 📋 Prerequisites

Ensure you have the following installed on your machine:

*   **Node.js** (version 16 or higher recommended): [Download here](https://nodejs.org/).
*   **pnpm**: If you don't have it, install it globally via npm:

    ```bash
    npm install -g pnpm
    ```

## 🛠️ Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aleni304/cypress-saucedemo-demo.git
    cd cypress-saucedemo-demo
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

## 🧪 Running tests

You can execute the tests in two modes:

### Interactive Mode
Opens the Cypress GUI to view tests running in real-time.
```bash
pnpm test:cypress:open
```

### Headless Mode
Runs all tests in the background via the console.
```bash
pnpm test:cypress:ci
```
