// Queries:

// 1. Find all products
// db.products.find()

// 2. Find products with a price less than or equal to $200
// db.products.find({ price: { $lte: 200 } })

// 3. Find products in the "Electronics" category
// db.products.find({ category: "Electronics" })

// 4. Find products with the word "Apple" in the name
// db.products.find({ name: { $regex: "Apple", $options: "i" } })

// 5. Find products with a price between $100 and $500
// db.products.find({ price: { $gte: 100, $lte: 500 } })

// 6. Update the price of the "Amazon Echo" to $89
// db.products.updateOne({ name: "Amazon Echo" }, { $set: { price: 89 } })

// 7. Update the category of "Nike Air Max" to "Athletic Shoes"
// db.products.updateOne({ name: "Nike Air Max" }, { $set: { category: "Athletic Shoes" } })

// 8. Delete the product with the name "Bose QuietComfort 35"
// db.products.deleteOne({ name: "Bose QuietComfort 35" })

// 9. Count the number of products in the "Electronics" category
// db.products.count({ category: "Electronics" })

// 10. Find products sorted by price in descending order
// db.products.find().sort({ price: -1 })