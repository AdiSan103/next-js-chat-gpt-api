import Image from "next/image";
import backgroundImage from "public/images/bg2.png";
import personImage from "public/images/person.png";
import ChatLeft from "../../src/components/chat/ChatLeft";
import ChatRight from "../../src/components/chat/ChatRight";

interface Props {
  // Define the props for your component here
}
const Index: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="relative flex justify-center items-center bg-black/90 rounded-t-[30px] h-[200px] -z-10">
          <Image
            src={backgroundImage}
            width={385}
            height={80}
            className="absolute"
          />
          <div className="flex gap-3 w-[385px] -mt-20 px-4">
            <Image
              src={personImage}
              width={42}
              height={42}
              className="w-full max-w-[42px] max-h-[42px]"
            />
            <div>
              <h6 className="text-white">Ask Me Anything!</h6>
              <p className="text-white">Online</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-t-[30px] w-[375px] h-full -mt-[100px] z-40 py-9 px-5 overflow-y-scroll max-h-[600px]">
          {/* chat */}
          <div>
            {/* bot */}
            <ChatLeft />
            {/* user */}
            <ChatRight />
            {/* bot */}
            <ChatLeft />
            {/* user */}
            <ChatRight />
            {/* bot */}
            <ChatLeft />
            {/* user */}
            <ChatRight />
            {/* bot */}
            <ChatLeft />
            {/* user */}
            <ChatRight />
          </div>
        </div>
        {/* form input */}
        <div className="bottom-0 w-[375px] fixed px-2 pb-5">
          <input
            type="text"
            className="border border-2 border-gray-100 rounded-full w-full px-4 py-4 shadow-lg transition ease-in-out focus:outline-none focus:border-gray-300 focus:shadow-sm"
            placeholder="Ask Me Anything!"
          />
        </div>
      </div>
    </>
  );
};

export default Index;
