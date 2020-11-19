const express = require('express');
const app = express();
const cors = require('cors');
const users = require('./routes/api/users');

// Get data from body
app.use(cors());
app.use(express.json({extended: false}));

app.use('/api/users', users);

const PORT = process.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});
