import { model, Schema } from 'mongoose';

export const Pet = model('Pet', new Schema({
  petsName: {
    type: String,
    required: true
  },
  age: Number,
  animalType: {
    type: String,
    enum: ['DOG', 'CAT']
  },
  race: String,
  owner: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  }
}));

