# Simple Broadcasting Chat Application

## Overview
A real-time chat application built with TypeScript, consisting of a WebSocket server backend and a React frontend.

## Project Structure

### Backend
- Built with TypeScript and WebSocket (ws)
- Dependencies:
  - ws: ^8.18.0
  - typescript: ^5.7.2
  - @types/ws: ^8.5.13

### Frontend
- Built with React, TypeScript, and Vite
- Uses Tailwind CSS for styling
- Dependencies:
  - react: ^18.3.1
  - react-dom: ^18.3.1
  - typescript: ~5.6.2
  - vite: ^6.0.1
  - tailwindcss: ^3.4.15

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## Available Scripts

### Backend
- `npm run dev` - Compiles TypeScript and runs the server

### Frontend
- `npm run dev` - Starts the Vite development server
- `npm run build` - Creates a production build
- `npm run lint` - Runs ESLint
- `npm run preview` - Previews the production build

## License
ISC
