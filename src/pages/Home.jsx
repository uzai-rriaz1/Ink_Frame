import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Container, PostCard } from "../components/index";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 hover:text-teal-600 transition-colors duration-200">
              Login to read posts
            </h1>
            <h1 className="text-2xl font-bold text-gray-800 hover:text-teal-600 transition-colors duration-200">
              Sign up if you dont have an account
            </h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <Container>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Latest Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
