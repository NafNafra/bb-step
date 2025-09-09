import { useState } from "react";
import axios from "axios";

interface LoginResponse {
  token: string;
  user: {
    email: string;
    phone: string;
  };
}

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, phone: string) => {
    setLoading(true);
    setError(null);
    try {
      if (email == "" && phone == "") {
        return null;
      }
      else {
        // alert(email)
        const res = await axios.post<LoginResponse>(
          import.meta.env.VITE_API_URL + "/user/login",
          { email, phone }
        );
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      }
    } catch (err) {
      setError("Invalid credentials");
      return "Error network";
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
