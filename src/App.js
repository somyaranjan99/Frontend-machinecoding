import "./App.css";
import Tabs from "./Tabs";
import Counter from './Counter';
import {useDispatch} from 'react-redux';
export default function App() {
  const dispatch=useDispatch();
  return (
    <main>
      <Tabs>
        <article title="home">Home tab content home</article>
        <article title="about">About tab content About</article>
        <article title="contact">contact tab content contact</article>
      </Tabs>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
      <Counter />
      <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </main>
  );
}

