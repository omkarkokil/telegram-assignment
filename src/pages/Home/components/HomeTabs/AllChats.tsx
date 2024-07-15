import { Avatar } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AllChats = () => {
  // get current page path
  const { id } = useParams();
  console.log(`🚀 ~ id:`, id);

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

  return (
    <article className="overflow-y-auto mb-2 h-[85vh]">
      {chats?.data?.data?.map((item: any) => (
        <div key={item.id} className="p-2">
          <Link
            className={`flex items-center gap-2 p-2 rounded-xl justify-between hover:bg-gray-200 dark:hover:bg-neutral-700 cursor-pointer ${
              item.id === Number(id)
                ? "!bg-blue-500 text-white dark:!bg-[#766ac8]"
                : "bg-transparent"
            }`}
            to={
              window.innerWidth < 768
                ? `/chats-full-view/${item.id}`
                : `/chats/${item.id}`
            }
          >
            <div className="w-max">
              <Avatar sx={{ height: 50, width: 50 }} src="" />
            </div>
            <div className="w-[70%]">
              <h1 className="text-[17px] tracking-tight font-semibold">
                {item?.creator?.name ?? "Name not given"}
              </h1>
              <p className="text-[15px]  truncate">{item?.creator?.email}</p>
            </div>
            <h1 className="w-6 h-6 text-xs bg-green-600 rounded-full flex justify-center items-center text-white ">
              83
            </h1>
          </Link>
        </div>
      ))}
    </article>
  );
};

export default AllChats;
