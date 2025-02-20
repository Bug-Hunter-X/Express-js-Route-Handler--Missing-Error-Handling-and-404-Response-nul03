const express = require('express');
const app = express();

// Sample user data (replace with your actual data source)
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;

  // Input validation
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const user = users.find(user => user.id === parseInt(userId));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});