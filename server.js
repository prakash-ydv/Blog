const express = require('express');
const app = express();
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const userModel = require('./models/userModel');
const postModel = require('./models/postModel');
require('dotenv').config();


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const isLogedIn = (req, res, next) => {
  if (!req.cookies.token) {
    return res.redirect('/login'); // Redirect if not logged in
  }

  jwt.verify(req.cookies.token, process.env.SECRET_KEY, (err, user) => {
    if(err){
      return res.redirect('/login');
    }
    req.user = user;
    next();
  });

};

app.get('/', isLogedIn, async(req, res) => {
  const userID = req.user.id;
  const user = await userModel.findOne({_id: userID}); 
  const {fullname, username, email} = user;
  res.render('index', {fullname, username, email});

});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req,res) => {
  const {fullname, username, email, password} = req.body;

  // check for username and email already exists or not

  const userEmail = await userModel.findOne({email});
  const userName = await  userModel.findOne({username});

  if(userEmail || userName){
    return res.send('User already exists');
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const user = await userModel.create(
        {
          fullname,
          username,
          email,
          password:hash
        }
      )

      const token = jwt.sign({ id: user._id, username: user.username }, process.env.SECRET_KEY);
  
      // Set token in a cookie
      res.cookie('token', token);

      return res.redirect('/');

    });

    
});
  

})

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async(req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({email});

  if(user){
    bcrypt.compare(password, user.password, (err, result) => {
      if(result){
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.SECRET_KEY);
  
        // Set token in a cookie
        res.cookie('token', token);

        return res.redirect('/');
      }else{
        return res.send('Invalid username or password');
      }
    })
  }
});

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/login');
});


app.listen(3000);
