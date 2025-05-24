import axios from 'axios';
import { create } from 'zustand';
import { User } from './types';



//User Store
export const useUserStore = create((set,get)=>({
    user:{},
    isloading:false,
    error:null,
    toast:null,
    userData: {},


//updating user data
    updateUserData: (newData:User) =>
        set((state) => ({
            userData: { ...state.userData, ...newData },
        })),



//Creating a new user
    createUser: async () => {
        const { userData }: { userData?: Partial<User> } = get();
        set({ isloading: true });
        try {
            const response = await axios.post('/pharmacy/auth/register', userData);
            set({ user: response.data, isloading: false ,});
            console.log(userData)
        } catch (error) {
            set({ error, isloading: false });
            console.log(userData)
        }
    },


    //logging in a user
    loginUser: async (email: string, password: string) => {
        set({ isloading: true });
        try {
            const response = await axios.post('/pharmacy/auth/login', { email, password });
            set({ user: response.data, isloading: false });
        } catch (error) {
            set({ error, isloading: false });
        }
    },

    //Verification email
    sendVerificationEmail: async (email: string) => {
        set({ isloading: true });
        try {
            const response = await axios.post('/pharmacy/auth/verify-email', { email });
            set({ user: response.data, isloading: false });
        } catch (error) {
            set({ error, isloading: false });
        }
    },

    //Verifying the email







}))