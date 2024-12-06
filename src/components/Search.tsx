"use client";

import InputSearch from "./InputSearch";

import { useForm, SubmitHandler } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "./Button";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface InputSearchProps {
  searchTerm?: string;
}

export function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const searchSchema = yup.object({
    searchTerm: yup.string(),
  });

  const { control, handleSubmit } = useForm<InputSearchProps>({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<InputSearchProps> = async ({ searchTerm }) => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set("search", searchTerm);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <InputSearch control={control} />
      <Button title="Buscar" variation="secondary" />
    </form>
  );
}
