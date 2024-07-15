import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const AllChats = () => {
  async function getAllChats() {
    const response = await axios.get(
      "https://devapi.beyondchats.com/api/get_all_chats?page=1"
    );

    return response.data;
  }

  const { data: chats } = useQuery({
    queryKey: ["allChats"],
    queryFn: getAllChats,
  });
  console.log(`🚀 ~ chats:`, chats?.data);

  return (
    <article className="overflow-y-auto mb-2 h-[85vh]">
      {chats?.data?.data?.map((item: any) => (
        <div className="p-2">
          <Link
            className="flex items-center p-2 rounded-xl justify-between hover:bg-gray-200 cursor-pointer"
            to={"/"}
          >
            <div className="w-[20%]">
              <Avatar sx={{ height: 50, width: 50 }} src="" />
            </div>
            <div className="w-[70%]">
              <h1 className="text-[17px] tracking-tight font-semibold">
                {item?.creator?.name ?? "Name not given"}
              </h1>
              <p className="text-[15px]  truncate">{item?.creator?.email}</p>
            </div>
            <h1 className="w-[10%]">83</h1>
          </Link>
        </div>
      ))}
    </article>
  );
};

export default AllChats;
