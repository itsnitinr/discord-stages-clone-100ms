import { selectPeers, useHMSStore } from '@100mslive/hms-video-react';

import RoomInfo from './Room/RoomInfo';
import Controls from './Room/Controls';
import ListenerTile from './User/ListenerTile';
import SpeakerTile from './User/SpeakerTile';

const Room = () => {
  const peers = useHMSStore(selectPeers);

  const speakersAndModerators = peers.filter(
    (peer) => peer.roleName === 'speaker' || peer.roleName === 'moderator'
  );
  const listenersAndHandraised = peers.filter(
    (peer) => peer.roleName === 'listener' || peer.roleName === 'handraise'
  );

  return (
    <div className="flex flex-col bg-main text-white min-h-screen p-6">
      <RoomInfo count={peers.length} />
      <div className="flex-1 py-8">
        <h5 className="uppercase text-sm text-gray-300 font-bold mb-8">
          Speakers - {speakersAndModerators.length}
        </h5>
        <div className="flex space-x-6 flex-wrap">
          {speakersAndModerators.map((speaker) => (
            <SpeakerTile key={speaker.id} peer={speaker} />
          ))}
        </div>
        <h5 className="uppercase text-sm text-gray-300 font-bold my-8">
          Listeners - {listenersAndHandraised.length}
        </h5>
        <div className="flex space-x-8 flex-wrap">
          {listenersAndHandraised.map((listener) => (
            <ListenerTile key={listener.id} peer={listener} />
          ))}
        </div>
      </div>
      <Controls />
    </div>
  );
};

export default Room;
