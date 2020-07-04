import mongoose from 'mongoose';
// import {} from 'dotenv/config';
// import 'dotenv/config';
// IT WORKED ONLY ADDING THE FLAG: -r -dotenv/config
// FULL TERMINAL CODE: nodemon -r -dotenv/config --experimental-modules

const db = {
  name: { type: String, required: true },
  subject: { type: Number, required: true },
  type: { type: Number, required: true },
  value: {
    type: Number,
    min: 0,
    required: true,
  },
  lastModified: { type: Date, default: Date.now },
};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
async function teste() {
  console.log('\n\n\t\t\t!!!!!!!!');
  console.log(
    ' »\t»\t»\t' +
      (await db.url) +
      ', ' +
      typeof (await db.url) +
      ', ' +
      process.env.PORT
  );
  // console.log(typeof (await db.url));
  // console.log(process.env.PORT);
}
teste(); //teste

export { db };
