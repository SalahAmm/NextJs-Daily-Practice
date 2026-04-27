import { NextRequest } from "next/server";



export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("get");
    const limit = searchParams.get("limit");


    if (!query) {
        return Response.json(
            { error: "Missing 'q'  paramater" },
            { status: 400 },

        );
    }


    const result = [
        { name: "John Doe", age: 25 },
        { name: "Jane Smith", age: 30 },
        { name: "Bob Johnson", age: 40 }
    ].slice(0, Number(limit) || 10);
  

    return Response.json({ query, result });
};



