'use client'

import Image from "next/image";
import InputSearch from "./InputSearch";
import Link from "next/link";

import { useForm, SubmitHandler } from "react-hook-form";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from "./Button";


import { useRouter } from 'next/navigation'


interface InputSearchProps {
    searchTerm: string;
}

export function Search() {

    const searchSchema = yup.object({
        searchTerm: yup
            .string()
            .required('Preencha esse campo, por favor.'),
    });

    const {
        control,
        handleSubmit
    } = useForm<InputSearchProps>({
        resolver: yupResolver(searchSchema),
        defaultValues: {
            searchTerm: ''
        }
    });

    const router = useRouter()

    
    const onSubmit: SubmitHandler<InputSearchProps> = async({searchTerm}) => {
      router.push('/devocionais/search?q=' + searchTerm, { scroll: false })
    }

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col gap-2">
            <InputSearch control={control} />
            <Button title="Buscar" variation="secondary" />
        </form>
        <h3 className="pb-4 pt-10 text-lg font-bold text-black">
            Posts Mais Acessados
        </h3>
        <Link href="" className="group">
            <div className="flex gap-3 ">
                <Image
                    src="/img/fachada-exemplo.jpg"
                    width={190}
                    height={141}
                    alt="Logotipo da IMTG"
                    className="h-[141px] w-[190px] object-cover"
                />
                <div className="flex max-w-40 flex-col  justify-center group-hover:underline decoration-black">
                    <h4 className="text-xs text-gray-medium">
                        16 de Dezembro, 2024
                    </h4>
                    <h2 className="text-lg font-bold text-black">
                        Novos convertidos sendo batizados em Dezembro
                    </h2>
                </div>
            </div>
        </Link>
    </div>
}