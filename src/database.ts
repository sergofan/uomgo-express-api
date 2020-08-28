import { config } from 'dotenv';
import mongoose from 'mongoose';

require('paint-console');

config({ path: '.env.prod' });
const connectionString: string = process.env.MONGO_URL || '';

class Mongo {
  dbConnect(): Promise<typeof mongoose> {
    this.dbConnect = this.dbConnect.bind(this);
    mongoose.connection.on('error', (err) => {
      console.error(`Mongo Database connection error: ${err}`);
    });
    mongoose.connection.on('connected', () => {
      console.info('Mongo Database connected');
    });
    return mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export { Mongo };
