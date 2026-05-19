# Continents & Cities Web Application

## Overview

**testing2-webapp** is a simple yet elegant Express.js web application that showcases geographical data across three continents. The application provides both a user-friendly HTML interface and a RESTful JSON API endpoint for programmatic access to continent and city information.

## Purpose & Rationale

This application serves as a demonstration project for:
- Building lightweight Node.js web applications using Express.js
- Creating responsive, server-rendered HTML interfaces with inline styling
- Implementing REST API endpoints for data access
- Showcasing best practices in web application structure and deployment

The application lists **10 major cities across 3 continents** (Americas, Asia, and Europe), making it an ideal reference for building geographical data applications or learning full-stack web development concepts.

## Features

- **Web Interface**: A clean, responsive HTML page displaying continents and their major cities
- **REST API**: JSON endpoint (`/api/continents`) for programmatic data access
- **Responsive Design**: Mobile-friendly layout using modern CSS practices
- **Zero Dependencies (except Express)**: Minimal footprint with easy deployment

## Project Structure

```
TestFGV260519/
├── server.js          # Express server with routes and data
├── package.json       # Project metadata and dependencies
├── .gitignore         # Git ignore configuration
└── README.md          # This file
```

## Available Continents & Cities

### Americas
New York, Los Angeles, Chicago, Houston, Miami, Toronto, Mexico City, São Paulo, Buenos Aires, Lima

### Asia
Tokyo, Beijing, Shanghai, Mumbai, Delhi, Seoul, Bangkok, Singapore, Jakarta, Kuala Lumpur

### Europe
London, Paris, Berlin, Madrid, Rome, Amsterdam, Vienna, Stockholm, Warsaw, Prague

## Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## API Endpoints

### GET `/`
Returns the HTML web interface displaying all continents and cities.

### GET `/api/continents`
Returns JSON data containing all continents and cities:
```json
{
  "america": ["New York", "Los Angeles", ...],
  "Asia": ["Tokyo", "Beijing", ...],
  "Europe": ["London", "Paris", ...]
}
```

## Environment Variables

- `PORT` - The port on which the server listens (default: 3000)

## Deployment

This application is designed to run on any Node.js hosting platform, including:
- Azure Web App (Node.js)
- Heroku
- AWS EC2/Elastic Beanstalk
- DigitalOcean
- Any VPS with Node.js support

## Technologies Used

- **Express.js** - Web framework for Node.js
- **Node.js** - JavaScript runtime

## Author

Created by Ferddie-Axpo

## License

This project is open source and available for educational and demonstration purposes.
