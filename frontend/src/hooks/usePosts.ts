import { useState, useEffect } from "react";
import { Post, CreatePostData, UpdatePostData } from "@/types";
import { supabase } from "@/lib/api";
import { toast } from "sonner";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast.error("Failed to fetch posts");
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData: CreatePostData) => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .insert([postData])
        .select()
        .single();
      if (error) throw error;
      setPosts((prev) => [data, ...prev]);
      toast.success("Post created successfully!");
      return data;
    } catch (error: any) {
      const message = error.message || "Failed to create post";
      toast.error(message);
      throw error;
    }
  };

  const updatePost = async (id: number, updateData: UpdatePostData) => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .update(updateData)
        .eq("id", id)
        .select()
        .single();
      if (error) throw error;
      setPosts((prev) => prev.map((post) => (post.id === id ? data : post)));
      toast.success("Post updated successfully!");
      return data;
    } catch (error: any) {
      const message = error.message || "Failed to update post";
      toast.error(message);
      throw error;
    }
  };

  const deletePost = async (id: number) => {
    try {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (error) throw error;
      setPosts((prev) => prev.filter((post) => post.id !== id));
      toast.success("Post deleted successfully!");
    } catch (error: any) {
      const message = error.message || "Failed to delete post";
      toast.error(message);
      throw error;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  };
};
