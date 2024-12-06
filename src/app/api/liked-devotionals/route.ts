import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const LIMIT_OF_LIKED_DEVOTIONALS = 3;

export async function GET() {
  const likedDevotionals = await prisma.devotionalsApplause.findMany({
    orderBy: {
      quantity: "desc",
    },
    take: LIMIT_OF_LIKED_DEVOTIONALS,
  });
  const response = NextResponse.json(
    { devotionals: likedDevotionals },
    { status: 200 },
  );

  // Adicionar cabeçalhos para desabilitar cache
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");

  return response;
}
