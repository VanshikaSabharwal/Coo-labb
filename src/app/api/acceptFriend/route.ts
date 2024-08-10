import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const token = await req.json();

    return NextResponse.json({ message: "Friend request accepted." });
  } catch (error) {
    return NextResponse.json({ message: "Invalid token." });
  }
}
