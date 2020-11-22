const express = require('express');
const router = express.Router();
const db = require('../../config/db');

// @route GET api/users
// @desc get all users
// @access Public

const usersTable = db.collection('users');

router.get('/', [], async (req, res) => {
  try {
    const response = await usersTable.get();
    const users = [];
    response.forEach((doc) => {
      users.push({...doc.data(), id: doc.id});
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});

// @route GET api/users/:id
// @desc get user by id
// @access Public

router.get('/:id', [], async (req, res) => {
  try {
    const response = await usersTable.doc(req.params.id).get();
    if (!response.exists) {
      return res.status(404).send('ID not found!');
    } else {
      user = response.data();
      res.json(user);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});

// @route POST api/users
// @desc Create user
// @access Public

router.post('/', [], async (req, res) => {
  try {
    let user;
    const response = await usersTable
      .where('email', '==', req.body.email)
      .get();
    response.forEach((doc) => {
      user = doc.id;
    });

    if (user) {
      return res.status(400).send('Email Already exist!');
    }

    const newUser = {
      email: req.body.email,
      phone: req.body.phone,
      fullName: req.body.fullName,
      password: req.body.password,
    };

    await usersTable.add(newUser);
    res.json(newUser);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});

// @route POST api/users
// @desc Edit user
// @access Public

router.post('/:id', [], async (req, res) => {
  try {
    let user;
    const response = await usersTable.doc(req.params.id).get();

    if (!response.exists) {
      return res.status(404).send('ID not found!');
    } else {
      user = response.data();
    }

    const newUser = {
      email: req.body.email || user.email,
      phone: req.body.phone || user.phone,
      fullName: req.body.fullName || user.fullName,
      password: req.body.password || user.password05,
    };

    await usersTable.doc(req.params.id).set(newUser);
    res.json(newUser);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});

// @route DELETE api/users/:id
// @desc Delete user by id
// @access Public

router.delete('/:id', [], async (req, res) => {
  try {
    const response = await usersTable.doc(req.params.id).get();

    if (!response.exists) {
      return res.status(404).send('ID not found!');
    } else {
      await usersTable.doc(req.params.id).delete();
      res.json({msg: `User with id ${req.params.id} deleted successfully!!`});
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server error');
  }
});

module.exports = router;
