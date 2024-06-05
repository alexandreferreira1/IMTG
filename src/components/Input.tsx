import { ReactNode } from "react";

interface InputProps {
  id: string;
  icon?: ReactNode;
  name: string;
  type: string;
  placeholder: string;
  iconPosition?: 'left' | 'right'
}

export function Input({ id, icon, name, type, placeholder, iconPosition = "left" }: InputProps) {
  return (
    <label
      htmlFor={id}
      className="relative flex w-full items-center gap-5 border-b border-gray-regular pb-3 after:absolute after:bottom-[-1px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-700 after:content-[''] hover:after:w-full has-[:focus]:after:w-full"
    >
      {icon && iconPosition == "left" && icon}
      <input
        id={id}
        name={name}
        type={type}
        className="w-full text-xl text-black placeholder:text-gray-medium focus:outline-0 focus:placeholder:text-black"
        placeholder={placeholder}
      />
      {icon && iconPosition == "right" && icon}
    </label>
  );
}
