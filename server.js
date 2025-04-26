const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // import cors package
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

// Enable CORS
app.use(cors()); // Allow all origins by default

app.use(bodyParser.json());

app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 5056;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
