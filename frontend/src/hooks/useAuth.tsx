import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Redefine User type for AuthContext to match Supabase (id as string)
type AuthUser = {
  id: string;
  email: string;
  username: string;
  createdAt?: string;
};
import { supabase } from "@/lib/api";
import { toast } from "sonner";

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    username: string,
    password: string
  ) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email || "",
          username: session.user.user_metadata?.username || "",
          createdAt: session.user.created_at,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || "",
            username: session.user.user_metadata?.username || "",
            createdAt: session.user.created_at,
          });
        } else {
          setUser(null);
        }
      }
    );
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email || "",
          username: data.user.user_metadata?.username || "",
          createdAt: data.user.created_at,
        });
      }
      toast.success("Login successful!");
    } catch (error: any) {
      const message = error.message || "Login failed";
      toast.error(message);
      throw error;
    }
  };

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } },
      });
      if (error) throw error;
      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email || "",
          username: data.user.user_metadata?.username || "",
          createdAt: data.user.created_at,
        });
      }
      toast.success(
        "Registration successful! Please check your email to confirm your account."
      );
    } catch (error: any) {
      const message = error.message || "Registration failed";
      toast.error(message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      toast.success("Logged out successfully");
    } catch (error: any) {
      toast.error("Logout failed");
      throw error;
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
