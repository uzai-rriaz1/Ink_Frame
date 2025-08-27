import React, { useCallback, useEffect } from "react";
import service from "../../appwrite/config";
import { Button, Input, RTE, Select } from "../index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.authSlice.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await service.fileUpload(data.image[0])
        : null;
      if (file) {
        service.deleteFile(post.featuredImage);
      }
      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
      // };
    } else {
      const file = await service.fileUpload(data.image[0]);
      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    return "";
  }, []);
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap gap-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"
    >
      <div className="w-full lg:w-2/3 space-y-6">
        <Input
          label="Title :"
          placeholder="Title"
          className="w-full"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="w-full"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className="w-full lg:w-1/3 space-y-6">
        <Input
          label="Featured Image :"
          type="file"
          className="w-full"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {post && (
          <div className="w-full">
            <img
              src={service.getView(post.featuredImage)}
              alt={post.title}
              className="rounded-lg shadow-sm border border-gray-300"
            />
          </div>
        )}

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="w-full"
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          bgColor={
            post
              ? "bg-teal-600 hover:bg-teal-700"
              : "bg-blue-600 hover:bg-blue-700"
          }
          className="w-full text-white font-semibold py-2 rounded-md transition-colors duration-200"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
