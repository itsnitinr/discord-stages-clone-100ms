import MicButton from './MicButton';
import ExitButton from './ExitButton';

const Controls = () => {
  const isMicOn = false;
  const role = 'listener';

  return (
    <div className="flex justify-center space-x-4">
      {role !== 'listener' && (
        <MicButton isMicOn={isMicOn} toggleMic={() => {}} />
      )}
      <ExitButton exitRoom={() => {}} />
    </div>
  );
};

export default Controls;
