const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://mandoosorio:atlasDB@cluster0.cdz8g.mongodb.net/art?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;