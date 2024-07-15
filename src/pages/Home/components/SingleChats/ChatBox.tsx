import { Check } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChatBox = () => {
  const { id } = useParams();
  async function getAllChats() {
    const response = await axios.get(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`
    );

    return response.data;
  }

  const { data: chats } = useQuery({
    queryKey: ["allChats", id],
    queryFn: getAllChats,
  });

  return (
    <aside className="w-full h-auto flex flex-col items-end justify-end">
      {chats?.data?.map((_item: any) => (
        <div className="w-full items-end  flex justify-end">
          <div className="bg-[#eeffde] justify-between items-end flex gap-2 rounded-full p-1 ">
            <h1>hey there</h1>
            <p className="text-xs flex justify-end gap-2 items-end text-[#629e61]">
              5:30 AM <Check className="!text-sm" />
            </p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default ChatBox;
