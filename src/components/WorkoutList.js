import React from "react";

const WorkoutList = ({ workouts, onEditWorkout, onDeleteWorkout }) => {
  return (
    <div className="workout-list">
      <h2>Logged Exercises</h2>
      {workouts.map((workout, index) => (
        <div key={index} className="workout-item">
          <strong>{workout.exercise}</strong> Set #{workout.setNumber} - Weight:{" "}
          {workout.weight} lbs - Reps: {workout.reps}
          <div className="buttons">
            <button
              className="edit-button"
              onClick={() => onEditWorkout(index)}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => onDeleteWorkout(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
