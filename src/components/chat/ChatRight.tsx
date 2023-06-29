interface Props {
  // Define the props for your component here
}
const Index: React.FC<Props> = ({}) => {
  return (
    <>
      {/* user */}
      <div className="flex flex-col items-end gap-0.5 py-1.5">
        <span className="text-base mb-2.5 px-5 py-2.5 rounded-3xl bg-orange-100 max-w-[250px]">
          Can I also get my cousin along? Will that be okay?
        </span>
        <p className="text-xs text-gray-400">12:15 PM</p>
      </div>
    </>
  );
};

export default Index;
