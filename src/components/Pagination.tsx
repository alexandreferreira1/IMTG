import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react/dist/ssr";


export default function Pagination() {
    return (
        <>
            <div className="my-24 flex mx-5 xl:mx-0 justify-center xl:justify-start">
            <button className="">
                    <CaretCircleLeft size={31} weight="light" className="text-black  hover:fill-red-regular mr-[10px] hidden"/>
                </button>
                <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] bg-red-regular font-regular text-white">
                    1
                </button>
                <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] font-regular text-black hover:bg-red-regular hover:text-white">
                    2
                </button>
                <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] font-regular text-black hover:bg-red-regular hover:text-white">
                    3
                </button>

                <div className=" mr-[10px] flex h-[30px] w-[30px] justify-center rounded-[4px] font-regular text-black">
                    ...
                </div>

                <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] font-regular text-black hover:bg-red-regular hover:text-white">
                    6
                </button>
                <button className="mr-[10px] h-[30px] w-[30px] rounded-[4px] font-regular text-black hover:bg-red-regular hover:text-white">
                    7
                </button>
                <button className=" h-[30px] w-[30px] rounded-[4px] font-regular text-black hover:bg-red-regular hover:text-white">
                    8
                </button>
                <button className="ml-[10px]">
                    <CaretCircleRight size={31} weight="thin" className="text-black  hover:fill-red-regular"/>
                </button>
            </div>
        </>
    )
}
