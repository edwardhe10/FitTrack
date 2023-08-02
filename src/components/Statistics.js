import React from "react";

const Statistics = ({ savedWorkouts }) => {
  const totalWorkoutsDone = savedWorkouts.length;

  // loop through each savedWorkoutData in savedWorkouts array
  // loop through exercises array and calculate within each savedWorkoutData
  const totalWeightsLifted = savedWorkouts.reduce((total, savedWorkoutData) => {
    return (
      total +
      savedWorkoutData.exercises.reduce(
        (exerciseTotal, exercise) =>
          exerciseTotal +
          parseInt(exercise.weight, 10) * parseInt(exercise.reps, 10),
        0
      )
    );
  }, 0);

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Total Workouts Done: {totalWorkoutsDone}</p>
      <p>Total Weights Lifted: {totalWeightsLifted} lbs</p>
      {/* Add more statistics here */}
    </div>
  );
};

export default Statistics;
