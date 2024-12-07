"use client";

import { ReactNode, TextareaHTMLAttributes } from "react";

import { clsx } from "clsx";
import { Controller } from "react-hook-form";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLElement> {
  name: string;
  control: any;
  error?: string;
  icon: ReactNode;
}

export function TextArea({
  error,
  name,
  control,
  icon,
  ...rest
}: TextAreaProps) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <label
            htmlFor={rest.id}
            className={clsx(
              "relative flex w-full gap-5 border-b border-gray-regular pb-3 after:absolute after:bottom-[-1px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-700 after:content-[''] hover:after:w-full has-[:focus]:after:w-full",
              {
                "border-red-regular after:bg-red-extra-light": error,
              },
            )}
          >
            {icon}
            <textarea
              id={rest.id}
              value={field.value}
              onChange={field.onChange}
              rows={3}
              className={clsx(
                "w-full text-xl text-black placeholder:text-gray-medium focus:outline-0 focus:placeholder:text-black",
              )}
              {...rest}
            />
          </label>
        )}
      />

      {error && (
        <div className="flex items-center gap-[6px] text-red-extra-light">
          {error}
        </div>
      )}
    </>
  );
}
