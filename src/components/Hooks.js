import React, {useState} from 'react';

const Hooks = () => {
    const [count, setCount] = useState(10);

  return (
    <div>
          <h3>Hey, there I'm lerning hooks</h3>
          <p>{count}</p>
          <button className="btn btn-success mr-2" onClick={() => setCount(count+1)}>Increment</button>
          <button className="btn btn-info mr-2" onClick={() => setCount(count-1)}>Decrement</button>
          <button className="btn btn-danger" onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Hooks;
