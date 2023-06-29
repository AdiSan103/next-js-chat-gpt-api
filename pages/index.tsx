import Image from "next/image";
import backgroundImage from "public/images/bg.png";
import peopleImage from "public/images/people.svg";
import iconSecurity from "public/images/icon-security.svg";
import Link from "next/link";

interface Props {
  // Define the props for your component here
}
const Index: React.FC<Props> = ({}) => {
  return (
    <div className="bg-black h-full min-h-screen rounded-[40px]">
      <div className="relative flex justify-center bg-yellow-300 rounded-t-[30px]">
        <Image src={backgroundImage} width={385} height={100} />
        <Image src={peopleImage} width={360} className="absolute bottom-0" />
      </div>
      <div className="bg-black h-full px-8 pt-10">
        <h1 className="text-4xl text-white font-bold">
          Stay connected with your friends and family
        </h1>
        <div className="mt-4 flex gap-2.5 mb-12">
          <Image src={iconSecurity} width={24} height={24} />
          <p className="text-base text-white font-bold">
            Secure, private messaging
          </p>
        </div>
        <Link
          href={"/chat"}
          className="text-base py-6 px-[110px] rounded-full bg-white font-bold transition border hover:border-white hover:bg-black hover:text-white"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Index;
