require('dotenv').config();
const express = require('express');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const exCtrl = require('./controllers/ExerciseController');
const userCtrl = require('./controllers/UserController');
const foodCtrl = require('./controllers/FoodController');
const massive = require('massive');
const session = require('express-session');

const app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
  }),
);

app.get('/api/all', exCtrl.returnAll);
app.post('/api/add/exercise', exCtrl.addEx);
app.post('/api/user/exercises', exCtrl.addToUser);
app.put('/api/user/exercise', exCtrl.editUserEx);
app.delete('/api/exercise/:id', exCtrl.removeUserEx);
app.post('/api/register', userCtrl.register);
app.post('/api/user', userCtrl.userLogin);
app.put('/api/user', userCtrl.editUserInfo);
app.delete('/api/user', userCtrl.userLogOut);
app.post('/api/user/password', userCtrl.resetPassword);
app.post('/api/user/food', foodCtrl.addFood);

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  app.listen(SERVER_PORT, () => console.log(`Self destruct in ${SERVER_PORT}`));
});
