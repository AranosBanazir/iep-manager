const authenticate = (req, res, next) => {
  if (!req.session.logged_in) {
    res.render('home')
  } else {
    next();
  }
};

module.exports = {
  authenticate,
};
