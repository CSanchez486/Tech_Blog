const router = require("express").Router();
const { Comment, Post, User } = require("../models");


// get one post - referenced Module 14 - 28
// async makes the function return a Promise
router.get("./post/:id", async (req,res) => {
    try {
        // singlePost will find Post from primary key
        const singlePost = await Post.findByPK(req.params.id, {
            include: [
                User,
                {
                    // post and user will be pulled from comment
                    model: Comment,
                    include: ['User'],
                },
            ],
        });   
        //  if singlePost runs then plain text will be pulled and post on the home page
        if (singlePost){
            const post = singlePost.get({plain: true})
        res.render('singlePost', { post });
        } else {
            res.status(400).end();
        }
    } catch (err) {
        // 500 status will appear if an error is caught
        res.status(500).json(err);
    }
});

// get many posts
router.get("./", async (req,res) => {
    try{
        const manyPosts = await Post.findAll({
            // user needs to be shown with post per readme
            include: User,
        });
        const posts = manyPosts.get({plain: true});
        res.render('manyPosts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
})

// get sign-up
// after user signs up they are logged in, then redirected back to homepage
router.get('/signup', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }
    //if user has not signed up they will be redirected to the signup page
    res.render('signup')
})

// referenced module 14 - 16
// get log-in
router.get('/login', (req, res) => {
    // user gets redirected to homepage if they are already logged in 
    if (req.session.loggedIn){
        res.redirect('/');
        return;
    }
    // if user is not logged in they go to the login page
    res.render('login');
});

module.exports = router;
