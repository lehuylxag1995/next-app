import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import Image from 'next/image'

export default function Banner() {
  return (
    <>
      <div className="">
        <div className="bg-[url(/img/hero-img.jpg)] bg-[#ffc107]/4 bg-blend-overlay w-auto h-130 bg-cover bg-center flex items-center justify-center">
          <div className="flex px-30 ">
            {/* Banner bên trái  */}
            <div className="basis-7/12 flex flex-col gap-3">
              <span className="text-[#ffb524] text-[25px] font-[500]">
                100% Thực phẩm hữu cơ
              </span>
              <span className="text-[#81c408] text-wrap text-[4rem] font-bold tracking-tight leading-none">
                Rau củ quả hữu cơ & Thực phẩm
              </span>
              <form className="relative w-130 mt-10">
                <input
                  className="px-5 py-4 w-full rounded-full border-2 border-[#ffb524] bg-white  focus:outline-none focus:ring-4 focus:ring-[#81c408]/30"
                  type="text"
                  placeholder="Tìm kiếm..."
                />
                <button
                  className="absolute right-0 border-2 border-[#ffb524] py-4 px-10 rounded-full bg-[#81c408] text-white font-bold"
                  type="submit"
                >
                  Tìm kiếm
                </button>
              </form>
            </div>

            {/* Banner bên phải  */}
            <div className="basis-5/12">
              <Carousel
                className="max-w-[512]"
                opts={{
                  loop: true
                }}
              >
                <div className="relative">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        className="bg-amber-400 rounded-2xl object-cover"
                        src="/img/hero-img-1.png"
                        width={512}
                        height={341}
                        alt="hero-img-1"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        className="rounded-2xl object-cover"
                        src="/img/hero-img-2.jpg"
                        width={512}
                        height={341}
                        alt="hero-img-2"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-5 size-13 bg-[#81c408] text-white hover:bg-[#679d06] hover:text-white" />
                  <CarouselNext className="absolute right-5 size-13 bg-[#81c408] text-white hover:bg-[#679d06] hover:text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
