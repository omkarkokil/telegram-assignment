import axios from "axios";
import { create } from "zustand";

interface ApiState {
  getAllChats: () => Promise<any>;
}

const useApi = create<ApiState>((set) => ({
  getAllChats: async () => {
    try {
      const response = await axios.get(
        "https://devapi.beyondchats.com/api/get_all_chats?page=1"
      );

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useApi;
