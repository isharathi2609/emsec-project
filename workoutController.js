// In src/controllers/workoutController.js

const createNewWorkout = (req, res) => {
  const { body } = req;
  // *** ADD ***
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  // *** ADD ***
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  // *** ADD ***
  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  // *** ADD ***
  res.status(201).send({ status: "OK", data: createdWorkout });
};

