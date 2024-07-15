import SingleChats from "../Home/singlechat";

const ChatPage = () => {
  return (
    <section className="h-screen fixed bottom-0 top-0 left-0 right-0 w-full flex ">
      <aside className="w-full">
        <SingleChats />
      </aside>
    </section>
  );
};

export default ChatPage;
