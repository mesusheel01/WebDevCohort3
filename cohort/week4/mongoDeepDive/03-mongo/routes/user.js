import express from 'express';
import userMiddleware from '../middleware/user.js';
import { Courses, User } from '../db/index.js';

const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username, password });

    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists!' });
    }

    const newUser = await User.create({ username, password });
    res.json({ msg: 'User created successfully!', user: newUser });
  } catch (error) {
    res.status(500).json({ msg: 'Error creating user!', error: error.message });
  }
});

userRouter.get('/courses', async (req, res) => {
  try {
    const courses = await Courses.find({});
    res.json({ courses });
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching courses!', error: error.message });
  }
});

userRouter.post('/courses/:courseId', userMiddleware, async (req, res) => {
  const { courseId } = req.params;
  const username = req.headers.username;

  try {
    await User.updateOne({ username }, { $push: { purchasedCourses: courseId } });
    res.json({ msg: 'Purchase complete!' });
  } catch (error) {
    res.status(500).json({ msg: 'Error updating courses!', error: error.message });
  }
});

userRouter.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
      // Find the user based on the username from the headers
      const user = await User.findOne({ username: req.headers.username });

      // Check if the user exists and has purchased courses
      if (!user || !user.purchasedCourses || user.purchasedCourses.length === 0) {
        return res.status(404).json({ msg: 'No purchased courses found' });
      }

      // Find the courses whose _id is in the user's purchasedCourses array
      const courses = await Courses.find({
        _id: { "$in": user.purchasedCourses }
      });

      // Respond with the courses
      res.json({
        courses: courses // Directly return the `courses` array
      });
    } catch (error) {
      // Handle errors
      res.status(500).json({ msg: 'Error fetching purchased courses', error: error.message });
    }
  });


export default userRouter;
