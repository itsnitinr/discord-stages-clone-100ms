import { FiMic, FiMicOff } from 'react-icons/fi';

const MicButton = ({ isMicOn, toggleMic }) => {
  return (
    <button onClick={toggleMic} className="bg-red-500 p-3 rounded-full">
      {isMicOn ? (
        <FiMic className="h-5 w-5" />
      ) : (
        <FiMicOff className="h-5 w-5" />
      )}
    </button>
  );
};

export default MicButton;
