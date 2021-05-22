const express =require('express');
const router = express.Router();

router.get('/',(req, res) => {
res.send('serevr is up running');
});

module.exports =router;