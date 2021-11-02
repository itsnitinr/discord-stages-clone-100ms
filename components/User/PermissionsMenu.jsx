import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  useHMSStore,
  useHMSActions,
  selectLocalPeer,
} from '@100mslive/hms-video-react';

const PermissionsMenu = ({ audioTrack, id }) => {
  const hmsActions = useHMSActions();

  const mutePeer = () => {
    hmsActions.setRemoteTrackEnabled(audioTrack, false);
  };

  const changeRole = (role) => {
    hmsActions.changeRole(id, role, true);
  };

  const localPeer = useHMSStore(selectLocalPeer);

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
