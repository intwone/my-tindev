const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({ // todos os usuarios...
      $and: [
        { _id: { $ne: user } }, // ... que o id não seja igual ao (user)
        { _id: { $nin: loggedDev.likes} }, // ... pega todos os likes do usuário 
        { _id: { $nin: loggedDev.dislikes} } // ... pega todos os dislikes do usuário 
      ]
    })

    return res.json(users);
  },

  async store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if(userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const { name, bio, avatar_url: avatar } = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    })

    return res.json(dev);
  } 
};