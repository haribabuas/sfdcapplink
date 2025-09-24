const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Sample endpoint
app.post('/processRecord', (req, res) => {
  const { recordId, name } = req.body;
  console.log('Received:', req.body);

  res.json({
    status: 'success',
    message: `Processed record ${recordId} for ${name}`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});