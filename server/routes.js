/**
 * Main application routes
 */

'use strict';
var posix = require("posix");
var express=require("express");
var multer  = require('multer');
var app=express();
var done=false;
var errors = require('./components/errors');
var session = require('express-session');
var crypto =  require('crypto'),
              algorithm = 'aes-256-ctr',
              password = 'd6F3Efeq';

module.exports = function(app) {

  
  app.use(multer({ dest: '/opt/lampp/htdocs/NODEJS/umx/uploads/',
    rename: function (fieldname, filename) {
       return filename+Date.now();
     },
   onFileUploadStart: function (file) {
     console.log(file.originalname + ' is starting ...')
   },
   onFileUploadComplete: function (file, req, res) {
    //console.log(file)
    res.send(file.name);
     //console.log(file.fieldname + ' uploaded to  ' + file.path)
     done=true;
   }
   }));
  
  app.use('/api/things', require('./api/thing'));
  app.use(session({secret: 'umx_2015'}));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

    app.route('/')
    .get(function(req, res) {     
     
     console.log('aaaa');
     console.log(session.user_name);
     
      //res.sendfile(app.get('appPath') + '/index.html');
    });
    
    
    app.route('/activation')
    .post(function(req, res) {
      
      var email = req.body.email;
      console.log(email);
      var query = app.get('connection').query('SELECT * FROM users WHERE email = ?', [email], function(err, result) {
        //console.log(result.length);
        
        if (result.length>0) {
          res.send('Email Already Registered');
        }
        else
        {
            var email_enc = encrypt(email);     
            console.log(email_enc);
                
            var mailOptions={
              to : email,
              subject : 'Verfy Email',
              html : 'Please click on the below link to activate your email. <br><br> <a href="'+app.get('siteUrl')+'signup/'+email_enc+'">'+app.get('siteUrl')+'signup/'+email_enc+'</a>'
              }
              app.get('smtpTransport').sendMail(mailOptions, function(error, response){
                  if(error){
                  console.log(error);
                  //res.end("error");
                  }else{
                  res.send('An Email has been sent. Please verify your email.');  
                  console.log("Message sent: " + response.message);            
                  //res.redirect('/');
                  //res.end("sent");
                  }
              });
        }
        
      });

    });
    
    
    app.route('/dashboard').get(function(req, res){
      
      res.sendfile(app.get('appPath') + '/index.html');
    });
    
    app.route('/checkemail')
    .post(function(req, res) {
      
      var email = decrypt(req.body.email);
      //console.log(email);
      
      res.send(email);

    });
    
    
    app.route('/signup/:email').get(function(req,res){
      
       var email =req.params.email ;     
       var insVal  = {email: decrypt(email)};

        res.sendfile(app.get('appPath') + '/index.html');
      
        
    });
    
    
    app.route('/adduser')
    .post(function(req, res) {

        //console.log(decrypt(req.body.email));
        var insVal  = {name: req.body.name, email: decrypt(req.body.email), password: req.body.password, school: req.body.school};
        
      var query = app.get('connection').query('SELECT * FROM users WHERE email = ?', [decrypt(req.body.email)], function(err, result) {
          if (result.length>0) {
            res.send('You have already registered');
          }
          else{
              var query = app.get('connection').query('INSERT INTO users SET ?', insVal, function(err, result) {
                  console.log(result.insertId);
                  res.send('Thank Your for register');
              });
          }
  
      });

    });
    
    app.route('/login')
    .post(function(req, res) {

        var email = req.body.email;
        var password = req.body.password;
        //console.log(email);
        //console.log(password);
        
      var query = app.get('connection').query('SELECT * FROM users WHERE email = ? AND password = ?', [email,password], function(err, result) {
          if (result.length>0) {
            session.user_id = result[0].id;
            session.user_name = result[0].name;
            session.user_info = result;
            res.send('1');
            //res.send(result);
          }
          else{
            res.send('0');
            //res.send('Invalid Username or Password');  
          }
  
      });

    });
    
    app.route('/logout').post(function(req, res){
            session.user_id = '';
            session.user_name = '';
            session.user_info = '';
            res.send('1');
      
    });
    
    app.route('/loginCheck').post(function(req, res){
      if (session.user_id == '') {
        res.send('0');
      }else{
        res.send('1');
      }
    });
    app.route('/userinfo')
    .post(function(req, res) {
      
      //console.log(session.user_name);
          if (session.user_id >0) {
            res.send(session.user_info);
          }
          else{
            res.send('0');
          }  
    });
    
    //app.route('/products').get(function(req,res){
    //  
    //  res.send('aaaa');
    //  
    //  });
    
    app.route('/addproduct').post(function(req, res){
      
      var insVal = {user_id:session.user_id,product_name:req.body.name,category_id:req.body.category,price:req.body.price,condition:req.body.condition,desctription:req.body.description,product_image:req.body.picture};
      console.log(insVal);
      var query = app.get('connection').query('INSERT INTO product SET ?', insVal, function(err, result) {
                  //console.log(result.insertId);
                  res.send('Product has been added successfully');
              });  
      
      
    });
    
    app.route('/productimage').post(function(req, res){
      
    });
    
    app.route('/category_list').post(function(req, res){      
     
      var query = app.get('connection').query('SELECT * FROM category WHERE status= ?', ['Active'], function(err, result) {
                  res.send(result);
              });      
    });
    
    app.route('/product_list').post(function(req, res){      
     
     
      //var slug = req.params.slug ;
      //console.log('aa');
      //console.log(req.params);
      
      var query = app.get('connection').query('SELECT * FROM product AS P LEFT JOIN category AS C ON P.category_id = C.category_id WHERE P.status= ? ', ['Active'], function(err, result) {
                  //console.log(result);
                  //console.log(err);
                  res.send(result);
              });      
    });
    
};


  function encrypt(text){
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
  }
   
  function decrypt(text){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }
  
  
