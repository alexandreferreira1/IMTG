import { ShareFat } from "@phosphor-icons/react/dist/ssr";

interface CircleButtonProps {
    icon: string;
}

export default function CircleButton({icon}:CircleButtonProps) {
    return (
        <button className="relative ml-auto flex w-fit items-center gap-2 group">
            <span className="shrink-0 font-[400] group-hover:text-red-regular">Compartilhar</span>
            <div className="border-[1px] p-[6px] rounded-full text-black group-hover:text-red-regular">
                < ShareFat size={18} />
            </div>
        </button>

    )
}
