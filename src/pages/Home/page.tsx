import { Menu, Search } from "@mui/icons-material";
import ToggleButton from "../../components/custom/ToggleButton";
import TabsComponent from "./components/HomeTabs/Tabs";
import SingleChats from "./singlechat";

const HomePage = () => {
  return (
    <section className="h-screen dark:bg-[#212121] dark:text-white   fixed bottom-0 top-0 left-0 right-0 w-full flex ">
      <aside className="w-full lg:w-[25%] h-full border-r">
        {/* App bar & drawer */}
        <nav className=" flex gap-4 items-center p-3 px-4  w-full">
          <div className="flex gap-6 items-center">
            <Menu />
            <ToggleButton />
            {/* <h1 className="text-xl leading-0">Telegram</h1> */}
          </div>

          <div className="rounded-full dark:bg-black bg-gray-100 w-full p-2 flex gap-2">
            <Search className="mt-1" />
            <input
              type="text"
              className="bg-gray-100 border-none outline-none"
            />
          </div>
        </nav>

        {/* Tabs */}
        <TabsComponent />
      </aside>
      <aside className="lg:w-[75%] hidden lg:block">
        <SingleChats />
      </aside>
    </section>
  );
};

export default HomePage;
