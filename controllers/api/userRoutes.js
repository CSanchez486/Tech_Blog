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

//ref: Module 14 - 28 userRoutes
// login - needs to validate credentials

router.post('/login', async (req,res) => {
    try {
        const userName = await User.findOne({
            where: { username: req.body.username }
        });
        if (!userName) {
            res.status(400).json({ message: 'Incorrect Username Used'});
            return;
        }

        // checks if password 
        const passWord = await userName.checkPassword(req.body.password);

        if (!passWord) {
            res.status(400).json({ message: 'Incorrect Password Used'});
        return;
        }

        req.session.save(() => {
            req.session.user_id = userName.id;
            req.session.user_name = newUser.username;
            req.session.logged_in = true;

            res.json({ user: userName, message: 'You are now logged in!'});
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req,res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    } 
});

module.exports = router;