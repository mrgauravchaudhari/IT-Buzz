const express = require('express');
const mongoose = require('mongoose');
const blogsRouter = require('./routes/blogs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/blogs', blogsRouter);

mongoose.connect('mongodb://localhost:27017/blogmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error(err));
