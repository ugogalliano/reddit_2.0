import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { LinkIcon, PhotographIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

const PostBox = () => {
  const { data: session } = useSession();
  const [imageBox, setImageBox] = useState<Boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async(data: object) =>{
    
  };

  return (
    <form
      className="stycky top-16 z-50 bg-white  p-3 rounded-md border-gray-300"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center space-x-3">
        <Avatar />

        <input
          disabled={!session}
          className="bg-gray-300 p-2 rounded-lg flex-1 pl-5 outline-none"
          type={"text"}
          {...register("postTitle", { required: true })}
          placeholder={session ? "Create a post, insert title..." : "Sign in "}
        />

        <PhotographIcon
          onClick={() => setImageBox(!imageBox)}
          className={`icon text-gray-300 ${imageBox && "text-blue-300"}`}
        />
        <LinkIcon className="icon icon text-gray-300" />
      </div>

      {watch("postTitle") && (
        <div>
          {/* Body */}
          <div className="mt-2 flex-1 bg-blue-50 p-2 outline-none">
            <p>Body</p>
            <input
              type="text"
              {...register("postBody")}
              placeholder="Text (optional)"
              className=" mt-2 rounded-lg outline-none p-4 w-full"
            />
          </div>

          <div>
            <div className="mt-2 flex-1 bg-blue-50 p-2 outline-none">
              <p>Subreddit:</p>
              <input
                type="text"
                {...register("subreddit", { required: "true" })}
                placeholder="Text"
                className=" mt-2 rounded-lg outline-none p-4 w-full"
              />
            </div>
          </div>

          {imageBox && (
            <div>
              <div className="mt-2 flex-1 bg-blue-50 p-2 outline-none">
                <p>Image Url:</p>
                <input
                  type="text"
                  {...register("postImage")}
                  placeholder="Optional..."
                  className=" mt-2 rounded-lg outline-none p-4 w-full"
                />
              </div>
            </div>
          )}

          {watch("postTitle") && (
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="bg-blue-300 text-gray-800  font-semibold p-2 min-w-[30%] rounded-md"
              >
                Create a post
              </button>
            </div>
          )}

          {/**Errors **/}
          {Object.keys(errors).length > 0 && (
            <div>
              {
                <div className="space-y-2 text-red-500 ">
                  {errors.postTitle?.type === "required" && (
                    <p>A Post Title is required</p>
                  )}
                  {errors.subreddit?.type === "required" && (
                    <p>A Subreddit is required</p>
                  )}
                </div>
              }
            </div>
          )}
        </div>
      )}
    </form>
  );
};

export default PostBox;
