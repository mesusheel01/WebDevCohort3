import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest)
{
    return NextResponse.json({
        avtarUrl: 'https://images.google.com/cat_png'
    })
}
