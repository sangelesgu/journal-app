import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://www.w3schools.com/w3css/img_forest.jpg)'
        }}
        >
      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">
          Un nuevo día
        </p>
        <p className="journal__entry-title">
          Todo diferente para que puedas salir.
        </p>
      </div>

      <div className="journal__entrye-date-box">
        <span> Monday </span>
        <h4> 28 </h4>
      </div>
    </div>
  )
}
