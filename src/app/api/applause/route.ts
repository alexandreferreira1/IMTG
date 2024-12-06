import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const devotionalId = searchParams.get("devotionalId") || "";

  const registerApplause = await prisma.devotionalsApplause.findUnique({
    where: {
      devotionalId,
    },
  });

  if (!registerApplause) {
    return new NextResponse("Not found", { status: 404 });
  }
  const response = NextResponse.json(
    { applause: registerApplause.quantity },
    { status: 200 },
  );

  // Adicionar cabeçalhos para desabilitar cache
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");

  return response;
}

export async function POST(request: Request) {
  const { devotionalId, quantity } = await request.json();

  const registerApplause = await prisma.devotionalsApplause.upsert({
    where: { devotionalId },
    create: { devotionalId, quantity: quantity },
    update: { quantity },
  });

  return NextResponse.json(
    { applause: registerApplause.quantity },
    { status: 200 },
  );
}
