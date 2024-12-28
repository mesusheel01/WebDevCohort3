import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req:NextRequest) {
    const pc = new PrismaClient();
    const body = await req.json()
    console.log(body)
    await pc.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })
    console.log("added")
    return NextResponse.json({
        message: "You have signed up!"
    })
}
