const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) { // criar
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user); // encontrar um usuário pelo ID
    const targetDev = await Dev.findById(devId);

    if(!targetDev) { // se o target dev não existir (like em usuario inexistente)
      return res.status(400).json({ error: 'Dev not exists' });
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  }
};