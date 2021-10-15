import { GoBroadcast } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';

const RoomInfo = ({ count }) => {
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-lg flex items-center">
        <GoBroadcast className="mr-2 h-6 w-6" />
        Stages Clone
      </h3>
      <h3 className="font-semibold text-md flex items-center">
        <FiUsers className="mr-2 h-5 w-5" />
        {count}
      </h3>
    </div>
  );
};

export default RoomInfo;
