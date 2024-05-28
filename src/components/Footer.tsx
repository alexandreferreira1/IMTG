import Image from "next/image";
import CircleButton from "./CircleButton";

export function Footer() {
  return (
    <div className="bg-black-dark">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between py-11 ">
        <div className="text-center text-white">
          <p>IMTG © 2024</p>
          <p>Todos os direitos reservados</p>
        </div>

        <div>
          <Image
            src="/img/logo-footer-color.png"
            width={321}
            height={123}
            alt="Arte do Footer"
            className="mx-auto h-[123px] w-[321px]"
          />
        </div>

        <div className="h-[45px] w-[215px] text-right">
          <CircleButton logo="/img/icons/facebook.svg" variation="primary" />
          <CircleButton logo="/img/icons/email.svg" variation="primary"/>
        </div>
      </div>
    </div>
  );
}
