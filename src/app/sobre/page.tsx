/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Title } from "@/components/Title";
import { ButtonShowMoreAbout } from "@/components/ButtonShowMoreAbout";

export default function Sobre() {
  return (
    <div className="mx-auto max-w-[1016px] ">
      {/* Título */}
      <Title title="Sobre Nós" subtitle="Conheça um pouco da nossa história" />

      {/* Sobre 1 */}
      <section className="mx-5 flex flex-col justify-center gap-10 xl:mx-0 xl:flex-row">
        <Image
          src="/img/fachada-exemplo.jpg"
          width={498}
          height={588}
          alt="Logotipo da IMTG"
          className="mx-auto object-cover xl:h-[588px] xl:w-[498px]"
        />

        <div className="flex flex-col items-center gap-5 xl:h-[588px] xl:w-[480px] xl:items-start">
          <Image
            src="/img/logoietg.png"
            width={82}
            height={114}
            alt="Logotipo da IMTG"
            className="h-[114px] w-[82px]"
          />
          <div>
            <h3 className="text-center font-medium text-gray-medium xl:text-left">
              UM POUCO DA NOSSA HISTÓRIA E DOS NOSSOS VALORES
            </h3>
            <h2 className="mt-2 text-center text-4xl font-bold leading-[125%] text-black md:text-[46px] xl:text-left">
              Nossa igreja começou há 7 anos atrás
            </h2>
          </div>

          <p className="text-lg leading-6 text-gray-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl
            libero, fringilla ac dignissim ac, maximus a nisi. Donec bibendum
            quis odio eu fermentum. Sed luctus metus id eleifend pretium. Proin
            et placerat urna. In sit amet orci ante. Curabitur bibendum
            venenatis nibh quis rutrum. Nunc varius tortor eget urna commodo,
            eget pharetra augue placerat. Nunc ac nibh gravida urna tincidunt
            convallis. Sed sagittis pulvinar nunc bibendum elementum. Quisque
            consequat varius lobortis. Curabitur vel facilisis erat. Mauris
            eleifend mollis libero at lacinia. In vel condimentum nisl. Vivamus
            nibh ante, pretium sit amet sem imperdiet, lobortis hendrerit urna.
          </p>
        </div>
      </section>

      {/* Sobre 2 */}
      <section className="mx-5  py-10 xl:mx-0">
        <div className="mx-auto flex flex-col items-center py-10 xl:w-[705px]">
          <p className=" text-center text-4xl font-bold text-black  md:text-5xl">
            “Porque a graça de Deus se manifestou, trazendo salvação
          </p>
          <div className="flex flex-col">
            <p className="text-center text-4xl font-bold text-black md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-4 md:pr-1  md:text-5xl">
              para todos os homens."
            </p>
          </div>
          <p className="text-center text-2xl text-gray-medium">Tito 2:11</p>
        </div>

        <p className="pt-10 text-lg leading-[140%] text-gray-medium">
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
      </section>

      {/* Sobre 3 */}
      <Image
        src="/img/images/Rectangle 15.png"
        width={1016}
        height={519}
        alt=""
        className="mx-auto object-cover px-5 xl:h-[519px] xl:w-[1016px] xl:px-0"
      />
      {/* Sobre 4 */}
      <section className="mx-5 py-10 text-lg leading-[140%] text-gray-medium xl:mx-0">
        Donec pulvinar est id neque sollicitudin consectetur. Nullam at metus
        dapibus, tempor arcu non, ultricies tellus. Integer egestas nulla vel ex
        mollis gravida. Aenean et rutrum ligula, a eleifend risus. Sed id
        sodales ipsum. <b className="text-black">Praesent lacinia dolor</b> ac
        arcu commodo tincidunt. Praesent sodales eu velit at aliquet. Vivamus
        dignissim nibh at velit rhoncus, sit amet ullamcorper dui ultrices.
        Quisque iaculis elementum tempor. Sed vitae laoreet lectus, sed sagittis
        ipsum. Suspendisse pellentesque elit in nisi molestie, condimentum
        aliquam nisl laoreet. Donec et augue varius urna porta porta quis sit
        amet sem. Maecenas imperdiet nulla eu iaculis commodo. Pellentesque
        molestie orci nisi, ut tempus orci ultrices a. Mauris mollis nunc at
        ligula iaculis, ut pellentesque lectus lobortis. Vivamus sem massa,
        sodales id diam id, efficitur feugiat enim. In tincidunt ante sit amet
        magna laoreet efficitur.
        <b className="text-black"> Etiam maximus convallis</b>, non aliquet leo
        ultrices a. Donec sed auctor lacus, ut lobortis massa. Curabitur
        sollicitudin sagittis orci, sit amet consequat felis scelerisque nec.
        Suspendisse facilisis euismod ligula. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Mauris vitae mi
        nec neque semper pharetra. Donec augue libero, laoreet quis tempus
        vitae, ullamcorper quis nulla. Quisque lobortis condimentum interdum.
        Curabitur eros purus, dictum sit amet vestibulum vitae, cursus ut erat.
      </section>
      {/* Sobre 4 */}
      <section className="mx-5 flex flex-wrap gap-3 pb-24 xl:mx-0 xl:gap-5">
        <Image
          src="/img/images/gallery-about-1.jpg"
          width={498}
          height={332}
          alt=""
          className="object-cover transition-all duration-700 hover:scale-105 hover:cursor-pointer hover:duration-700 md:h-[250px] md:w-[49%] lg:h-[300px] xl:h-[332px] xl:w-[498px] "
        />
        <Image
          src="/img/images/gallery-about-2.jpg"
          width={498}
          height={332}
          alt=""
          className="object-cover transition-all duration-700 hover:scale-105 hover:cursor-pointer hover:duration-700 md:h-[250px] md:w-[49%] lg:h-[300px] xl:h-[332px] xl:w-[498px] "
        />
        <Image
          src="/img/images/gallery-about-3.jpg"
          width={498}
          height={332}
          alt=""
          className="object-cover transition-all duration-700 hover:scale-105 hover:cursor-pointer hover:duration-700 md:h-[250px] md:w-[49%] lg:h-[300px] xl:h-[332px] xl:w-[498px] "
        />
        <Image
          src="/img/images/gallery-about-4.jpg"
          width={498}
          height={332}
          alt=""
          className="object-cover transition-all duration-700 hover:scale-105 hover:cursor-pointer hover:duration-700 md:h-[250px] md:w-[49%] lg:h-[300px] xl:h-[332px] xl:w-[498px] "
        />
        <ButtonShowMoreAbout />
      </section>
    </div>
  );
}
