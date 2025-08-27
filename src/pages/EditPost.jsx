import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components/index";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <Container>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Post
        </h1>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
