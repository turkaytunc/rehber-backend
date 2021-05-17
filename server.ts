import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();

const { PORT = 4002 } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
