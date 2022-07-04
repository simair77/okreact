import axios from 'axios';
import React from 'react';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/3';

function Help() {
  const [post, setPost] = React.useState({});
  const doIt = async function () {
    try {
      const response = await axios.get(baseURL);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    doIt();
  }, []);

  return (
    <>
      <h1>Help</h1>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </>
  );
}

export default Help; 
