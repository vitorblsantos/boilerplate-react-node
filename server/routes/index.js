import { Router } from 'express';

const router = Router();

router.get('/', function(req,res){
    res.status(200).send('Boilerplate React Node');
});

export default router;