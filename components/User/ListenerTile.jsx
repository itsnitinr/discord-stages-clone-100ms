import Avatar from 'boring-avatars';
import HandRaiseBadge from './HandRaiseBadge';
import PermissionsMenu from './PermissionsMenu';

const ListenerTile = ({ peer }) => {
  return (
    <div className="relative w-100 px-3 py-2">
      <PermissionsMenu id={peer.id} audioTrack={peer.audioTrack} />
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <Avatar name={peer.name} size="60" />
        <p className="text-sm">{peer.name}</p>
      </div>
      {peer.roleName === 'handraise' && <HandRaiseBadge />}
    </div>
  );
};

export default ListenerTile;
