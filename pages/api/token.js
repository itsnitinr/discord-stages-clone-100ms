import { v4 } from 'uuid';
const endPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
const room_id = process.env.REACT_APP_ROOM_ID;

export default async function getAuthToken(req, res) {
  try {
    const { role } = JSON.parse(req.body);
    const initEndPoint = process.env.REACT_APP_HMS_INIT_PEER_ENPOINT || undefined
    const response = await fetch(`${endPoint}api/token`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: v4(),
        room_id,
        role,
      }),
    });

    const { token } = await response.json();
    res.status(200).json({ token, initEndPoint });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error });
  }
}
