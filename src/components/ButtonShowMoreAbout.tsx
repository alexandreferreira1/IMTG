"use client";
import Link from "next/link";
import { Button } from "./Button";
import useWindowDimentions from "@/hooks/useWindowDimensions";

export function ButtonShowMoreAbout() {
  const { width } = useWindowDimentions();

  return (
    <Link href="/galeria">
      <Button title="VER MAIS FOTOS" fullsize={width < 1024} />
    </Link>
  );
}
