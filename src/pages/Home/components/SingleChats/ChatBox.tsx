import { Check } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "date-fns";
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
    <aside className="w-full h-auto flex flex-col gap-3 items-end justify-end">
      {chats?.data?.map((item: any, id: number) => (
        <div
          key={id}
          className={`w-full items-end flex ${
            id % 2 !== 0 ? "justify-start" : "justify-end"
          } `}
        >
          <div
            className={`${
              id % 2 !== 0
                ? "bg-white dark:bg-[#212121] text-[#7f6dd2]"
                : "bg-[#eeffde] dark:bg-[#766ac8]"
            }  h-max px-5 py-2 max-w-[60%] w-auto justify-between flex rounded-2xl flex-col items-start`}
          >
            <h1 className="w-full">{item?.message}</h1>
            <p
              className={`text-xs min-w-max flex w-full  justify-end gap-2 items-end text-[#629e61] ${
                id % 2 !== 0 ? "dark:text-gray-400" : "dark:text-white"
              }`}
            >
              {format(new Date(item?.created_at), "p")}
              <Check className="!text-sm" />
            </p>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default ChatBox;
