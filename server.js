const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 5056;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
