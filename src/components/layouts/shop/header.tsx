import { MapPin } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Search } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import { UserRound } from 'lucide-react'

import { ChevronDown } from 'lucide-react'
export default function Header() {
  return (
    <>
      <header>
        {/* Header 1 */}
        <div className="mx-30 text-white text-[14px]">
          <div className="w-full bg-[#81c408] px-10 py-4 rounded-tl-[100px] rounded-br-[100px] rounded-bl-4xl rounded-tr-4xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MapPin color="#ffb524" size={15} />
              <span>129 Lý Thái Tổ, Mỹ Long, Long Xuyên </span>
              <Mail color="#ffb524" size={15} />
              <span>lehuylxag1995@gmail.com</span>
            </div>
            <div className="flex gap-2">
              <span>Chính sách bảo mật</span>
              <span>/</span>
              <span>Điều khoản sử dụng</span>
              <span>/</span>
              <span>Bán hàng và hoàn tiền</span>
            </div>
          </div>
        </div>

        {/* Header 2  */}
        <div className="flex items-center py-5 mx-30 gap-4">
          <div className="flex-none flex items-center justify-start">
            <span className="text-[#81c408] font-bold text-[40px]">
              Fruitables
            </span>
          </div>
          <div className="grow flex items-center justify-center">
            <ul className="flex gap-8 text-gray-500 text-[17px] ">
              <li className="hover:text-[#81c408]">Trang chủ</li>
              <li className="hover:text-[#81c408]">Sản phẩm</li>
              <li className="relative group hover:text-[#81c408] ">
                <div className="flex gap-1 items-center cursor-pointer">
                  <a href="#">Danh mục</a>
                  <ChevronDown size={20} strokeWidth={3} />
                </div>
                <ul className="absolute  mt-2 left-0 bg-gray-100 text-black w-45 rounded-md shadow-lg  transform-gpu scale-y-0 -translate-y-2 opacity-0 origin-top group-hover:translate-y-0 group-hover:opacity-100 group-hover:scale-y-100  transition-all duration-400 ">
                  <li className="my-2 px-4 py-1 hover:text-[#81c408] hover:bg-amber-300 cursor-pointer">
                    <span>Trái cây 1</span>
                  </li>
                  <li className="my-2 px-4 py-1 hover:text-[#81c408] hover:bg-amber-300 cursor-pointer">
                    <span>Trái cây 1</span>
                  </li>
                  <li className="my-2 px-4 py-1 hover:text-[#81c408] hover:bg-amber-300 cursor-pointer">
                    <span>Trái cây 1</span>
                  </li>
                </ul>
              </li>
              <li className="hover:text-[#81c408]">Liên hệ</li>
            </ul>
          </div>
          <div className="flex-none flex items-center justify-end">
            <ul className="flex items-center gap-4">
              <li className="rounded-full border-1 border-[#ffc107] p-2 hover:bg-[#ffc107] transition-all duration-300 ease-in-out">
                <Search color="#81c408" strokeWidth={3} />
              </li>
              <li className="relative">
                <ShoppingCart
                  className="text-[#81c408] hover:text-[#679d06]"
                  size={35}
                  strokeWidth={3}
                />
                <span className="absolute -right-3 -top-3 size-6  flex items-center justify-center rounded-full bg-[#ffc107] p-2">
                  3
                </span>
              </li>
              <li>
                <UserRound
                  className="text-[#81c408] hover:text-[#679d06]"
                  size={35}
                  strokeWidth={3}
                />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
