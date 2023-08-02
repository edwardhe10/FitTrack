import React from "react";

const ExerciseList = ({ exercises, onEditExercise, onDeleteExercise }) => {
  return (
    <div className="exercise-list">
      <h2>Logged Exercises</h2>
      {exercises.map((exercise, index) => (
        <div key={index} className="exercise-item">
          <strong>{exercise.exerciseName}</strong> Set #{exercise.setNumber} - Weight:{" "}
          {exercise.weight} lbs - Reps: {exercise.reps}
          <div className="buttons">
            <button
              className="edit-button"
              onClick={() => onEditExercise(index)}
            >
              Edit
            </button>
            <button
              className="delete-button"
              onClick={() => onDeleteExercise(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
