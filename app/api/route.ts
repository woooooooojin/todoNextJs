import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
   
    const response = {
        message : '하하하',
        data : '오늘도 열코딩',
    }
   
    return NextResponse.json(response, {status:200})
  }