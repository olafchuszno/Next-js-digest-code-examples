// app/api/todos/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const todos = await db.todo.findMany();
  return NextResponse.json(todos);
}

export async function POST(request: NextRequest) {
  const { title } = await request.json();
  const todo = await db.todo.create({ data: { title } });
  return NextResponse.json(todo, { status: 201 });
}