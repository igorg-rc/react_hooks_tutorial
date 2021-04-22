import React from 'react'

import { Alert } from "./components/alert/Alert";
import { AlertProvider } from './components/alert/AlertContext';
import { Main } from "./components/alert/Main";

function App() {
 
  return (
    <AlertProvider value={alert}>
      <div className="container pt-3">
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  )
}

export default App