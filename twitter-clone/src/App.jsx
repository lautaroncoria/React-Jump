import React from 'react';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Sugerencias from './components/Sugerencias';

const App = () => {
  return (
    <div className='flex min-h-screen'>
      <Menu />
      <Dashboard />
      <Sugerencias />
    </div>
  );
}

export default App;
