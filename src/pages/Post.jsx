import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.authSlice.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Container>
        <div className="w-full mb-8 rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white">
          {post.featuredImage && post.featuredImage.trim() !== "" && (
            <img
              src={service.getView(post.featuredImage)}
              alt={post.title}
              className="w-full h-auto object-cover rounded-t-xl"
            />
          )}

          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>

              {isAuthor && (
                <div className="flex gap-3">
                  <Link to={`/edit-post/${post.$id}`}>
                    <Button
                      bgColor="bg-teal-600 hover:bg-teal-700"
                      className="text-white"
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button
                    bgColor="bg-red-600 hover:bg-red-700"
                    className="text-white"
                    onClick={deletePost}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-800 prose-img:rounded-lg prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline">
              {parse(post.content)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
