const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    dishes: [Schema.Types.Mixed],
    user: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Order', schema)