import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function server() {
  try {
    await mongoose.connect(config.mongodb_url as string);

    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`),
    );
  } catch (err) {
    console.log(err);
  }
}

server();
