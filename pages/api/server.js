import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username } = req.body;

    try {
      const resp = await axios.put(
        "https://api.chatengine.io/users/",
        {
          username: username,
          secret: username,
          first_name: username,
        },
        {
          headers: {
            "PRIVATE-KEY": "07f14470-d6e7-43bc-8361-454ccc0acc0f",
          },
        }
      );
      const responseData = resp.data;
      return res.status(200).json(responseData);
    } catch (error) {
      return res.status(500).json({ error: "An error occurred." });
    }
  } else {
    return res.status(500).json({ error: "An error occurred." });
  }
};
