import React, { useEffect, useState } from 'react'
import './App.css'
import { Chart } from './components'

const API_URL = 'http://localhost:4000/results'

const App = () => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const getResults = () => {
      fetch(API_URL)
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('something went wrong')
          }
        })
        .then((results) =>
          setResults(results.filter((result) => result.name === 'Python')),
        )
    }
    getResults()
    return () => {
      console.log('%cUnmount', 'color:red;font-size:30px;')
    }
  }, [])

  return (
    <div className="App" style={{ marginLeft: 70 }}>
      <Chart data={results} />
    </div>
  )
}

export default App
