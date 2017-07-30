import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema  = mongoose.Schema;

const userSchema = new Schema({
    name:   { type: String , required: true },
    lastname:   { type: String , required: true },
	email:   { type: String, unique: true, lowercase: true, required:true  },
	hash_password: { type: String, required: true },
	created:  { type: Date, default: Date.now }
})

userSchema.methods.comparePassword  = (password) => {
    return bcrypt.compareSync(password, this.hash_password);
}

module.exports = mongoose.model('user',userSchema);