import {
  ArrowBack,
  AttachFile,
  MicNone,
  MoreVert,
  Search,
  SentimentSatisfiedAlt,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChatBox from "./components/SingleChats/ChatBox";

const SingleChats = () => {
  const navigate = useNavigate();
  return (
    <section className="flex items-center w-full justify-center background-chat-container">
      {/* Navigation */}
      <nav className="fixed bg-white w-full top-0 shadow-md py-2 px-4">
        <div className="flex items-center justify-between w-full ">
          <div className="flex items-center gap-1 justify-center ">
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBack className="text-gray-500 !text-[26px]" />
            </IconButton>
            <Avatar sx={{ height: 45, width: 45 }} />
            <div className="">
              <h1 className="tracking-tight text-lg !leading-none   font-semibold">
                Ken Keneki
              </h1>
              <p className="leading-0 text-gray-500">bot</p>
            </div>
          </div>
          {/* left side */}

          <div className="flex gap-4">
            <Search className="text-gray-500 !text-[26px]" />
            <MoreVert className="text-gray-500 !text-[26px]" />
          </div>
          {/* Right Side */}
        </div>
      </nav>

      <article className="overflow-y-auto w-full  mb-2 h-[75vh]">
        <aside className=" flex w-full justify-center ">
          {/* Chat Box */}
          <div className="flex w-[60%] items-center justify-center">
            <ChatBox />
          </div>

          {/* Comment Box */}

          <div className="fixed  left-[20%] right-[20%] bottom-6">
            <div className="flex w-full gap-2 items-center">
              <div className="flex w-full items-center justify-between bg-white p-4 rounded-xl">
                {/* Emoji */}
                <SentimentSatisfiedAlt className="text-gray-400 w-[10%]" />

                {/* search */}
                <div className="w-[85%]">
                  <input
                    type="text"
                    className="outline-none border-none"
                    placeholder="Message"
                  />
                </div>

                {/* pin */}
                <AttachFile className="text-gray-400 w-[5%]" />
              </div>

              <IconButton className="!bg-white h-auto !p-4">
                <MicNone className="text-gray-500" />
              </IconButton>
            </div>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default SingleChats;
