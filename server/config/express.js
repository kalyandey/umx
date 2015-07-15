/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var mysql =  require('mysql');
var config = require('./environment');
var nodemailer = require("nodemailer");




module.exports = function(app) {
  var env = app.get('env');
  
  
  var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'db123@',
   database : 'umx'
 });
  
 
  
  var smtpTransport = nodemailer.createTransport("SMTP",{
      service: "Gmail",
      auth: {
      user: "ashes.pal@webskitters.com",
      pass: "ashes123#"
      }
  });
  
  
  
  app.set('siteUrl','http://localhost:9000/');
  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.set('connection',connection);
  app.set('smtpTransport',smtpTransport);
  //app.set('sess',session);
  
  
  

  
  
  if ('production' === env) {
    app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('appPath', config.root + '/public');
    app.use(morgan('dev'));
  }

  if ('development' === env || 'test' === env) {
    app.use(require('connect-livereload')());
    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'client')));
    
    app.set('appPath', path.join(config.root, 'client'));
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};


