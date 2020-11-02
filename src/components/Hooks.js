import React, {useState, useEffect} from 'react';

const Hooks = () => {
    const [age, setAge] = useState(25);
    const [post, setPost] = useState({});

    useEffect(() => {
        console.log(`Age upated: ${age}`);
        document.title = `Age upated: ${age}`
    }, [age]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(error => console.log(error))
    }, [])

  return (
    <div>
          <h3>Hey, there I'm lerning hooks</h3>
          <hr />
          <h2>My age is {age}</h2>
          <button className="btn btn-success btn-sm mr-2" onClick={() => setAge(age + 1)}>Add Age</button>
          <hr />
          {Object.keys(post).length > 0 && (
              <>
                  <h3>Title: {post.title}</h3>
                  <p>Body: {post.body}</p>
              </>
          )}
    </div>
  )
}

export default Hooks;
