import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
        <div className="w-full mb-4 flex justify-center">
          <img
            src={featuredImage && service.getView(featuredImage)}
            alt={title}
            className="rounded-lg object-cover max-h-60 w-full border border-gray-100"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-200">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default PostCard;
