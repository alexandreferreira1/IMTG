import { Button } from "./Button";

export function NotFoundSearch() {
  return <div className="flex flex-col gap-2 items-center justify-center pb-20">
    Não foi encontrado nenhum resultado...
    <Button title="IR PARA INÍCIO" />
  </div>
}