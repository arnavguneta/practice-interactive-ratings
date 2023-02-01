import React from 'react';

import styles from './App.module.css';
import { Ratings } from './components/Ratings';

function App() {
  return (
    <div className={styles.app}>
      <Ratings />
    </div>
  );
}

export default App;
