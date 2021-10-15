import Head from 'next/head';

import Join from '../components/Join';
import Room from '../components/Room';

const StagesApp = () => {
  const isConnected = false;
  return isConnected ? <Room /> : <Join />;
};

const App = () => {
  return (
    <>
      <Head>
        <title>Discord Stages Clone</title>
      </Head>
      <StagesApp />
    </>
  );
};

export default App;
