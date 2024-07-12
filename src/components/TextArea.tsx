'use client'

import { ReactNode, TextareaHTMLAttributes } from 'react';

import { clsx } from 'clsx';
import { Controller } from 'react-hook-form';

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
      <label
        htmlFor={rest.id}
        className="relative flex w-full gap-5 border-b border-gray-regular pb-3 after:absolute after:bottom-[-1px] after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-700 after:content-[''] hover:after:w-full has-[:focus]:after:w-full"
      >
        {icon}
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <textarea
              id={rest.id}
              value={field.value}
              onChange={field.onChange}
              rows={3}
              className={clsx(
                // {
                //   'bg-[#FCEDEF] ring-2 ring-red-500': error,
                //   'focus:ring-esmerald-500': !error,
                // },
                'w-full text-xl text-black placeholder:text-gray-medium focus:outline-0 focus:placeholder:text-black',
              )}
              {...rest}
            />
          )}
        />
      </label>

      {
        error && (
          <div
            className="mt-[6px] flex items-center gap-[6px] text-red-500"
          >
            {error}
          </div>
        )
      }
    </>
  );
};

