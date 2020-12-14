import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    res.send('Welcome to the base directory of your API');
});

router.post('/user', (req, res) => {
    res.send('create route');
});
router.delete('/user', (req, res) => {
    res.send('delete route');
});
router.put('/user', (req, res) => {
    res.send('update route');
});


export default router;