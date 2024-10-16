import { json } from 'body-parser';
import express from 'express';
import authRoutes from './routes/auth';

const app = express();
app.use(json());

app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});