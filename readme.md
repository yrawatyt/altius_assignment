# Blog API

This is a simple blog API built with [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/), using [Mongoose](https://mongoosejs.com/) for data modeling. The API supports basic CRUD operations for managing blog posts.

## Features

- Create a new blog post
- Retrieve all blog posts
- Retrieve a specific blog post by ID
- Update a blog post by ID
- Delete a blog post by ID

## Prerequisites

- Node.js (>=12.0.0)
- npm (comes with Node.js)
- MongoDB instance or cluster

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/blog-api.git
cd blog-api
```

### Install Dependencies

```bash
npm install
```

### Configuration

1. **Create a `.env` file** in the root directory of the project.
2. **Add your MongoDB URI** to the `.env` file:

```dotenv
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/your-database?retryWrites=true&w=majority
```

Replace the placeholder values (`username`, `password`, `cluster`, `your-database`) with your actual MongoDB connection details.

### Running the Server

```bash
npm start
```

By default, the server will start on port `5001`. You can access the API at `http://localhost:5001`.

## API Endpoints

### Base URL

`http://localhost:5001`

### Endpoints

#### 1. Home

- **GET `/home`**

  Returns a simple greeting message.

  **Response:**

  ```
  hello
  ```

#### 2. Create a Blog Post

- **POST `/blog`**

  Creates a new blog post.

  **Request Body:**

  ```json
  {
    "title": "My First Blog Post",
    "body": "This is the content of the blog post.",
    "author": "John Doe"
  }
  ```

  **Response:**

  ```json
  {
    "_id": "60d21baee9f4b204e9e3d9c2",
    "title": "My First Blog Post",
    "body": "This is the content of the blog post.",
    "author": "John Doe",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
  ```

#### 3. Retrieve All Blog Posts

- **GET `/blog`**

  Retrieves the most recent 5 blog posts.

  **Response:**

  ```json
  {
    "posts": [
      {
        "_id": "60d21baee9f4b204e9e3d9c2",
        "title": "My First Blog Post",
        "body": "This is the content of the blog post.",
        "author": "John Doe",
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      },
      ...
    ],
    "page": 1,
    "pageCount": 1
  }
  ```

#### 4. Retrieve a Blog Post by ID

- **GET `/blog/:id`**

  Retrieves a blog post by its ID.

  **Response:**

  ```json
  {
    "_id": "60d21baee9f4b204e9e3d9c2",
    "title": "My First Blog Post",
    "body": "This is the content of the blog post.",
    "author": "John Doe",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
  ```

#### 5. Update a Blog Post by ID

- **PUT `/blog/:id`**

  Updates an existing blog post by its ID.

  **Request Body:**

  ```json
  {
    "title": "Updated Blog Post Title",
    "body": "Updated content of the blog post.",
    "author": "Jane Doe"
  }
  ```

  **Response:**

  ```json
  {
    "_id": "60d21baee9f4b204e9e3d9c2",
    "title": "Updated Blog Post Title",
    "body": "Updated content of the blog post.",
    "author": "Jane Doe",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-02T00:00:00.000Z"
  }
  ```

#### 6. Delete a Blog Post by ID

- **DELETE `/blog/:id`**

  Deletes a blog post by its ID.

  **Response:**

  ```
  (No content, status 204)
  ```

## Code Structure

```
.
├── .env                  # Environment variables
├── package.json          # Project metadata and dependencies
├── server.js             # Main application file
└── README.md             # Project documentation
```

## Dependencies

- `express`: Web framework for Node.js
- `mongoose`: MongoDB object modeling tool
- `dotenv`: Loads environment variables from `.env` file
