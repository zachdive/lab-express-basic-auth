const router = require("express").Router();

function isLoggedIn (req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
}

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/main', isLoggedIn, (req, res) => {
  res.render('auth/main');
});

//GET to render
router.get('/private', isLoggedIn, (req, res) => {
  res.render('auth/private');
});


module.exports = router;
