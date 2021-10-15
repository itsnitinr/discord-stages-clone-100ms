import Avatar from 'boring-avatars';
import PermissionsMenu from './PermissionsMenu';

const ListenerTile = ({ peer }) => {
  return (
    <div className="relative w-100">
      <PermissionsMenu id={peer.id} audioTrack={peer.audioTrack} />
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <Avatar name={peer.name} size="60" />
        <p className="text-sm">{peer.name}</p>
      </div>
    </div>
  );
};

export default ListenerTile;
