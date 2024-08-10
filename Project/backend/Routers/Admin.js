const {Router} = require('express');
const router =Router()

const Admin = require("../Models/adminSchema")



router.post('/admin/:username/add', async (req, res) => {

    const { username } = req.params;
    const { title, description, price } = req.body;
  
    try {
      let admin = await Admin.findOne({ username });
  
      if (!admin) {
        admin = new Admin({ username, products: [] });
      }
      admin.products.push({ title, description, price });
  
      await admin.save();
  
      res.status(200).json({ message: 'Product added successfully', admin });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err });
    }
  });

module.exports = router;
  