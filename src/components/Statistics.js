import React from "react";

const Statistics = ({ workouts }) => {
  // Calculate total workouts and total duration
  const totalWorkouts = workouts.length;
  const totalWeightsLifted = workouts.reduce(
    (total, workout) =>
      total +
      parseInt(workout.weight, 10) *
        parseInt(workout.reps, 10),
    0
  );

  return (
    <div className="statistics">
      <h2>Statistics</h2>
      <p>Total Workouts: {totalWorkouts}</p>
      <p>Total Weights Lifted: {totalWeightsLifted} lbs</p>
      {/* Add more statistics here */}
    </div>
  );
};

export default Statistics;
