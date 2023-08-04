import React from "react";

const History = ({ savedWorkouts, onDeleteWorkout }) => {
  return (
    <div className="workout-history">
      <h2>Workout History</h2>
      {savedWorkouts.map((savedWorkoutData, index) => (
        <div key={index}>
          <h3>{savedWorkoutData.date}</h3>
          <button onClick={() => onDeleteWorkout(index)}>Delete</button>
          {savedWorkoutData.exercises.map((exercise, i) => (
            <div key={i}>
              <strong>{exercise.exerciseName}</strong> Set #{exercise.setNumber}{" "}
              - {exercise.weight} lbs x {exercise.reps}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default History;
