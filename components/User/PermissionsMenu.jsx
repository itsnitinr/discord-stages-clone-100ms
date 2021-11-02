import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const PermissionsMenu = ({ audioTrack, id }) => {
  const mutePeer = () => {};

  const changeRole = (role) => {};

  const localPeer = { name: 'Test', roleName: 'moderator' };

  const [showMenu, setShowMenu] = useState(false);

  const btnClass = 'w-full text-sm font-semibold hover:text-purple-800 p-1.5';

  const isModerator = localPeer.roleName === 'moderator';

  if (isModerator) {
    return (
      <div className="absolute right-1 top-1 z-50">
        <AiOutlineMenu
          className="ml-auto"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="mt-2 bg-white text-black py-2 rounded-md">
            <button className={btnClass} onClick={() => mutePeer()}>
              Mute
            </button>
            <button className={btnClass} onClick={() => changeRole('listener')}>
              Make Listener
            </button>
            <button className={btnClass} onClick={() => changeRole('speaker')}>
              Make Speaker
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default PermissionsMenu;
