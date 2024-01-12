const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const CapybaraSchema = new mongoose.Schema( {name: String} );
CapybaraSchema.methods.brew = function() {
    console.log(this.name + ' ест апельсины');
}
const Capybar = mongoose.model('Capybara', CapybaraSchema);    
const welding = new Capybar({ name: 'Капибара с вилкой' });

welding.save()
  .then(() => welding.brew('на голове'))
  .catch((err) => console.log(err));