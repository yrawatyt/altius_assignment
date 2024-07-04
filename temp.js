const express=require('express');
const app=express();
const port=5001;

blog=[{
    id:'1',
    title: 'John',
    body: 'Doe',
    author: 'johndoe@example.com',
  },]

app.use(express.json());




app.listen(port, ()=>
{
    console.log(`listening on port no. ${port}`);
});

app.post('/blog',(req,res)=>{
    const {title, body, author}=req.body;
    
    if (!title || !body || !author) {
        return res.status(400).send('Missing title or author or body');
      }
    //console.log(data);
    const newId = (blog.length + 1).toString(); // Generate a new id
    const data={id:newId,title, body, author};
    blog.push(data);
    res.status(201).send(data);
});

// app.get('/blog', (req,res)=>
// {
//     console.log(blog);
//     res.json(blog);

// });

app.get('/blog/:id', (req, res) => {
    const data= blog.find(b => b.id === req.params.id);
    if (!data) {
      return res.status(404).send('Book not found');
    }
    res.json(data);
  });

//pagination
const pageLimit = 5;
app.get('/blog/', function(req, res) {
  res.json({
    "posts": blog.slice(-pageLimit).reverse(),
    "page": 1,
    "pageCount": Math.ceil(blog.length / 5)
  });
});

app.put('/blog/:id', (req, res) => {
    const data = blog.find(b => b.id === req.params.id);
    if (!data) {
      return res.status(404).send('Book not found');
    }
  
    const { title,body, author} = req.body;
    data.title = title || blog.title;
    data.author = author || blog.author;
    data.body=body||blog.body;
  
    res.send(data);
  });

  app.delete('/blog/:id', (req, res) => {
    const blogIndex = blog.findIndex(b => b.id === req.params.id);
    if (blogIndex === -1) {
      return res.status(404).send('Book not found');
    }
  
    blog.splice(blogIndex, 1);
    res.status(204).send();
  });


  

