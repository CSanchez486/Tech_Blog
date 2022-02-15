const router = require('express').Router();
const { User } = require('../../models');

// Ref: Module 18 - 28 "userRoutes"
// signup - create credentials
router.post('/', async (req,res) => {
    try{
        const = newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        
        req.session.save(() => {
            req.session.user_id =newUser.id;
            req.session.
        });
    };
});




// login - needs to validate credentials


module.exports = router;