const{createUser, getUserByUserid, getUsers, updateUsers, deleteUsers} = require("./user.controllers");
const router = require('express').Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserByUserid);
router.patch('/', updateUsers);
router.delete('/', deleteUsers);

module.exports = router;