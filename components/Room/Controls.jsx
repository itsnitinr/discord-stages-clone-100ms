import MicButton from './MicButton';
import ExitButton from './ExitButton';
import HandRaiseButton from './HandRaiseButton';

const Controls = () => {
  const isMicOn = false;
  const peer = { name: 'Test', roleName: 'listener' };

  const isListenerOrHandraised =
    peer.roleName === 'listener' || peer.roleName === 'handraise';

  return (
    <div className="flex justify-center space-x-4">
      {!isListenerOrHandraised && (
        <MicButton isMicOn={isMicOn} toggleMic={() => {}} />
      )}
      {isListenerOrHandraised && (
        <HandRaiseButton
          isHandRaised={peer.roleName === 'handraise'}
          toggleHandRaise={() => {}}
        />
      )}
      <ExitButton exitRoom={() => {}} />
    </div>
  );
};

export default Controls;
