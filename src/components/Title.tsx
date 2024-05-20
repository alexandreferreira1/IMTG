export function Title(props) {
  return (
    <>
      <div className="pb-24 text-center">
        <h1 className="text-6xl font-bold text-black">{props.title}</h1>
        <h3 className="text-xl text-gray-medium">{props.subtitle}</h3>
      </div>
    </>
  );
}
