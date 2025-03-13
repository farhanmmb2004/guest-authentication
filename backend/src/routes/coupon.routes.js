import express from 'express';
import { getCoupon, addCoupon } from '../controllers/coupon.controller.js';
import rateLimiter from '../middleware/rateLimiter.js';
import sessionHandler from '../middleware/sessionHandler.js';

const router = express.Router();

// Apply session middleware to all routes
router.use(sessionHandler);

// Route to get a coupon (apply rate limiting)
router.route('/claim').get(rateLimiter, getCoupon);

// Admin route to add new coupons (would normally have auth middleware)
router.route('/add').post(addCoupon);

export default router;