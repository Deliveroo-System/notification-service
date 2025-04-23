const express = require('express');
const app = express();
const notificationRoutes = require('./routes/notificationRoutes');

require("dotenv").config();

app.use(express.json()); // Parse JSON bodies

app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
