

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         order_id:
 *           type: integer
 *         user_id:
 *           type: integer
 *         vendor_id:
 *           type: string
 *         delivery_partner_id:
 *           type: string
 *         order_type:
 *           type: string
 *         quantity:
 *           type: integer
 *         price:
 *           type: integer
 *         status:
 *           type: string
 *           enum: [Pending, Completed, Cancelled]
 *         delivery_address:
 *           type: string
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *       required:
 *         - user_id
 *         - vendor_id
 *         - order_type
 *         - quantity
 *         - price
 */

