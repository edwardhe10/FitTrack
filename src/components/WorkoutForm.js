import React, { useState } from "react";

const WorkoutForm = ({ onAddWorkout }) => {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [setNumber, setSetNumber] = useState("");

  const handleExerciseChange = (event) => {
    setExercise(event.target.value);
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

  const handleAddWorkout = () => {
    // Create a new workout object with the provided details
    const newWorkout = {
      exercise,
      weight,
      reps,
      setNumber,
    };

    // Call the parent function to add the new workout to the list
    onAddWorkout(newWorkout);

    // Clear input fields after adding a workout
    setExercise("");
    setWeight("");
    setReps("");
    setSetNumber("");
  };

  return (
    <div className="add-workout">
      <div className="inputs">
        <input
          type="text"
          placeholder="Exercise Name"
          value={exercise}
          onChange={handleExerciseChange}
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
      <div className="add-workout-button">
        <button onClick={handleAddWorkout}>Add Workout</button>
      </div>
    </div>
  );
};

export default WorkoutForm;
