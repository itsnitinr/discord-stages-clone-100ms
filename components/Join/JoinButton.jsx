const JoinButton = ({ joinRoom }) => {
  return (
    <button onClick={joinRoom} className="bg-indigo-500 w-full p-1 rounded">
      Join Room
    </button>
  );
};

export default JoinButton;
