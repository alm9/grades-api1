import mongoose from 'mongoose';

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

export { db };
