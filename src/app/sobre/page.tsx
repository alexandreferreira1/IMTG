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
          src="/img/fachada-imtg.jpeg"
          width={498}
          height={588}
          alt="Logotipo da IMTG"
          className="mx-auto object-cover object-left xh-auto xl:w-[498px]"
        />

        <div className="flex flex-col items-center gap-5 xl:w-[480px] xl:items-start">
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
              Nossa igreja começou há 8 anos atrás
            </h2>
          </div>

          <p className="text-lg leading-6 text-gray-medium">
            A Igreja Ministerial Tempo da Graça nasceu não apenas como um sonho humano, mas como um projeto que primeiro floresceu no coração de Deus. Em seguida, Ele o plantou no meu coração, Pr. Agnaldo Ferreira, e logo depois, no coração da minha esposa, Pra. Valdirene Ferreira, formando assim a semente de um ministério que transformaria vidas.
            <br /><br />
            Tudo começou no dia 11 de março de 2017, em Campo Grande/MS. Duas pessoas cheias de fé, esperança e disposição para servir. Com recursos limitados, mas com uma confiança ilimitada na direção de Deus, enfrentamos nossos primeiros desafios: Alugamos um salão, que era uma marcenaria,tendo que reformar todo o salão e o transformar em um igreja linda e aconchegante.
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
          Mesmo diante das adversidades, Deus nunca deixou de nos surpreender com Sua fidelidade. Milagre após milagre, fomos crescendo, nos estruturando, e pouco a pouco nos tornamos um ponto de referência espiritual para muitas famílias. Nossa jornada nos levou a ocupar dois espaços distintos: começamos a igreja no bairro Nossa Senhora das Graças, no meio do bairro, onde ficamos por seis anos e depois nos mudamos para o segundo local, que é a sede atual. Fica localizada em uma rua muito movimentada, na Doutor Miguel Vieira Ferreira, nº. 155, no bairro Nossa Senhora das Graças, onde Deus continuou nos abençoando com estrutura, alcance e unidade. Celebramos com gratidão nossos 8 anos de caminhada, completados em 2025, testemunhando a bondade de Deus e os frutos que Ele tem gerado através deste Ministério. Vidas têm sido salvas e restauradas, famílias têm sido reerguidas, casamentos têm sido restaurados e o amor de Cristo tem sido espalhado por meio de cada reunião, culto, evento e ação social que promovemos.

          <br /><br />

          A história da Tempo da Graça é marcada por fases de superação e expansão. Ao longo dos anos, fizemos importantes benfeitorias, aquisição do terreno onde é a sede hoje, construção do templo, construção de banheiros, construção de varandas e reformas, aquisição de equipamentos, construção de salas, compra de cadeiras, climatização, instrumentos musicais e também investimos no crescimento espiritual e humano da nossa liderança e membros, com cursos, formações de obreiros, conferências e retiros espirituais.
          Nosso objetivo sempre foi claro: "Alcançar vidas para Cristo e discipulá-las com amor, verdade e integridade." Por isso, temos trabalhado com dedicação para expandir nosso alcance, não apenas localmente, mas também por meio de mídias sociais, evangelismos, missões, rádios e projetos comunitários.


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
        Também temos visto um mover crescente entre os jovens, casais, crianças e líderes em formação: Ministério da palavra de Deus, Ministério Infantil, Ministério de Louvor, Ministério de Intercessão, Ministério de casais, Ministério de Ação Social, Ministério da juventude e adolescentes, Ministério de construção e reforma da igreja. Todos têm sido instrumentos de edificação, comunhão e serviço, contribuindo diretamente para o fortalecimento do Corpo de Cristo. A presença de cada voluntário é parte essencial da engrenagem que sustenta a nossa missão. Além disso, um dos nossos pilares tem sido o compromisso com a Palavra.
        
        <br /><br />

        Cremos que a Bíblia é o fundamento da transformação verdadeira, por isso incentivamos uma cultura de discipulado, oração e comunhão. Temos buscado ser uma igreja relevante, que une fé e ação, alcançando tanto quem está dentro quanto fora.
        Cada etapa da nossa caminhada é um testemunho do amor de Deus e do poder da fé. E ainda há muito mais por vir! O que começou como uma pequena chama em nossos corações, hoje é um ministério vivo, pulsante e cheio do Espírito Santo. A você que chega agora, seja bem-vindo à nossa história. E a você que já caminha conosco, muito obrigado por fazer parte desta obra. Juntos, seguimos confiantes de que o melhor de Deus ainda está por vir. Deus vos abençoe!

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
