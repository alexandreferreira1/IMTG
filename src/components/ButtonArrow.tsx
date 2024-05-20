import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function ButtonArrow() {
  return (
    <>
      <button className="animate-fade-right animate-ease-in animate-fill-both relative flex w-fit items-center gap-2 text-xs text-black transition-all after:absolute after:-bottom-[4px] after:h-[1px] after:w-[142px] after:bg-black after:transition-all after:duration-[600ms] after:content-[''] hover:font-medium hover:duration-1000 hover:after:w-0">
        <span className="shrink-0">CONTINUAR LENDO</span>
        <ArrowRight size={16} />
      </button>
    </>
  );
}
