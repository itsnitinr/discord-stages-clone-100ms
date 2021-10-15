const NameInput = ({ name, setName }) => {
  return (
    <input
      type="text"
      className="bg-gray-900 border border-gray-700 rounded p-2 w-full text-center"
      placeholder="Enter username"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default NameInput;
