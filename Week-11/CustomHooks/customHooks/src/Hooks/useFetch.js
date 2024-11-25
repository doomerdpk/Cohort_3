import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url) {
  const [post, setPost] = useState({});
  const [isLoading, setisLoading] = useState(true);

  async function getPosts() {
    setisLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setPost(json);
    setisLoading(false);
  }

  // You cannnot make first parameter of useEffect Async
  useEffect(() => {
    getPosts();
  }, [url]);

  useEffect(() => {
    setInterval(getPosts, 10 * 1000);
  }, []);

  return {
    post,
    isLoading,
  };
}
