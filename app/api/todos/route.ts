import { NextRequest, NextResponse } from "next/server";
import dummyTodos from '@/data/dummy.json'


//모든할일 가져오기
export async function GET(request: NextRequest) {
   
    const response = {
        message : 'todos 몽땅가져오기',
        data : dummyTodos,
    }
   
    return NextResponse.json(response, {status:200})
  }


  //할일추가
  export async function POST(request: NextRequest) {
    
    const {title} = await request.json()

    const newTodo = {
        id:"10",
        title,
        is_done:false
    }
    const response = {
        message : '할일 추가 성공',
        data : newTodo,
    }
   
    return Response.json(response,{status : 201})
  }