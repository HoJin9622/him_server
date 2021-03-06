import mongoose from 'mongoose'

const ingredientSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  barcode: {
    type: String,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

export default Ingredient
