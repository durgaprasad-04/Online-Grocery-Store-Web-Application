const { Router } = require("express");
const router = Router();

const { User } = require("../Models/user");

router.post("/cart/add/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) return res.send({ message: "User not found" });
    const { title,image, price, description } = req.body;
    user.carts.push({ title,image, price, description });
    await user.save();
    res.send({ message: "Item carted successfully" });
  } catch (err) {
    console.log(err);
    res.send({ message: "Internal server error" });

  }
});

router.get("/cart/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);
    if (!user) return res.send({ message: "User not found" });
    const carts = user.carts;
    res.send(carts);
  } catch (err) {
    res.send({ message: "Internal server error" });
  }
});

router.delete("/cart/delete/:userId/:cartId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const cartId = req.params.cartId;
    const user = await User.findById(userId);
    if (!user) {
      res.send({ message: "User not found" });
    }
    const cartIndex = user.carts.findIndex(
      (index) => index._id.toString() === cartId
    );
    if (cartIndex === -1) {
      res.send({ message: "Item not found" });
    }
    await user.updateOne({
      $pull: {
        carts: {
          _id: user.carts[cartIndex]._id,
        },
      },
    });
    
    res.send({ message: "Item deleted successfully" });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.send({ message: "Internal server error" });
  }
});


module.exports = router;
