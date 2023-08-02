import React from "react";

const History = ({ savedWorkouts }) => {
  return (
    <div className="workout-history">
      <h2>Workout History</h2>
      {savedWorkouts.map((workouts, index) => (
        <div key={index}>
          <h3>
            {new Date(Date.now()).toLocaleString("en-CA", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h3>
          {workouts.map((workout, i) => (
            <div key={i}>
              <strong>{workout.exercise}</strong> Set #{workout.setNumber} -
              Weight: {workout.weight} lbs - Reps: {workout.reps}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default History;
