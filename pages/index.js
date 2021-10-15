import {
  HMSRoomProvider,
  useHMSStore,
  selectIsConnectedToRoom,
} from '@100mslive/hms-video-react';
import Head from 'next/head';

import Join from '../components/Join';
import Room from '../components/Room';

const StagesApp = () => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  return isConnected ? <Room /> : <Join />;
};

const App = () => {
  return (
    <HMSRoomProvider>
      <Head>
        <title>Discord Stages Clone</title>
      </Head>
      <StagesApp />
    </HMSRoomProvider>
  );
};

export default App;
