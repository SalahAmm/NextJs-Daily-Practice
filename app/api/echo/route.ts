import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

  const serachParams = request.nextUrl.searchParams;
  const text = serachParams.get("text");


  if (!text) {
    return Response.json({
      error: "Missing text parameter"
    },
      {
        status: 400,
      }
    );
  }

  return Response.json(
    {
      echo: text,
    },
    {
      status: 200,
    }
  );
}

