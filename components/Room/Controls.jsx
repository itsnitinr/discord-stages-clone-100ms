import {
  useHMSStore,
  useHMSActions,
  selectIsLocalAudioEnabled,
  selectLocalPeerRole,
} from '@100mslive/hms-video-react';

import MicButton from './MicButton';
import ExitButton from './ExitButton';

const Controls = () => {
  const hmsActions = useHMSActions();
  const isMicOn = useHMSStore(selectIsLocalAudioEnabled);
  const role = useHMSStore(selectLocalPeerRole).name;

  return (
    <div className="flex justify-center space-x-4">
      {role !== 'listener' && (
        <MicButton
          isMicOn={isMicOn}
          toggleMic={() => hmsActions.setLocalAudioEnabled(!isMicOn)}
        />
      )}
      <ExitButton exitRoom={() => hmsActions.leave()} />
    </div>
  );
};

export default Controls;
