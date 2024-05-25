import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export function Title(props: { title: string; subtitle: string }) {
  return (
    <>
      <div className="pb-24 text-center max-w-[800px] mx-auto">
        <h1 className="text-6xl font-bold text-black pb-2">{props.title}</h1>
        <h3 className="text-xl text-gray-medium">{props.subtitle}</h3>
      </div>
    </>
  );
}
