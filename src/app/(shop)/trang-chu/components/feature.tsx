import { Car } from 'lucide-react'
import { ShieldUser } from 'lucide-react'
import { ArrowRightLeft } from 'lucide-react'
import { Phone } from 'lucide-react'

export default function Feature() {
  return (
    <>
      <div className="flex px-30 py-30 gap-6">
        <div className="basis-1/4 flex flex-col text-center items-center bg-[#f4f6f8] p-4 rounded-2xl">
          {/* Hình tròn + icon */}
          <div className="relative mb-[48px] size-[120px] bg-[#ffb524] rounded-full flex items-center justify-center">
            <div className="absolute -bottom-2 z-0 size-[35px] bg-[#ffb524] rotate-45"></div>
            <Car className="text-white z-10" size={70} />
          </div>

          {/* Tiêu đề */}
          <div className="text-black text-[20px] font-[600] ">
            Miễn phí vận chuyển
          </div>
          {/* Mô tả */}
          <div className="text-[#747d88] text-[16px] font-[400] ">
            Miễn phí với đơn hàng 300$
          </div>
        </div>

        <div className="basis-1/4 flex flex-col text-center items-center bg-[#f4f6f8] p-4 rounded-2xl">
          {/* Hình tròn + icon */}
          <div className="relative mb-[48px] size-[120px] bg-[#ffb524] rounded-full flex items-center justify-center">
            <div className="absolute -bottom-2 z-0 size-[35px] bg-[#ffb524] rotate-45"></div>
            <ShieldUser className="text-white z-10" size={70} />
          </div>

          {/* Tiêu đề */}
          <div className="text-black text-[20px] font-[600] ">
            Thanh toán bảo mật
          </div>
          {/* Mô tả */}
          <div className="text-[#747d88] text-[16px] font-[400] ">
            100% thanh toán bảo mật
          </div>
        </div>

        <div className="basis-1/4 flex flex-col text-center items-center bg-[#f4f6f8] p-4 rounded-2xl">
          {/* Hình tròn + icon */}
          <div className="relative mb-[48px] size-[120px] bg-[#ffb524] rounded-full flex items-center justify-center">
            <div className="absolute -bottom-2 z-0 size-[35px] bg-[#ffb524] rotate-45"></div>
            <ArrowRightLeft className="text-white z-10" size={70} />
          </div>

          {/* Tiêu đề */}
          <div className="text-black text-[20px] font-[600] ">
            Trả hàng trong 30 ngày
          </div>
          {/* Mô tả */}
          <div className="text-[#747d88] text-[16px] font-[400] ">
            Hoàn tiền trong vòng 30 ngày
          </div>
        </div>

        <div className="basis-1/4 flex flex-col text-center items-center bg-[#f4f6f8] p-4 rounded-2xl">
          {/* Hình tròn + icon */}
          <div className="relative mb-[48px] size-[120px] bg-[#ffb524] rounded-full flex items-center justify-center">
            <div className="absolute -bottom-2 z-0 size-[35px] bg-[#ffb524] rotate-45"></div>
            <Phone className="text-white z-10" size={70} />
          </div>

          {/* Tiêu đề */}
          <div className="text-black text-[20px] font-[600] ">Hỗ trợ 24/7</div>
          {/* Mô tả */}
          <div className="text-[#747d88] text-[16px] font-[400] ">
            Hỗ trợ mọi lúc nhanh nhất
          </div>
        </div>
      </div>
    </>
  )
}
