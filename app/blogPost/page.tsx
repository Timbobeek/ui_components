"use client";

import Link from "next/link";
import { useState } from "react";
import { MoveLeft } from "lucide-react";

type InputProps = {
  title: string;
  description: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
};

type Post = {
  title: string;
  description: string;
};

type PostDisplayProps = {
  posts: Post[];
  handleDelete: (index: number) => void;
};

function Input({ title, description, setTitle, setDescription }: InputProps) {
  return (
    <div className="flex flex-col">
      <input
        className="m-2 p-3"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="m-2 p-3"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}

function PostDisplay({ posts, handleDelete }: PostDisplayProps) {
  return (
    <div className="">
      {posts.map((post, index) => {
        return (
          <div
            key={index}
            className="flex flex-col bg-yellow-300 text-black p-10 m-3"
          >
            <h3 className="text-xl">{post.title}</h3>
            <p className="m-3">{post.description}</p>
            <button
              className="bg-red-500 p-3 hover:bg-red-700"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default function BlogPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    if (!title || !description) return;
    setPosts([...posts, { title, description }]);
    setTitle("");
    setDescription("");
  };

  const handleDelete = (indexToDelete: number) => {
    setPosts(posts.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href="/">
        <MoveLeft className="m-5" />
      </Link>
      <header className="text-5xl text-rose-200 mt-5">Blog Post</header>

      <div className="flex flex-col items-center m-5">
        <div className="flex flex-col items-center">
          <Input
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
          />
          <button
            className="bg-green-500 p-3 m-3 hover:bg-green-700"
            onClick={handleSubmit}
          >
            Create Post
          </button>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl">Posts</p>
          <PostDisplay posts={posts} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}
