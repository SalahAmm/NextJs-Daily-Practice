import { NextRequest } from "next/server";


const users = new Map<number, { id: number; name: string; email: string }>();
users.set(1, { id: 1, name: "Alice", email: "alice@test.com" });
users.set(2, { id: 2, name: "Bob", email: "bob@test.com" });


type Params = { params: Promise<{ id: string }> };


//   Handle Requesting Users

export async function GET(request: NextRequest, { params }: Params) {


  // Get the user Id 

  const { id } = await params;


  // Remove the String type 

  const userId = parseInt(id);

  // Get the User from the Database 

  const user = users.get(userId);


  // Hanlde User not Found 


  if (!user) {
    return Response.json(
      { error: "User not Found" },
      { status: 404 },
    )
  };


  return Response.json(user);



};


// Remove a User


export async function DELETE(request: NextRequest, { params }: Params) {

  const { id } = await params;

  const userId = parseInt(id);

  if (!users.has(userId)) {
    return Response.json(
      { error: "User Not Found" },
      { status: 404 },
    )
  };

x
  users.delete(userId);


  return new Response(null , {status: 204});


}