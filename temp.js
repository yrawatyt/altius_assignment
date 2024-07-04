const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 5001;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://Yogesh:<12345>@cluster0.bmkp6gc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define a Mongoose Schema and Model
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

app.get('/home', (req, res) => {
  res.send('hello');
});

app.post('/blog', async (req, res) => {
  const { title, body, author } = req.body;

  if (!title || !body || !author) {
    return res.status(400).send('Missing title or author or body');
  }

  try {
    const blog = new Blog({ title, body, author });
    await blog.save();
    res.status(201).send(blog);
  } catch (err) {
    res.status(500).send('Error saving blog');
  }
});

app.get('/blog', async (req, res) => {
  try {
    const blogs = await Blog.find().limit(5).sort({ createdAt: -1 });
    const totalBlogs = await Blog.countDocuments();
    res.json({
      posts: blogs,
      page: 1,
      pageCount: Math.ceil(totalBlogs / 5),
    });
  } catch (err) {
    res.status(500).send('Error fetching blogs');
  }
});

app.get('/blog/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.json(blog);
  } catch (err) {
    res.status(500).send('Error fetching blog');
  }
});

app.put('/blog/:id', async (req, res) => {
  const { title, body, author } = req.body;

  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, { title, body, author }, { new: true, runValidators: true });
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.send(blog);
  } catch (err) {
    res.status(500).send('Error updating blog');
  }
});

app.delete('/blog/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).send('Blog not found');
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).send('Error deleting blog');
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
