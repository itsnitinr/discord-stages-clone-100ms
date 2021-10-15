import { v4 } from 'uuid';

export default async function getAuthToken(req, res) {
  try {
    const { role } = JSON.parse(req.body);

    const response = await fetch(`${process.env.TOKEN_ENDPOINT}api/token`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: v4(),
        room_id: process.env.ROOM_ID,
        role,
      }),
    });

    const { token } = await response.json();
    res.status(200).json({ token });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error });
  }
}
