import styles from './App.module.css';
import { useEffect, useState } from 'react';

function Hello() {
  const cleanUp = () => {
    console.log("Destoryed");
  }
  useEffect(() => {
    console.log("Created");
    return cleanUp;
  }, [])
  return <h1 className={styles.title}>Hello!!</h1>;
}

function App() {
  const [hideFlag, setHideFlag] = useState(false);
  const onClick = () => setHideFlag(prev => !prev);

  return (
    <div>
      <button onClick={onClick}>{hideFlag ? "show" : "hide"}</button>
      {hideFlag ? null : <Hello />}
    </div>
  );
}

export default App;
