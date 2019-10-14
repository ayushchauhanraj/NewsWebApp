const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newsDb', { useNewUrlParser: true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
module.exports = mongoose;