import React, { useState } from "react";

const EditWorkoutForm = ({ workout, onSave, onCancel }) => {
  const [exercise, setExercise] = useState(workout.exercise);
  const [weight, setWeight] = useState(workout.weight);
  const [reps, setReps] = useState(workout.reps);
  const [setNumber, setSetNumber] = useState(workout.setNumber);

  const handleSave = () => {
    // Create an updated workout object with the edited details
    const updatedWorkout = {
      ...workout,
      exercise,
      weight,
      reps,
      setNumber,
    };

    onSave(updatedWorkout);
  };

  return (
    <div className="edit-workout-form">
      <h3>Edit Workout</h3>
      <div className="form-group">
        <label htmlFor="exercise">Exercise Name:</label>
        <input
          type="text"
          id="exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight (lbs):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="reps">Reps:</label>
        <input
          type="number"
          id="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="setNumber">Set Number:</label>
        <input
          type="number"
          id="setNumber"
          value={setNumber}
          onChange={(e) => setSetNumber(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditWorkoutForm;
