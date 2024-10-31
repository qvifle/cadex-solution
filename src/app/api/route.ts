export async function POST(req: Request) {
  const data = await req.json();
  console.log(data);
  
  const responseMessage = `Thank you for your interest, ${data.name}`;

  return Response.json({ message: responseMessage });
}
