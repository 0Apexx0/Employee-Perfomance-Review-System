const User = require('../model/user');

module.exports.home = async function (req, res) {
    return res.render('home');
  };