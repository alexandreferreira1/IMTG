import { ReactNode } from "react";

interface TextAreaProps {
  id: string;
  icon: ReactNode;
  name: string;
  placeholder: string;
}

export function TextArea({ id, icon, name, placeholder }: TextAreaProps) {
  return (
    <label
      htmlFor={id}
      className="relative flex w-full gap-5 border-b border-gray-regular pb-3 after:absolute after:bottom-[-1px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-700 after:content-[''] hover:after:w-full has-[:focus]:after:w-full"
    >
      {icon}
      <textarea 
        rows={3}
        id={id}
        name={name}
        className="w-full text-xl text-black placeholder:text-gray-medium focus:outline-0 focus:placeholder:text-black"
        placeholder={placeholder}
      />
    </label>
  );
}
