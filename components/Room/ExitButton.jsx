import { BiExit } from 'react-icons/bi';

const ExitButton = ({ exitRoom }) => {
  return (
    <button
      onClick={exitRoom}
      className="bg-red-500 px-4 py-2 rounded-full flex items-center gap-x-2"
    >
      Exit Quietly
      <BiExit className="h-5 w-5" />
    </button>
  );
};

export default ExitButton;
