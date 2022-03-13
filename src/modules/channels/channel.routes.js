const router = require('express').Router();
const controller = require('./channels.controller');

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */
 router.get('/', controller.getAll);

 /**
  * @swagger
  *   /api/channels/{id}:
  *     get:
  *       tags:
  *       - Channels
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
 *   /api/channels/create:
 *     post:
 *       tags:
 *       - Channels
 *       description: Create a new Channel
 *       parameters:
 *         - in: body
 *           name: channels
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                type: string
 *               canal:
 *                type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
 router.post('/create',controller.create);


 /**
 * @swagger
 *   /api/channels/link:
 *     post:
 *       tags:
 *       - Channels
 *       description: Create a new Channel link
 *       parameters:
 *         - in: body
 *           name: channels
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                type: string
 *               channelId:
 *                type: string
 *       responses:
 *         200:
 *           description: An object with a single user's data
 *         404:
 *           description: Informacion incorrecta
 */
 router.post('/link',controller.link);

 
 /**
 * @swagger
 *   /api/channels/join/{id}/{userId}:
 *     put:
 *       tags:
 *       - Channels
 *       description: Create a new Channel link
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *         - in: path
 *           name: userId
 *           required: true
 *       responses:
 *         200:
 *           description: Se unio correctamente
 *         404:
 *           description: Informacion incorrecta
 */
  router.put('/join/:id/:userId',controller.join);

module.exports = router;

