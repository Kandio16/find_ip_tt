import React from 'react'
import './DetailsList.css'

export const DetailsList = ({details}) => {

  return (
    details.error
      ? <p className="message">Something went wrong 😞. Please try again.</p>
      : (Object.keys(details).map((key) => {
        if (typeof details[key] === 'string') {
          return (
            <li key={key}>
              <span className={`name name-${typeof details[key]}` }>{key}:</span>
              <span className={`text string`}>"{details[key]}"</span> 
          </li>
          )}
        if (typeof details[key] === 'number') {
          return (
            <li key={key}>
              <span className={`name name-number`}>{key}:</span>
              <span className={`text number`}>{details[key]}</span> 
          </li>
          )}
        if (typeof details[key] === 'boolean') {
          let boolToString = details[key] + "";
          return (
          <li key={key}>
            <span className={`name name-boolean`}>{key}:</span>
            <span className={`text boolean`}>{boolToString}</span> 
        </li>
        )}
        return null;
      }))
      
  )
}
