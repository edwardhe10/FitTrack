import React from "react";

const Achievements = ({ savedWorkouts }) => {
  const tenWorkoutsCompleted = savedWorkouts.length >= 10;

  return (
    <div className="achievements">
      <h2>Achievements</h2>
      {tenWorkoutsCompleted ? (
        <p>Congratulations! You've completed 10 or more workouts!</p>
      ) : (
        <p>Keep going! Work towards completing 10 workouts.</p>
      )}
    </div>
  );
};

export default Achievements;
