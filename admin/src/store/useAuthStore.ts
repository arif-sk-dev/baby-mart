import api from "@/lib/config";
import { create } from "zustand";
import { persist } from "zustand/middleware"; //save local storage


interface User {
  _id: string,
  name: string,
  email: string,
  avatar: string,
  role: "admin" | "user" | "deliveryman"
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (credentials: {email:string; password: string})=> Promise <void>;
  register: (userData:{
    name: string,
    email: string,
    password: string,
    role: string
  })=> Promise <void>;
  logout: ()=> void;
  checkIsAdmin: ()=> boolean;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: async(credentials)=>{},

      register: async (userData) => {
        try {
          await api.post("/auth/register", userData);
          const res = await api.post("/auth/register", userData);
          const {user, token} = res.data;
          set({user, token, isAuthenticated: true});
        } catch (error) {
          console.log("Registration error:", error);
          throw error;          
        }
      },
      logout: ()=>{},
      checkIsAdmin: ()=> {
        const user = get().user;
        return user?.role === "admin";
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);

export default useAuthStore

