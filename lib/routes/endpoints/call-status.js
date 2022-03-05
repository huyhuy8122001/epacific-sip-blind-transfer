const router = require('express').Router();
const callStatusEmitter = require('../../call-status-emitter')();

router.post('/', (req, res) => {
  const {logger} = req.app.locals;
  logger.info({payload: req.body}, 'call status');
  callStatusEmitter.notifyStatusEvent(req.body);
  res.sendStatus(200);
});

module.exports = router;
