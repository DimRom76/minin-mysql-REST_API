const express = require('express');
const path = require('path');
const app = express();
const sequlize = require('./utils/database');
const todoRoutes = require('./routes/todo');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/todo', todoRoutes);

app.use((req, res, next) => {
  res.sendFile('/index.html');
});

async function start() {
  try {
    //    await sequlize.sync({ force: true });  //очистка базы
    await sequlize.sync();
    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

start();
