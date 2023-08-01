import React from "react";

const Achievements = ({ workouts }) => {
  // Calculate and determine if the user achieved any milestones
  const achievedMilestone = workouts.length >= 10;

  return (
    <div className="achievements">
      <h2>Achievements</h2>
      {achievedMilestone ? (
        <p>Congratulations! You've completed 10 or more workouts!</p>
      ) : (
        <p>Keep going! Work towards achieving 10 workouts.</p>
      )}
    </div>
  );
};

export default Achievements;
