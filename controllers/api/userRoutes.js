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
        
        //id is created as unique identifier per username
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.user_username = newUser.username;

        });
        res.status(200)json(newUser);
    } catch (err) {
            res.status(500).json(err);
    };
});




// login - needs to validate credentials


module.exports = router;