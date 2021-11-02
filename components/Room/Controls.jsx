import {
  useHMSStore,
  useHMSActions,
  selectIsLocalAudioEnabled,
  selectLocalPeer,
} from '@100mslive/hms-video-react';

import MicButton from './MicButton';
import ExitButton from './ExitButton';
import HandRaiseButton from './HandRaiseButton';

const Controls = () => {
  const hmsActions = useHMSActions();
  const isMicOn = useHMSStore(selectIsLocalAudioEnabled);
  const peer = useHMSStore(selectLocalPeer);

  const isListenerOrHandraised =
    peer.roleName === 'listener' || peer.roleName === 'handraise';

  return (
    <div className="flex justify-center space-x-4">
      {!isListenerOrHandraised && (
        <MicButton
          isMicOn={isMicOn}
          toggleMic={() => hmsActions.setLocalAudioEnabled(!isMicOn)}
        />
      )}
      {isListenerOrHandraised && (
        <HandRaiseButton
          isHandRaised={peer.roleName === 'handraise'}
          toggleHandRaise={() =>
            hmsActions.changeRole(
              peer.id,
              peer.roleName === 'listener' ? 'handraise' : 'listener',
              true
            )
          }
        />
      )}
      <ExitButton exitRoom={() => hmsActions.leave()} />
    </div>
  );
};

export default Controls;
