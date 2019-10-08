import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://automate:Tjddn128@car-db-tmwmy.mongodb.net/test?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Database connection is open!');
});

export default db;
