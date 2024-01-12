const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Capybar = mongoose.model('Capybar', { name: String });
const welding = new Capybar({ name: 'Апельсин' });

welding.save()
  .then(() => console.log('на_голове'))
  .catch((err) => console.log(err));