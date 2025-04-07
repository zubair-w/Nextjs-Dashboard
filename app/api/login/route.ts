import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(
    {
      message: "Get Request",
    },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
    return NextResponse.json(
      { message: "This is a post request" },
      { status: 200 }
    );
  }
  
  export async function PATCH(req: NextRequest) {
    return NextResponse.json(
      { message: "This is a patch request" },
      { status: 200 }
    );
  }