import { Button } from "@/components/Button";
import Link from "next/link";

export default function GlobalError() {
  return (
    <div className="bg-gray-thin">
      <div className="max-w-screen-xl py-24 text-center md:mx-auto">
        <p className="xs:text-[300px] text-[1000%] font-bold leading-[80%] text-gray-regular md:text-[400px]">
          404
        </p>
        <h2 className="mt-14 pb-4 text-3xl font-bold text-black md:text-6xl">
          Oops...
        </h2>
        <p className="mx-auto w-[70%] pb-4 text-base text-gray-medium md:w-[630px] md:text-xl">
          Desculpe. A página que você está procurando não foi encontrada ou
          ocorreu algum erro.
        </p>
        <Link href="/">
          <Button title="IR PARA INÍCIO" />
        </Link>
      </div>
    </div>
  );
}
