import { NextRequest, NextResponse } from "next/server";
import dummyTodos from '@/data/dummy.json'
import {fetchTodos, addTodo} from '@/data/firestore'


//모든할일 가져오기
export async function GET(request: NextRequest) {
   
    const fetchedTodos = await fetchTodos()

    const response = {
        message : 'todos 몽땅가져오기',
        data : fetchedTodos,
    }
   
    return NextResponse.json(response, {status:200})
  }


  //할일추가
  export async function POST(request: NextRequest) {
    
    const {title} = await request.json()

    const addedTodo = await addTodo({title})

  
    const response = {
        message : '할일 추가 성공',
        data : addedTodo,
    }
   
    return Response.json(response,{status : 201})
  }