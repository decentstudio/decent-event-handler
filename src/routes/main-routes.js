import express from 'express';
import { PriceService } from '../rename-this-shit/price/price-service'

const router = express.Router();
const priceService = new PriceService();

router.get('/', (req, res) => {
    priceService.getPrice().then((price) => {
        res.send({ message: price });
    });
});

export default router;