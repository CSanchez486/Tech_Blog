const router = require('express').Router;
const { Post } = require('../../models');
const withAuth = require('../../utils/authUser')

// referenced: 14 -28 projectRoute.js
// post gets posted
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch(err) {
        res.status(500).json(err);
    }
});

// post gets updated using router.put
// ref: module 14 - 10
router.put('/:id', async(req,res) => {
    try {
        const post = await Post.update({ 
            title: req.body.title,
            body: req.body.body,
        });
        res.status(200).json.end();
    } catch (err) {
        res.status(500).json(err)
    }
});


//post gets deleted
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [editedPost] = await Post.destroy({
            where: {
                user_id: req.params.user_id,
            },
        });

        //  need if/else statement
        if ([editedPost] !== 0) {
            // ends response without data
            // referenced: https://expressjs.com/en/api.html
            res. status(200).end();
        } else {
            res. status(404).end();
        }    
    // need catch for 500 error
    } catch(err) {
        res.status(500).json(err);
    }
});