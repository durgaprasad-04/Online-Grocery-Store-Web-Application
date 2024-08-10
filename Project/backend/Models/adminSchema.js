const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
  username: { type: String, required: true, unique: true },
  products: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports={Admin}
