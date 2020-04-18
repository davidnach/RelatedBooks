'use strict';
require('dotenv').config();
var snoowrap = require('snoowrap');


const r = new snoowrap({
    userAgent: 'me',
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    refreshToken: process.env.REFRESHTOKEN
  });

  r.getHot().map(post => post.title).then(console.log);
  