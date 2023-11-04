import axios from 'axios'
import { Button, Spinner, TextInput } from 'flowbite-react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Product } from './interface'
import { ProductCard } from './module-elements/ProductCard'
import Image from 'next/image'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ALink } from '@elements'

export const ProductModule: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined)
  const [products, setProducts] = useState<Product[] | null>()
  const { loading }: IAuthContext = useAuthContext()

  const router = useRouter()

  function fetchProducts(): Promise<any> {
    return axios
      .get('https://growbiz-api.fly.dev/products/product')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      })
  }

  if (router.isReady && !products && !loading) {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => setProducts([]))
  }

  return (
    <>
      <main className="relative w-full min-h-screen 2xl:px-[20vw] lg:py-20 md:py-20 py-24 lg:px-32 md:px-16 px-3 text-sm bg-slate-50">
        <ToastContainer />
        <h1 className="py-12 text-display-medium text-purple-light text-center">
          Products
        </h1>
        <div className="flex py-6 w-full justify-around gap-x-2">
          <TextInput
            id="searchQuery"
            type="text"
            placeholder="Example: Spidol"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="w-full"
          />
          <Button className="bg-purple-light">
            <Image
              src="/assets/images/icons/search.svg"
              width={24}
              height={24}
              alt="search"
            />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-8">
          {products ? (
            products?.map((product: Product, key: number) => (
              <ProductCard key={key} product={product} handler={toast.error} />
            ))
          ) : (
            <Spinner />
          )}
        </div>

        <h1 className="py-12 text-display-medium text-purple-light text-center">
          Testimoni
        </h1>

        <div className="grid grid-cols-1 justify-center items-center bg-slate-50 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-8">
          <div
            className={`
         
        relative bg-white  drop-shadow-md w-[250px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
          >
            <Image
              src="/assets/images/risaa.jpg"
              alt="foto"
              width={500}
              height={500}
              className="object-cover w-[250px] h-[200px] rounded-t-2xl"
            />
            <div className="flex flex-col gap-x-6 px-6 pt-6">
              <h1 className="text-title-large text-center">Risa Lestari</h1>

              <p className="mt-3 mb-6 text-center">
                "GrowBiz has been an invaluable business partner for me. With
                access to tools, training and community amazing entrepreneur, I
                have managed to scale up my business sales significantly. Thank
                you GrowBiz!"
              </p>
            </div>
          </div>

          <div
            className={`
         
        relative bg-white  drop-shadow-md w-[250px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
          >
            <Image
              src="/assets/images/angga.png"
              alt="foto"
              width={500}
              height={500}
              className="object-cover w-[250px] h-[200px] rounded-t-2xl"
            />
            <div className="flex flex-col gap-x-6 px-6 pt-6">
              <h1 className="text-title-large text-center">
                Nayyara Airlangga
              </h1>
              <p className="mt-3 mb-6 text-center">
                "I initially had difficulty managing my business finances,
                however GrowBiz has helped me in automating the process finances
                and reduce risk. This really helps me focus on business growth."
              </p>
            </div>
          </div>

          <div
            className={`
         
        relative bg-white  drop-shadow-md w-[250px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
          >
            <Image
              src="/assets/images/ramanti.png"
              alt="foto"
              width={500}
              height={500}
              className="object-cover w-[250px] h-[200px] rounded-t-2xl"
            />
            <div className="flex flex-col gap-x-6 px-6 pt-6">
              <h1 className="text-title-large text-center">Ramanti Prajna</h1>
              <p className="mt-3 mb-6 text-center">
                “I have taken several online courses on GrowBiz and this really
                enriched my knowledge about management business. Their training
                resources are top quality."
              </p>
            </div>
          </div>

          <div
            className={`
         
        relative bg-white  drop-shadow-md w-[250px] mx-auto rounded-2xl 
        transform hover:-translate-y-[0.5rem] hover:shadow-xl cursor-pointer
        `}
          >
            <Image
              src="/assets/images/john.jpeg"
              alt="foto"
              width={500}
              height={500}
              className="object-cover w-[250px] h-[200px] rounded-t-2xl"
            />
            <div className="flex flex-col gap-x-6 px-6 pt-6">
              <h1 className="text-title-large text-center">John Doe</h1>
              <p className="mt-3 mb-6 text-center">
                “GrowBiz gave me the opportunity to connect with investors and
                get the capital I need to grow my business. I am very grateful
                for their support."
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* <CartFooter router={router.isReady} /> */}
    </>
  )
}
