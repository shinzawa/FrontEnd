"use client";

import dynamic from "next/dynamic";

const Comments = dynamic(() => import("./Comments"), {
  loading: () => <p>Loading comments...</p>,
  ssr: false,
});

export default function CommentsWrapper() {
  return <Comments />;
}
