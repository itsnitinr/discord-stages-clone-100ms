const RoleSelect = ({ role, setRole }) => {
  return (
    <select
      type="text"
      className="bg-gray-900 border border-gray-700 rounded p-2 w-full text-center"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="listener">Listener</option>
      <option value="speaker">Speaker</option>
      <option value="moderator">Moderator</option>
    </select>
  );
};

export default RoleSelect;
