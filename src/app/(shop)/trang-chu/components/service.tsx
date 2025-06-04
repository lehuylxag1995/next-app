import Image from 'next/image'

export default function Service() {
  return (
    <>
      <div className="px-30 md:mt-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="relative border-1 border-[#ffb524] rounded-2xl overflow-hidden">
            <Image
              src="/img/featur-1.jpg"
              alt="F1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
            <div className=" bg-[#ffb524] w-full h-[130]"></div>
            <div className="absolute bottom-18 left-1/2 -translate-x-1/2 text-center bg-[#81c408] rounded-2xl p-6">
              <p className="text-white text-[20px] font-medium">Táo tươi</p>
              <p className="min-w-[200px] text-nowrap text-[#45595b] text-[28px] font-[600]">
                20% giảm giá
              </p>
            </div>
          </div>
          <div className="relative border-1 border-[#45595b] rounded-2xl overflow-hidden">
            <Image
              src="/img/featur-2.jpg"
              alt="F1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
            <div className=" bg-[#45595b] w-full h-[130]"></div>
            <div className="absolute bottom-18 left-1/2 -translate-x-1/2 text-center bg-white rounded-2xl p-6">
              <p className="text-[#81c408] text-[20px] font-medium">Táo tươi</p>
              <p className="min-w-[200px] text-nowrap text-[#45595b] text-[28px] font-[600]">
                Miễn phí vận chuyển
              </p>
            </div>
          </div>
          <div className="relative border-1 border-[#81c408] rounded-2xl overflow-hidden">
            <Image
              src="/img/featur-3.jpg"
              alt="F1"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
            <div className=" bg-[#81c408] w-full h-[130]"></div>
            <div className="absolute bottom-18 left-1/2 -translate-x-1/2 text-center bg-[#ffb524] rounded-2xl p-6">
              <p className="text-white text-[20px] font-medium">Táo tươi</p>
              <p className="min-w-[200px] text-nowrap text-[#45595b] text-[28px] font-[600]">
                Giảm 30%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
