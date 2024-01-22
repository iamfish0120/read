import React from 'react';
import { observer } from 'mobx-react-lite';
import counterStore from '../store/CounterStore';

const Counter = observer(() => {
  const { count, increment, decrement } = counterStore;

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
});

export default Counter;