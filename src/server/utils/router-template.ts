import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'final exam sucks', error });
    }
});

export default router;