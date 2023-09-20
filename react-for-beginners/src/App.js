import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue(prev => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);

  console.log('This run all the time');

  useEffect(() => {
    console.log('This run once');
  }, []);
  useEffect(() => {
    console.log('Search for ', keyword);
  }, [keyword])
  useEffect(() => {
    console.log('count: ', value);
  }, [value]);
  useEffect(() => {
    console.log('change keyword or counter')
  }, [keyword, value]);
  
  return (
    <div>
      <input onChange={onChange}></input>
      <h1 className={styles.title}>
        {value}
      </h1>
      <button onClick={onClick}>Value up</button>
    </div>
  );
}

export default App;
