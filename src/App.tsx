import React from 'react'
import './App.module.css'
import { Units } from './components/Units/Units'

export const App = () => {
  return (
    <div className="wrapper">
      <div>
        <h4>Title</h4>
        <div>
          <Units />
        </div>
      </div>
    </div>
  )
}
