const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true
 },
  password: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  role: { 
    type: String, enum: ['admin', 'doctor', 'patient'], default: 'patient' 
},
dob: { 
  type: String, 
  required: true, 
},
gender: { 
  type: String, enum: ['female', 'male', 'other'], 
},
phone: { 
  type: Number, 
  required: true, 
},
address: { 
  type: String, 
  required: true,
},

});

const User = mongoose.model('User', userSchema);

module.exports = User;
