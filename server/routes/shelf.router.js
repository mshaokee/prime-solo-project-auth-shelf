const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    let queryString = `SELECT * FROM "item";`;
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
    })
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    let userId = req.user.id
    console.log('User is',req.user, userId)
    let url = req.body.url;
    let desc = req.body.description;
    let queryString = `INSERT INTO "item" (description, image_url, user_id) VALUES ($1, $2, $3);`;
    pool.query(queryString, [desc, url, userId]).then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('There is an error in shelf.router.post',error)
        res.sendStatus(500);
    })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    let itemId = req.params.id;
    let userId = req.user.id;
    console.log(req.user.username, 'is deleting', itemId);
    let queryString = `DELETE FROM "item" WHERE id=$1 AND user_id=$2;`
    pool.query(queryString, [itemId, userId]).then((result)=> {
        res.sendStatus(200);
    }).catch((err)=> {
        console.log(err)
        res.sendStatus(500);
    });//end pool query
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;