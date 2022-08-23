import asyncHandler from "express-async-handler";
import Course from "../../models/course.js";

export const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    res.status(400);
    throw new Error("Course not found");
  }

  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    { ...req.body, courseImage: req.file.path },
    { new: true }
  );
  res.status(200).json(updatedCourse);
});
