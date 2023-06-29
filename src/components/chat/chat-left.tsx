interface Props {
  // Define the props for your component here
}
const Index: React.FC<Props> = ({}) => {
  return (
    <>
      {/* bot */}
      <div className="flex flex-col gap-0.5 py-1.5">
        <span className="text-base mb-2.5 px-5 py-2.5 rounded-3xl bg-yellow-100 max-w-[250px]">
          Hey! How have you been?
        </span>
        <p className="text-xs text-gray-400">12:15 PM</p>
      </div>
    </>
  );
};

export default Index;
