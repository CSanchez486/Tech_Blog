// referenced module 14 - 23
// users are redirected to the login page if they aren't logged in
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;