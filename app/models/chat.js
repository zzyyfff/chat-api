const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
  user1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  user2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lastMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Chat', chatSchema)

// Another way to do this would have been to add message refs to this schema:
//
// messages: [{
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'Message',
//   required: true
// }]
