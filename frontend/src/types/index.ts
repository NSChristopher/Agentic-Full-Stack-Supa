export interface User {
  id: number;
  email: string;
  username: string;
  createdAt?: string;
}

export interface Post {
  id: number;
  title: string;
  content?: string;
  published: boolean;
  author_id: string;
  author?: User;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  message: string;
  user: User;
}

export interface CreatePostData {
  title: string;
  content?: string;
  published?: boolean;
  author_id?: string;
}

export interface UpdatePostData {
  title?: string;
  content?: string;
  published?: boolean;
  author_id?: string;
}