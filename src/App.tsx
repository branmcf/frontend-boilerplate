import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'


import LandingPage from './pages/LandingPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

const App = () => {

  return(
    <>
      <Routes>
        <Route 
          path='/' 
          element={
            <LandingPage/>
          } 
        />

        <Route 
          path='/terms' 
          element={
            <TermsPage 
            />
          } 
        />

        <Route 
          path='/privacy' 
          element={
            <PrivacyPage 
            />
          } 
        />

      </Routes>
    </>
  )
}

export default App;