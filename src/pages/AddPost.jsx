import React from "react";
import { Container, PostForm } from "../components/index";

function AddPost() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <Container>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create a New Post
        </h1>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
