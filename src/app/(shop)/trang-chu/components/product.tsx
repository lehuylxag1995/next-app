import { Raleway } from 'next/font/google'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ShoppingBasket } from 'lucide-react'
import Image from 'next/image'

const raleway = Raleway({
  weight: '600',
  subsets: ['latin']
})

export default function Product() {
  return (
    <>
      <Tabs defaultValue="allProduct" className="px-30">
        {/* Tabs Menu */}
        <div className="flex items-center mb-10">
          {/* Title */}
          <div className="basis-4/12">
            <span
              className={`${raleway.className} font-[600] text-[2.5rem] text-[#45595b]`}
            >
              Sản phẩm chúng tôi
            </span>
          </div>
          {/* Tabs */}
          <div className="basis-8/12 flex justify-end">
            <TabsList className="w-180 h-auto gap-4 bg-white">
              <TabsTrigger
                className="data-[state=active]:bg-[#FFB524] data-[state=active]:text-white text-[#45595b] bg-[#f4f6f8] py-2 px-4 text-[16px] rounded-full"
                value="allProduct"
              >
                Tất cả sản phẩm
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#FFB524] data-[state=active]:text-white text-[#45595b] bg-[#f4f6f8] py-2 px-4 text-[16px] rounded-full"
                value="vegetables"
              >
                Rau
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#FFB524] data-[state=active]:text-white text-[#45595b] bg-[#f4f6f8] py-2 px-4 text-[16px] rounded-full"
                value="fruits"
              >
                Trái cây
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#FFB524] data-[state=active]:text-white text-[#45595b] bg-[#f4f6f8] py-2 px-4 text-[16px] rounded-full"
                value="bread"
              >
                Bánh mỳ
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#FFB524] data-[state=active]:text-white text-[#45595b] bg-[#f4f6f8] py-2 px-4 text-[16px] rounded-full"
                value="meat"
              >
                Thịt
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="">
          <TabsContent value="allProduct">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-2.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-3.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-4.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-6.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-5.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-5.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-5.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="vegetables">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-2.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-3.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-3.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="fruits">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="bread">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="meat">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="group/image text-center flex flex-col border-1 border-[#ffb524] rounded-xl overflow-hidden  hover:shadow-[0_0_70px_rgba(0,0,0,0.3)] transition-all duration-500">
                <div className="relative overflow-hidden ">
                  <Image
                    width={0}
                    height={0}
                    src="/img/fruite-item-1.jpg"
                    alt="Sp1"
                    sizes="100vw"
                    className="group-hover/image:scale-120 transition-transform duration-500 w-full h-auto"
                  />
                  <div className="absolute top-3 left-3 px-4 py-1 bg-[#ffb524] rounded-xl text-white font-medium">
                    Trái cây
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-6">
                  {/* Tiêu đề */}
                  <p
                    className={`text-[#45595b] ${raleway.className} font-[1.5rem] text-2xl`}
                  >
                    Quả nho
                  </p>
                  {/* Mô tả  */}
                  <p className="indent-6 text-[#747d88] line-[1.5] text-[16px] font-[400] px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit sed
                    do eiusmod te incididunt
                  </p>
                  {/* Giá + nút thêm giỏ hàng */}
                  <div className="flex justify-center items-center gap-5">
                    <p className={`text-[#45595b] text-[20px] font-medium`}>
                      4.99/kg VNĐ
                    </p>

                    <button className="group hover:bg-[#ffb524] flex border-1 border-[#ffb524] rounded-full text-[#81c408] font-medium p-2 transition-all duration-500 ease-in-out">
                      <ShoppingBasket className="group-hover:text-[#81c408] transition-all duration-500 ease-in-out" />
                      <p className="group-hover:text-white transition-all duration-500 ease-in-out">
                        Thêm giỏ hàng
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </>
  )
}
