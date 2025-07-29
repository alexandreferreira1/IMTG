import Image from "next/image";
import { FacebookLogo } from "./FacebookLogo";
import { EmailLogo } from "./EmailLogo";
import Link from "next/link";

export function Footer() {
  return (
    <div className="z-10 bg-black-dark  px-4">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-6 py-11 xl:flex-row">
        <div className="order-3 text-center text-white xl:order-1">
          <p>IMTG © 2017</p>
          <p>Todos os direitos reservados</p>
        </div>

        <div className="xl:order-2">
          <Link href="/">
            <Image
              src="/img/logo-footer-color.png"
              width={321}
              height={123}
              alt="Arte do Footer"
              className="mx-auto w-[200px] xl:h-[123px] xl:w-[321px]"
            />
          </Link>
        </div>

        <div className="flex h-[45px] w-full justify-center gap-3 xl:order-3 xl:w-[215px] xl:justify-end">
          <Link
            href="https://www.facebook.com/imtempodagraca?_rdr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookLogo />
          </Link>
          <Link href="/fale-conosco">
            <EmailLogo />
          </Link>
        </div>
      </div>
    </div>
  );
}
