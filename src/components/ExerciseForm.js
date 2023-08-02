import React, { useState } from "react";

const ExerciseForm = ({ onAddExercise }) => {
  const [exerciseName, setExerciseName] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [setNumber, setSetNumber] = useState("");

  const handleExerciseNameChange = (event) => {
    setExerciseName(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  const handleSetNumberChange = (event) => {
    setSetNumber(event.target.value);
  };

  const handleAddExercise = (event) => {
    event.preventDefault();

    if (!exerciseName) {
      alert("Please enter an exercise name.");
      return;
    } else if (!weight) {
      alert("Please enter a weight (lbs).");
      return;
    } else if (!reps) {
      alert("Please enter the number of reps.");
      return;
    } else if (!setNumber) {
      alert("Please enter the set number.");
      return;
    }

    // Create a new exercise object with the provided details
    const newExercise = {
      exerciseName,
      weight,
      reps,
      setNumber,
    };

    onAddExercise(newExercise);

    setExerciseName("");
    setWeight("");
    setReps("");
    setSetNumber("");
  };

  return (
    <div className="add-exercise">
      <div className="inputs">
        <input
          type="text"
          placeholder="Exercise Name"
          value={exerciseName}
          onChange={handleExerciseNameChange}
        />
        <input
          type="number"
          placeholder="Weight (lbs)"
          value={weight}
          onChange={handleWeightChange}
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={handleRepsChange}
        />
        <input
          type="number"
          placeholder="Set Number"
          value={setNumber}
          onChange={handleSetNumberChange}
        />
      </div>
      <div className="add-exercise-button">
        <button onClick={handleAddExercise}>Add Exercise</button>
      </div>
    </div>
  );
};

export default ExerciseForm;
