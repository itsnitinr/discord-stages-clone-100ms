import Avatar from 'boring-avatars';
import { FiMic, FiMicOff } from 'react-icons/fi';
import {
  useHMSStore,
  selectPeerAudioByID,
  selectIsPeerAudioEnabled,
} from '@100mslive/hms-video-react';

import PermissionsMenu from './PermissionsMenu';

const SpeakerTile = ({ peer }) => {
  const isSpeaking = useHMSStore(selectPeerAudioByID(peer.id)) > 0;
  const isMicOn = useHMSStore(selectIsPeerAudioEnabled(peer.id));

  return (
    <div className="relative bg-secondary px-12 py-6 rounded-lg border border-purple-500">
      <PermissionsMenu id={peer.id} audioTrack={peer.audioTrack} />
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <div
          className={
            isSpeaking
              ? 'ring rounded-full transition ring-3 ring-green-600 p-0.5'
              : 'p-0.5'
          }
        >
          <Avatar name={peer.name} size="60" />
        </div>
        <p className="flex items-center gap-x-2">
          {peer.name}
          {isMicOn ? (
            <FiMic className="h-3 w-3" />
          ) : (
            <FiMicOff className="h-3 w-3" />
          )}
        </p>
      </div>
    </div>
  );
};

export default SpeakerTile;
