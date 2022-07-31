import type {NextApiRequest, NextApiResponse} from "next";

const headers = new Headers();

headers.append("apikey", process.env.NEXT_PUBLIC_SUPABASE_KEY as string);
headers.append("Content-Type", "application/json");
headers.append("Authorization", "Bearer " + process.env.NEXT_PUBLIC_SUPABASE_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const data = await fetch(process.env.NEXT_PUBLIC_SUPABASE_URL + "/rest/v1/questions", {
      headers,
    }).then((res) => res.json());

    return res.json(data);
  } else if (req.method === "POST") {
    const body = JSON.parse(req.body);

    await fetch(process.env.NEXT_PUBLIC_SUPABASE_URL + "/rest/v1/questions", {
      method: "POST",
      body: JSON.stringify({
        text: body.question,
      }),
      headers,
    });

    return res.json({success: true});
  }
}
