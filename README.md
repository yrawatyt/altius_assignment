# Blog API

A simple blog API built with Express and MongoDB, using Mongoose for data modeling.

NOTE : In server.js i have implemented using mongodb as database. While in temp.js i have not used any database (used local storage). both are tested and working.

## Features

- CRUD operations for blog posts

## Prerequisites

- Node.js (>=12.0.0)
- MongoDB instance or cluster

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-api.git
   cd blog-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure:
   Create a `.env` file in the root directory:
   ```dotenv
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/your-database?retryWrites=true&w=majority
   ```

4. Start the server:
   ```bash
   npm start
   ```

   Server runs on `http://localhost:5001` by default.

## API Endpoints

Base URL: `http://localhost:5001`

1. POST `/blog`: Create a new blog post
2. GET `/blog`: Retrieve recent blog posts
3. GET `/blog/:id`: Retrieve a specific blog post
4. PUT `/blog/:id`: Update a blog post
5. DELETE `/blog/:id`: Delete a blog post

## Code Structure

```
.
├── .env
├── package.json
├── server.js
└── README.md
```

## Dependencies

- express
- mongoose
- dotenv
```
