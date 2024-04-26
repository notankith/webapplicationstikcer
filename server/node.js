// Create a new preset
app.post('/api/presets', async (req, res) => {
  try {
    const result = await presetsCollection.insertOne(req.body);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    console.error('Error creating preset:', err);
    res.status(500).json({ message: 'Failed to create preset' });
  }
});
