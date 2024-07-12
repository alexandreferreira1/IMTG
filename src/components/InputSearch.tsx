'use client'

import { useForm } from "react-hook-form";
import { Input } from "./Input"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export default function InputSearch() {
    const { control } = useForm();

    return (
        <form>
            <Input
                id="search"
                control={control}
                icon={<MagnifyingGlass size={24} className="text-black" />}
                name="search"
                placeholder="Pesquisar um tema"
                type="text"
                iconPosition="right"
            />
        </form>
    )
}
