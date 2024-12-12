interface TitleProps {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="mx-5 max-w-[800px] py-12 text-center md:mx-auto  xl:py-24">
      <h1 className="text-4xl font-bold text-black xl:pb-2 xl:text-6xl">
        {title}
      </h1>
      <h2 className="text-sm text-gray-medium xl:text-xl">{subtitle}</h2>
    </div>
  );
}
