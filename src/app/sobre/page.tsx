/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";

export default function Sobre() {
  return (
    <>
      {/* Menu */}
      <Menu />

      {/* Main */}
      <div className="mx-auto max-w-[1016px] py-24">
        {/* Título */}
        <div className="pb-24 text-center">
          <h1 className="text-6xl font-bold text-black">Sobre Nós</h1>
          <h3 className="text-xl text-gray-medium">
            Conheça um pouco da nossa história
          </h3>
        </div>

        {/* Sobre 1 */}
        <div className="flex gap-10">
          <Image
            src="/img/fachada-exemplo.jpg"
            width={498}
            height={588}
            alt="Logotipo da IMTG"
            className="h-[588px] w-[498px] object-cover"
          />

          <div className="flex h-[588px] w-[480px] flex-col gap-5">
            <Image
              src="/img/logoietg.png"
              width={82}
              height={114}
              alt="Logotipo da IMTG"
              className="h-[114px] w-[82px]"
            />
            <div>
              <h3 className="font-medium text-gray-medium">
                UM POUCO DA NOSSA HISTÓRIA E DOS NOSSOS VALORES
              </h3>
              <h2 className="mt-2 text-[46px] font-bold leading-[125%] text-black">
                Nossa igreja começou há 7 anos atrás
              </h2>
            </div>

            <p className="text-lg leading-6 text-gray-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              nisl libero, fringilla ac dignissim ac, maximus a nisi. Donec
              bibendum quis odio eu fermentum. Sed luctus metus id eleifend
              pretium. Proin et placerat urna. In sit amet orci ante. Curabitur
              bibendum venenatis nibh quis rutrum. Nunc varius tortor eget urna
              commodo, eget pharetra augue placerat. Nunc ac nibh gravida urna
              tincidunt convallis. Sed sagittis pulvinar nunc bibendum
              elementum. Quisque consequat varius lobortis. Curabitur vel
              facilisis erat. Mauris eleifend mollis libero at lacinia. In vel
              condimentum nisl. Vivamus nibh ante, pretium sit amet sem
              imperdiet, lobortis hendrerit urna.
            </p>
          </div>
        </div>

        {/* Sobre 2 */}
        <div className="py-10">
          <div className="flex flex-col items-center mx-auto w-[705px] py-10">
            <p className=" text-center text-5xl font-bold  text-black">
              “Porque a graça de Deus se manifestou, trazendo salvação
            </p>
            <div className="flex flex-col w-fit ">
              <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 pr-1 text-center text-5xl font-bold  text-black">
                para todos os homens."
              </p>
            </div>
            <p className="text-center text-2xl text-gray-medium">Tito 2:11</p>
          </div>

          <p className="pt-10 text-lg leading-[140%] text-gray-medium">
            Donec pulvinar est id neque sollicitudin consectetur. Nullam at
            metus dapibus, tempor arcu non, ultricies tellus. Integer egestas
            nulla vel ex mollis gravida. Aenean et rutrum ligula, a eleifend
            risus. Sed id sodales ipsum.{" "}
            <b className="text-black">Praesent lacinia dolor</b> ac arcu commodo
            tincidunt. Praesent sodales eu velit at aliquet. Vivamus dignissim
            nibh at velit rhoncus, sit amet ullamcorper dui ultrices. Quisque
            iaculis elementum tempor. Sed vitae laoreet lectus, sed sagittis
            ipsum. Suspendisse pellentesque elit in nisi molestie, condimentum
            aliquam nisl laoreet. Donec et augue varius urna porta porta quis
            sit amet sem. Maecenas imperdiet nulla eu iaculis commodo.
            Pellentesque molestie orci nisi, ut tempus orci ultrices a. Mauris
            mollis nunc at ligula iaculis, ut pellentesque lectus lobortis.
            Vivamus sem massa, sodales id diam id, efficitur feugiat enim. In
            tincidunt ante sit amet magna laoreet efficitur.
            <b className="text-black"> Etiam maximus convallis</b>, non aliquet
            leo ultrices a. Donec sed auctor lacus, ut lobortis massa. Curabitur
            sollicitudin sagittis orci, sit amet consequat felis scelerisque
            nec. Suspendisse facilisis euismod ligula. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Mauris vitae mi nec neque semper pharetra. Donec augue libero,
            laoreet quis tempus vitae, ullamcorper quis nulla. Quisque lobortis
            condimentum interdum. Curabitur eros purus, dictum sit amet
            vestibulum vitae, cursus ut erat.
          </p>
        </div>

        {/* Sobre 3 */}
        <Image
          src="/img/images/Rectangle 15.png"
          width={1016}
          height={519}
          alt="Logotipo da IMTG"
          className="h-[519px] w-[1016px] object-cover"
        />
        {/* Sobre 4 */}
        <p className="py-10 text-lg leading-[140%] text-gray-medium">
          Donec pulvinar est id neque sollicitudin consectetur. Nullam at metus
          dapibus, tempor arcu non, ultricies tellus. Integer egestas nulla vel
          ex mollis gravida. Aenean et rutrum ligula, a eleifend risus. Sed id
          sodales ipsum. <b className="text-black">Praesent lacinia dolor</b> ac
          arcu commodo tincidunt. Praesent sodales eu velit at aliquet. Vivamus
          dignissim nibh at velit rhoncus, sit amet ullamcorper dui ultrices.
          Quisque iaculis elementum tempor. Sed vitae laoreet lectus, sed
          sagittis ipsum. Suspendisse pellentesque elit in nisi molestie,
          condimentum aliquam nisl laoreet. Donec et augue varius urna porta
          porta quis sit amet sem. Maecenas imperdiet nulla eu iaculis commodo.
          Pellentesque molestie orci nisi, ut tempus orci ultrices a. Mauris
          mollis nunc at ligula iaculis, ut pellentesque lectus lobortis.
          Vivamus sem massa, sodales id diam id, efficitur feugiat enim. In
          tincidunt ante sit amet magna laoreet efficitur.
          <b className="text-black"> Etiam maximus convallis</b>, non aliquet
          leo ultrices a. Donec sed auctor lacus, ut lobortis massa. Curabitur
          sollicitudin sagittis orci, sit amet consequat felis scelerisque nec.
          Suspendisse facilisis euismod ligula. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae mi
          nec neque semper pharetra. Donec augue libero, laoreet quis tempus
          vitae, ullamcorper quis nulla. Quisque lobortis condimentum interdum.
          Curabitur eros purus, dictum sit amet vestibulum vitae, cursus ut
          erat.
        </p>
        {/* Sobre 4 */}
        <div className="flex flex-wrap gap-5">
          <Image
            src="/img/images/gallery-about-1.jpg"
            width={498}
            height={332}
            alt="Logotipo da IMTG"
            className="h-[332px] w-[498px] object-cover transition-all duration-700 hover:scale-105 hover:cursor-pointer hover:duration-700 "
          />
          <Image
            src="/img/images/gallery-about-2.jpg"
            width={498}
            height={332}
            alt="Logotipo da IMTG"
            className="h-[332px] w-[498px] object-cover transition-all duration-700 hover:scale-105 hover:cursor-pointer hover:duration-700 "
          />
          <Image
            src="/img/images/gallery-about-3.jpg"
            width={498}
            height={332}
            alt="Logotipo da IMTG"
            className="h-[332px] w-[498px] object-cover transition-all duration-700 hover:scale-105 hover:cursor-pointer hover:duration-700 "
          />
          <Image
            src="/img/images/gallery-about-4.jpg"
            width={498}
            height={332}
            alt="Logotipo da IMTG"
            className="h-[332px] w-[498px] object-cover transition-all duration-700 hover:scale-105 hover:cursor-pointer hover:duration-700 "
          />

          <button className="h-14 rounded-[4px] bg-red-regular px-7 text-white hover:bg-red-light ">
            VER MAIS FOTOS
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
