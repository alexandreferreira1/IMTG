"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { Button } from "./Button";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputSearchProps>({
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
      <Input
        id="search"
        control={control}
        icon={<MagnifyingGlass size={24} className="text-black" />}
        name="searchTerm"
        placeholder="Pesquisar um tema"
        type="text"
        iconPosition="right"
        error={errors.searchTerm?.message}
      />
      <Button title="Buscar" variation="secondary" />
    </form>
  );
}
