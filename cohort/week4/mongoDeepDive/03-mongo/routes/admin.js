import express from 'express';
import { Admin, Courses } from '../db/index.js';
import adminMiddleware from '../middleware/admin.js';

const adminRouter = express.Router();

adminRouter.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ username, password });

    if (existingAdmin) {
      return res.status(400).json({ msg: 'Admin already exists!' });
    }

    const newAdmin = await Admin.create({ username, password });
    res.json({ msg: 'Admin created successfully!', admin: newAdmin });
  } catch (error) {
    res.status(500).json({ msg: 'Error creating admin!', error: error.message });
  }
});

adminRouter.post('/courses', adminMiddleware, async (req, res) => {
  const { title, description, imageLink, price } = req.body;

  try {
    const course = await Courses.create({ title, description, imageLink, price });
    res.status(200).json({ msg: 'Course created successfully!', courseId: course._id });
  } catch (error) {
    res.status(500).json({ msg: 'Error creating course!', error: error.message });
  }
});

adminRouter.get('/courses', adminMiddleware, async (req, res) => {
  try {
    const courses = await Courses.find({});
    res.json({ courses });
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching courses!', error: error.message });
  }
});

export default adminRouter;
