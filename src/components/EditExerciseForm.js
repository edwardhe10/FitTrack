import React, { useState } from "react";

const EditExerciseForm = ({ exercise, onSave, onCancel }) => {
  const [exerciseName, setExerciseName] = useState(exercise.exerciseName);
  const [weight, setWeight] = useState(exercise.weight);
  const [reps, setReps] = useState(exercise.reps);
  const [setNumber, setSetNumber] = useState(exercise.setNumber);

  const handleSave = () => {
    // Create an updated exercise object with the edited details
    const updatedExercise = {
      ...exercise,
      exerciseName,
      weight,
      reps,
      setNumber,
    };

    onSave(updatedExercise);
  };

  return (
    <div className="edit-exercise-form">
      <h3>Edit Exercise</h3>
      <div className="form-group">
        <label htmlFor="exercise">Exercise Name:</label>
        <input
          type="text"
          id="exercise"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
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

export default EditExerciseForm;
