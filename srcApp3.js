// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <nav className="flex justify-between bg-indigo-600 text-white p-4 rounded-lg">
          <h1 className="text-xl font-bold">Simple Blog</h1>
          <Link to="/" className="hover:underline">Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// src/Home.js
import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics", summary: "Learn components, props, and hooks." },
  { id: 2, title: "Understanding React Router", summary: "Navigate between pages easily." },
  { id: 3, title: "State Management", summary: "Control data flow with hooks and context." },
];

const Home = () => (
  <div className="mt-6">
    <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
    {posts.map((post) => (
      <div key={post.id} className="bg-white shadow p-4 rounded mb-4">
        <h3 className="text-lg font-bold">{post.title}</h3>
        <p>{post.summary}</p>
        <Link
          to={`/post/${post.id}`}
          className="text-blue-600 hover:underline mt-2 inline-block"
        >
          Read More
        </Link>
      </div>
    ))}
  </div>
);

export default Home;

// src/Post.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const posts = {
  1: { title: "React Basics", content: "React allows you to build UI using components..." },
  2: { title: "Understanding React Router", content: "React Router helps create multi-page SPAs..." },
  3: { title: "State Management", content: "Use useState and useContext to manage app state." },
};

const Post = () => {
  const { id } = useParams();
  const post = posts[id];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/" className="text-blue-600 hover:underline mt-4 block">← Back to Home</Link>
    </div>
  );
};

export default Post;
