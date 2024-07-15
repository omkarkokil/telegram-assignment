import { Check } from "@mui/icons-material";

const ChatBox = () => {
  return (
    <aside className="w-full h-auto flex flex-col items-end justify-end">
      <div className="w-full items-end  flex justify-end">
        <div className="bg-[#eeffde] justify-between items-end flex gap-2 rounded-full p-1 ">
          <h1>hey there</h1>
          <p className="text-xs flex justify-end gap-2 items-end text-[#629e61]">
            5:30 AM <Check className="!text-sm" />
          </p>
        </div>
      </div>
    </aside>
  );
};

export default ChatBox;
