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
            const post = singlePost.get({plain: text})
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

// get sign-up

// get log-in