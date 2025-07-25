const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ username: "Hero001", faction: "Solar Dynasty" });
});

module.exports = router;
