'use client'

import { ShareFat } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { RWebShare } from "react-web-share";

// window.location.href

export default function CircleButton() {

    let [currentUrl, setCurrentUrl] = useState("")

    useEffect(() => {
        setCurrentUrl(window.location.href)
    }, []);

    return (
        <>
            <RWebShare
                data={{
                    text: "Web Share - GfG",
                    url: currentUrl,
                    title: "Escolha uma opção abaixo",
                }}
                onClick={() => { }}>

                <button className="relative ml-auto flex w-fit items-center gap-2 group">
                    <span className="shrink-0 font-[400] group-hover:text-red-regular">Compartilhar</span>
                    <div className="border-[1px] p-[6px] rounded-full text-black group-hover:text-red-regular">
                        < ShareFat size={18} />
                    </div>
                </button>
            </RWebShare>
        </>


    )
}
