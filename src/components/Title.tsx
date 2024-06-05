interface TitleProps {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="py-12 xl:py-24 text-center max-w-[800px] mx-5  md:mx-auto">
      <h1 className="text-4xl xl:text-6xl font-bold text-black xl:pb-2">{title}</h1>
      <h3 className="text-sm xl:text-xl text-gray-medium">{subtitle}</h3>
    </div>
  );
}
