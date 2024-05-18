import Image from "next/image";

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

        <div className="h-[45px] w-[215px] text-right ">
          <button className="pr-3 ">
            <Image
              src="/img/facebook.svg"
              width={45}
              height={45}
              alt="logo facebook"
              className="mx-auto h-[45px] w-[45px]"
            />
          </button>
          <button className="">
            <Image
              src="/img/email.svg"
              width={45}
              height={45}
              alt="logo email"
              className="mx-auto h-[45px] w-[45px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
