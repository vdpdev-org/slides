import React from 'react'
import './App.module.css'
import { Unit } from './components/Unit/Unit'

export const App = () => {
  return (
    <div className="wrapper">
      <div>
        <h4>Title</h4>
        <div>
          <Unit iconName="face" title="Hi" description="description" />
          <Unit iconName="face" title="Hi" description="description" />
          <Unit iconName="face" title="Hi" description="description" />
        </div>
      </div>
    </div>
  )
}
