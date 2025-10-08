# GEMINI.md

## Project Overview

This is a website for a German interior design business called "Raumausstattung Franke". It is a modern, single-page application built with the T3 Stack, which includes:

*   **Next.js:** A React framework for building server-side rendered and static websites.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **tRPC:** A typesafe API layer for Next.js.
*   **NextAuth.js:** Authentication for Next.js.
*   **Prisma:** A modern database toolkit.
*   **Drizzle:** A TypeScript ORM.

The website features a dark mode, a contact form with captcha verification, and a gallery of references.

## Building and Running

### Prerequisites

*   [Bun](https://bun.sh/)
*   [Node.js](https://nodejs.org/)

### Installation

```bash
bun install
```

### Development

To run the development server, use the following command:

```bash
bun run dev
```

This will start the development server on `http://localhost:3000`.

### Building

To build the application for production, use the following command:

```bash
bun run build
```

### Linting

To lint the code, use the following command:

```bash
bun run lint
```

## Development Conventions

*   **Components:** Reusable UI components are located in the `src/app/components` directory.
*   **Styling:** The project uses Tailwind CSS for styling. Global styles are defined in `src/styles/globals.css`.
*   **API Routes:** API routes are located in the `src/app/api` directory.
*   **Contact Form:** The contact form is implemented in the `src/app/components/ContactComponent.tsx` file and the corresponding API route is at `src/app/api/contactform/route.ts`.
*   **Email:** The project uses `resend` to send emails. The email template is located at `src/app/components/emails/EmailTemplate.tsx`.
*   **Environment Variables:** The project uses `t3-env` to manage environment variables. The environment variable definitions are in `src/env.js`.
