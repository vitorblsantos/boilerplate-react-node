import { Router } from 'express';

const router = Router();

router.get('/', function(req,res){
    res.status(200).send('Hello World');
});

export default router;