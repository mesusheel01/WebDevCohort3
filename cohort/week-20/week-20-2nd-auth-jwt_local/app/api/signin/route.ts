import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req:NextRequest){

    const body = await req.json()
    const {username,password} = body

    const userId = 1;
    const token = jwt.sign({
        userId
    }, 'secret')
    console.log(token)
    return NextResponse.json({
        token
    })
}
