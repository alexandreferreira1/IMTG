import Image from "next/image";

export function Menu() {
  return (
      <div className=" bg-black-dark bg-opacity-70">
        <div className="mx-auto flex h-20 max-w-screen-xl items-center justify-between">
          <div className="flex gap-8">
            {/* Logo */}
            <Image
              src="/img/logoietg.png"
              width={44}
              height={62}
              alt="Logotipo da IMTG"
              className="h-[62px] w-11"
            />
            {/* Nav */}
            <div className="flex gap-7">
              <button className="text-white">Início</button>
              <button className="text-white">Sobre</button>
              <button className="text-white">Devocionais</button>
              <button className="text-white">Galeria</button>
              <button className="text-white">Fale Conosco</button>
            </div>
          </div>

          <button className="h-14 rounded-[4px] bg-red-regular px-7 text-white">
            FAÇA SUA CONTRIBUIÇÃO
          </button>
        </div>
      </div>
  );
}
