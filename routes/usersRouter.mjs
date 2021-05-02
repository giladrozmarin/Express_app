import express      from 'express';
import {getAllUsers,getUserById,DeleteUserById,PatchUser,PutUser} from '../DAL/usersDAL.mjs'
const router      = express.Router();

router.get('/', async (req, res) => {
    
    res.status(200).json(await getAllUsers())
})

router.get('/:id', async (req, res) => {

    
    res.status(200).json(await getUserById(req.params.id))
})
router.delete('/:id', async (req, res) => {

    
    res.status(200).json(await DeleteUserById(req.params.id))
})
router.patch('/', async (req, res) => {
  
  
     const {id,key,value} = req.body
    res.status(200).json(await PatchUser(id,key,value))

})  

router.put('/', async (req, res) => {
  
  
    const {id} = req.body
   
   res.status(200).json(await PutUser(id,req.body))

})  
export default router
