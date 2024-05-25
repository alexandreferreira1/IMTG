import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";

export default function Devocionais2() {
  return (
    <>
      {/* Menu e Banner */}
      <div
        className="relative h-[700px] bg-[url('/img/images/banner2.png')] bg-cover bg-no-repeat"
        style={{ backgroundPositionY: "50%" }}
      >
        {/* Menu */}
        <Menu />

        <div className="mx-auto mt-[235px] max-w-[700px] text-center text-white leading-[107%]">
          <h1 className="font-bold text-7xl pb-4">Assim na terra como no céu</h1>
          <p className="text-red-extra-light">
            Publicado por{" "}
            <span className="font-medium">AGNALDO FERREIRA</span> • 27 de
            Maio, 2024
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="m-auto flex max-w-[760px] flex-col gap-8 pb-24 pt-16">
        <button className="animate-fade-right animate-ease-in animate-fill-both relative ml-auto flex w-fit items-center gap-2  font-medium text-black transition-all hover:font-medium hover:duration-1000">
          <span className="shrink-0">Compartilhar</span>
          <Image
            src="/img/icons/share.svg"
            width={30}
            height={30}
            alt="Image Example"
            className="h-[30px] w-[30px] object-cover"
          />
        </button>

        <p className="text-lg leading-[140%] text-gray-medium">
          Na terceira petição da oração do Senhor, Jesus nos instrui a orar para
          que a vontade de Deus seja feita. Esta solicitação decorre da petição
          de que venha o reino de Deus, pois o Reino do Senhor está presente
          onde encontramos justiça, paz e alegria no Espírito Santo (
          <span className="font-semibold text-black">Romanos 14:17</span>). Tais
          frutos são possíveis apenas quando fazemos a vontade de Deus.
        </p>

        <div className="text-lg leading-[140%] text-gray-medium">
          <div className="text-2xl font-bold text-black">
            A vontade preceptiva
          </div>
          Nosso Criador, por outro lado, refere-se a aquelas coisas que Ele
          considera moralmente agradáveis ​​em si mesmas. Pense nos Dez
          Mandamentos – as coisas positivas que ele as impõem, como a
          preservação da vida, a castidade, o contentamento, e assim por diante
          são agradáveis ​​a Deus. É Sua vontade que tais coisas sejam feitas
          porque Ele as aprova. No entanto, sabemos que a vontade preceptiva de
          Deus é rotineiramente quebrada. As pessoas violam os mandamentos; eles
          vão contra Sua vontade preceptiva.  No entanto, em tais casos,
          observamos que eles não estão indo contra Sua vontade decretiva. Por
          causa de algum bem maior, Deus decreta algumas coisas que são em si
          mesmo detestáveis ​​- pecado – e que violam Sua vontade preceptiva. A
          crucificação de Cristo é um bom exemplo disso. Deus ordenou que
          aqueles que assassinaram Seu Filho fariam sua maldade. Considerado em
          si mesmo, ele odeia esse ato de injustiça (
          <span className="font-semibold text-black">Atos 2:23</span>). Aqueles
          homens que tiveram Cristo morto violaram a vontade preceptiva de Deus
          contra o assassinato. Mesmo assim, Deus decretou a crucificação para
          um bem final maior, a saber, a nossa salvação e a Sua glória (
          <span className="font-semibold text-black">Romanos 8:28</span>).
        </div>
        <Image
          src="/img/images/Frame 40.jpg"
          width={740}
          height={420}
          alt="Image Example"
          className="h-[420px] w-[740px] object-cover"
        />
        <p className="text-lg leading-[140%] text-gray-medium">
          Então, orar para que a vontade de Deus seja feita é orar para que Sua
          vontade preceptiva seja mantida. No entanto, é mais do que isso. É
          pedir que as pessoas reconheçam que todos reconheçam que há uma
          vontade soberana por detrás de cada ação volitiva delas. Há um
          propósito maior por detrás de cada ação (
          <span className="font-semibold text-black">Romanos 8:23</span>).
        </p>
        <p className="text-lg leading-[140%] text-gray-medium">
          Nosso Criador, por outro lado, refere-se a aquelas coisas que Ele
          considera moralmente agradáveis ​​em si mesmas. Pense nos Dez
          Mandamentos – as coisas positivas que ele as impõem, como a
          preservação da vida, a castidade, o contentamento, e assim por diante
          são agradáveis ​​a Deus. É Sua vontade que tais coisas sejam feitas
          porque Ele as aprova. No entanto, sabemos que a vontade preceptiva de
          Deus é rotineiramente quebrada. As pessoas violam os mandamentos; eles
          vão contra Sua vontade preceptiva.  No entanto, em tais casos,
          observamos que eles não estão indo contra Sua vontade decretiva. Por
          causa de algum bem maior, Deus decreta algumas coisas que são em si
          mesmo detestáveis ​​- pecado – e que violam Sua vontade preceptiva. A
          crucificação de Cristo é um bom exemplo disso. Deus ordenou que
          aqueles que assassinaram Seu Filho fariam sua maldade. Considerado em
          si mesmo, ele odeia esse ato de injustiça (
          <span className="font-semibold text-black">Atos 2:23</span>). Aqueles
          homens que tiveram Cristo morto violaram a vontade preceptiva de Deus
          contra o assassinato. Mesmo assim, Deus decretou a crucificação para
          um bem final maior, a saber, a nossa salvação e a Sua glória (
          <span className="font-semibold text-black">Romanos 8:28</span>).
        </p>

        <div className="relative mt-8 flex items-center justify-center gap-5 border-y-[1px] border-gray-regular py-7">
          <Image
            src="/img/icons/applause.svg"
            width={40}
            height={40}
            alt="Image Example"
            className="h-[40px] w-[40px] object-cover"
          />
          {/* Contador */}
          <div className="absolute left-[224px] top-[55px] h-[20px] w-[20px] rounded-full bg-red-regular"></div>
          <p className="absolute left-[226px] top-[58px] text-[10px] font-medium text-white">
            +10
          </p>
          <div>
            <p className="font-semibold text-black">Gostou do conteúdo?</p>
            <p className="text-gray-medium">
              Incentive aplaudindo uma ou várias vezes!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
