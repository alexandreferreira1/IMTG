'use client'
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";


export default function GlobalError() {
  return (
    <html>
      <body>
        <Menu />

        {/* Main */}
        <div className="bg-gray-thin">
          <div className="mx-auto max-w-screen-xl py-24 text-center">
            <p className="text-[400px] font-bold text-gray-regular leading-[80%]">404</p>
            <h2 className="mt-14 pb-4 text-6xl font-bold text-black">
              Oops...
            </h2>
            <p className="mx-auto w-[630px] text-xl text-gray-medium pb-4">
              Desculpe. A página que você está procurando não foi encontrada ou
              ocorreu algum erro.
            </p>
            <Button title="IR PARA INÍCIO" />
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
