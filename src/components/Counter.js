import React, {useState, useEffect} from 'react'

const Counter = () => {
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Counter upated: ${count}`);
    }, [count]);

    const incrementCount = () => {
        setCount(count+1)
    }

    const decrementCount = () => {
        setCount(count - 1);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card text-center">
                        <div className="card-header">
                            <h4 className="card-title">Counter</h4>
                        </div>
                        <div className="card-body">
                            <p className="card-text">This is counter body</p>
                            <button onClick={() => setCount(1)} className="btn btn-warning text-light btn-sm mr-2">~/</button>
                            <button onClick={incrementCount} className="btn btn-success btn-sm">+</button>
                            <span className="bg-info btn-sm text-light ml-2 mr-2">{count}</span>
                            <button onClick={decrementCount} className="btn btn-success btn-sm mr-2">-</button>
                            <button onClick={() => setCount(0)} className="btn btn-danger btn-sm">#0</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter;
