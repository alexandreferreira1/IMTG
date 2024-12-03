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

  return NextResponse.json(
    { applause: registerApplause.quantity },
    { status: 200 },
  );
}

export async function POST(request: Request) {
  const { devotionalId } = await request.json();

  const registerApplause = await prisma.devotionalsApplause.findUnique({
    where: {
      devotionalId,
    },
  });

  if (!registerApplause) {
    await prisma.devotionalsApplause.create({
      data: {
        devotionalId,
        quantity: 1,
      },
    });
  } else {
    await prisma.devotionalsApplause.update({
      where: {
        devotionalId,
      },
      data: {
        quantity: registerApplause.quantity + 1,
      },
    });
  }

  return NextResponse.json(
    { applause: registerApplause?.quantity || 1 },
    { status: 200 },
  );
}
