import { NextRequest } from "next/server";


const users: { id: number; name: string; email: string }[] = [];


let nextId = 1;



export async function GET(request: NextRequest) {

	return Response.json({users});
};


export async function POST( request : NextRequest) {


	const body = await request.json();


	if(!body.name || !body.email) {
		return Response.json(
			{error: "Eather a Name or Email is missing!!"},
			{status: 400},
		);
	};



const newUser = {
	id: nextId,
	name: body.name,
	email: body.email,
};


users.push(newUser);



return Response.json(newUser , {status : 201});

}



