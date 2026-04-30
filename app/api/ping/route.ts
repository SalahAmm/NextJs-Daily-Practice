import { NextRequest } from "next/server";


export async function GET(request : NextRequest) {


  const timeStamp =  new Date().toISOString();
  



  return Response.json(
    {
      status: "online",
      timestamp: timeStamp
    },
    {
      status : 200,
    }
  )
}


