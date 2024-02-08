import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  async function fetchPosts(id) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
    );
    const data = await response.json();
    setPosts(data);
  }

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <button onClick={() => fetchPosts(user.id)}>See Posts</button>
              {user.name}
            </li>
          );
        })}
      </ul>
      <div>
        <h2>User's Posts</h2>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <div>title: {post.title}</div>
                <div>body: {post.body}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
