'use client'


import { Input } from "./Input"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

interface InputSearchProps {
    control: any
}


export default function InputSearch({control}: InputSearchProps) {
    

    return (
        <form>
            <Input
                id="search"
                control={control}
                icon={<MagnifyingGlass size={24} className="text-black" />}
                name="searchTerm"
                placeholder="Pesquisar um tema"
                type="text"
                iconPosition="right"
            />
        </form>
    )
}
