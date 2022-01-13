const db = require ('./connection.js');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Family' },
        { name: 'Colors' },
        { name: 'Food' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Love',
            description: 'made with love in the heart',
            image: 'love.jpg',
            category: categories[1]._id,
            price: 800,
            quantity: 1
        },
        {
            name: 'Set',
            description: 'made with love in the heart',
            image: 'set.jpg',
            category: categories[1]._id,
            price: 700,
            quantity: 1
        },
        {
            name: 'Burst',
            description: 'made with love in the heart',
            image: 'burst.jpg',
            category: categories[1]._id,
            price: 600,
            quantity: 1
        },
        {
            name: 'Sisters',
            description: 'I am so lucky to have four older sisters. They have taught me how to be a woman, we have entwinded feminity because of this',
            image: 'sisters.jpg',
            category: categories[0]._id,
            price: 500,
            quantity: 1
        },
        {
            name: 'Taking up Space',
            description: 'Being a loud and proud Indigenous woman, I have always recived some form of being "too much". I voice my opinions strongly, laugh loudly, and I will continue to take up as much space as I deem fit. I refuse to let the colony control how I shine.',
            image: 'taking.jpg',
            category: categories[0]._id,
            price: 400,
            quantity: 1
        },
        {
            name: 'Winthali',
            description: 'made with love in the heart',
            image: 'winthali.PNG',
            category: categories[1]._id,
            price: 300,
            quantity: 1
        },
    ]);

    console.log("products seeded");

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
        {
            products: [products[0]._id, products[0]._id, products[1]._id]
        }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
})