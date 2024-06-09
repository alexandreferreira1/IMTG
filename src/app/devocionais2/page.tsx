import Image from "next/image";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import CircleButton from "@/components/CircleButton";


export default function Devocionais2() {
  return (
    <>
      {/* Menu e Banner */}
      <div
        className="relative h-[700px] bg-[url('/img/images/banner2.png')] bg-cover bg-no-repeat bg-center"
        style={{ backgroundPositionY: "50%" }}
      >
        {/* Menu */}
        <Menu transparent />

        <div className="mx-auto mt-[235px] max-w-[700px] text-center text-white leading-[107%]">
          <h1 className="font-bold text-7xl pb-4">Assim na terra como no céu</h1>
          <p className="text-white font-thin">
            Publicado por{" "}
            <span className="font-medium">AGNALDO FERREIRA</span> • 27 de
            Maio, 2024
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="m-auto flex max-w-[760px] flex-col gap-8 pb-24 pt-16 mx-5 xl:mx-0">
        <CircleButton icon="ShareFat" />

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

        <div className="mt-8 flex items-center justify-center gap-5 border-y-[1px] border-gray-regular py-7">
          <div className="w-[54px]  relative">
            <Image
              src="/img/icons/applause.svg"
              width={50}
              height={50}
              alt="Image Example"
              className="h-[50px] w-[50px] object-cover"
            />
            {/* Contador */}
            <div className="absolute right-[0px] bottom-[0px] h-[24px] w-[24px] font-medium text-white rounded-full bg-red-regular text-[10px] flex items-center justify-center pr-[2px]">+2</div>
          </div>
          {/* <p className="absolute left-[226px] top-[58px] text-[10px] ">
            +10
          </p> */}
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
