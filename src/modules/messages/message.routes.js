const router = require('express').Router();
const controller = require('./messages.controller');

/**
 * @swagger
 *   /api/messages:
 *     get:
 *       tags:
 *       - Messages
 *       description: Get all messages
 *       responses:
 *         200:
 *           description: Array with a list of messages
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/messages/{id}:
  *     get:
  *       tags:
  *       - Messages
  *       description: Get one message by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: The message's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
 router.get('/:id', controller.getOne);


 /**
 * @swagger
 *   /api/messages/create:
 *     post:
 *       tags:
 *       - Messages
 *       description: Create a new Channel link
 *       parameters:
 *         - in: body
 *           name: channels
 *           schema:
 *             type: object
 *             properties:
 *               mensaje:
 *                type: string
 *               channelId:
 *                type: string
 *               creador:
 *                type: string
 * 
 *       responses:
 *         200:
 *           description: An object with a single user's data
 *         404:
 *           description: Informacion incorrecta
 */
router.post('/create',controller.create);

 
 module.exports = router;
