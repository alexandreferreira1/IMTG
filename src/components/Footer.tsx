import Image from "next/image";
import { FacebookLogo } from "./FacebookLogo";
import { EmailLogo } from "./EmailLogo";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-black-dark z-10">
      <div className="mx-auto flex flex-col gap-6 xl:flex-row max-w-screen-xl items-center justify-between py-11 ">
        <div className="text-center text-white xl:order-1 order-3">
          <p>IMTG © 2024</p>
          <p>Todos os direitos reservados</p>
        </div>

        <div className="xl:order-2">
          <Link href="/">
            <Image
              src="/img/logo-footer-color.png"
              width={321}
              height={123}
              alt="Arte do Footer"
              className="mx-auto xl:h-[123px] xl:w-[321px] w-[200px]"
            />
          </Link>
        </div>

        <div className="h-[45px] xl:w-[215px] flex justify-center w-full xl:justify-end gap-3 xl:order-3">
          <Link href="/sobre">
            <FacebookLogo variation="primary" />
          </Link>
          <Link href="/galeria">
            <EmailLogo variation="primary" />
          </Link>

        </div>
      </div>
    </div>
  );
}
