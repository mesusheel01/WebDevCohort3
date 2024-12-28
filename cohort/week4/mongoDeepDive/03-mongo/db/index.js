import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:passme@cluster0.t6rr9na.mongodb.net/Courses', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Define schemas
const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  price: Number
});

// Define models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Courses = mongoose.model('Courses', courseSchema);

export { User, Admin, Courses };
