import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => {
    setValue(prev => prev + 1);
  };

  console.log('This run all the time');

  useEffect(() => {
    console.log('This run once');
  }, []);

  return (
    <div>
      <h1 className={styles.title}>
        {value}
      </h1>
      <button onClick={onClick}>Value up</button>
    </div>
  );
}

export default App;
