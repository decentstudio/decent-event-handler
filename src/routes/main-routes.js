import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({message: 'Fuck you guy!!'});
});

export default router;