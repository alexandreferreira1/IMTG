"use client";
import Link from "next/link";
import { Button } from "./Button";
import useWindowDimentions from "@/hooks/useWindowDimensions";

export function ButtonShowMoreAbout() {
  const { width } = useWindowDimentions();

  return (
    <Link href="https://www.imtg.com.br/galeria/cmehrgnp018rg07ki4t69y7a9">
      <Button title="VER MAIS FOTOS" fullsize={width < 1024} />
    </Link>
  );
}
