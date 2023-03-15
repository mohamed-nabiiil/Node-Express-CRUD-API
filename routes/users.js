const {Router} = require('express');
const {CreateUser,GetUsers,GetUserID,DeleteUser,UpdateUser} = require('../controllers/users.js');


const router = Router();


router.get('',GetUsers);

router.post('/',CreateUser);

router.get('/:id',GetUserID);

router.delete('/:id',DeleteUser);

router.patch('/:id',UpdateUser)
module.exports= router;
