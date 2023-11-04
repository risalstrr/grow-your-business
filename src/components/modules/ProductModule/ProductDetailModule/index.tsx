import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Product } from '../interface'
import { Breadcrumb, Button } from 'flowbite-react'
import Image from 'next/image'
// import { CartFooter } from '@elements'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { ToastContainer, toast } from 'react-toastify'

export const ProductDetailModule: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const [product, setProduct] = useState<Product | null>(null)
  const [isZoomedIn, setIsZoomedIn] = useState<boolean>(true)
  const { jwt, loading }: IAuthContext = useAuthContext()

  async function fetchProducts(): Promise<Product[]> {
    console.log(id, 'idnya')
    const res = await axios.get(
      `https://growbiz-api.fly.dev/products/product/${id}/`
    )
    return res.data
  }

  // if (router.isReady && !product && !loading) {
  if (router.isReady && !product) {
    fetchProducts()
      .then((data) => {
        toast.success('bersaskajskaj')
        console.log('berhashill')
        console.log(data[0].description)
        setProduct(data[0])
      })
      .catch((err) => {
        alert(err)

        setProduct(null)
      })
  }

  // useEffect(() => {
  //   if (id !== undefined) {
  //     fetchProducts()
  //       .then((data) => {
  //         setProduct(data)
  //       })
  //       .catch((err) => {
  //         alert(err)
  //         setProduct(null)
  //       })
  //   }
  // }, [id])
  return (
    <>
      <main className="relative w-full min-h-screen 2xl:px-[20vw] lg:py-32 md:py-28 py-24 lg:px-32 md:px-16 px-3 bg-slate-50">
        <Breadcrumb className="lg:mb-12 mb-8">
          <Breadcrumb.Item href="#">Katalog Product</Breadcrumb.Item>
          <Breadcrumb.Item>{product?.name || '...'}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="md:flex md:flex-row lg:gap-x-12 md:gap-x-8">
          {/* Left Hand Side */}
          <div>
            <div className="w-[90vw] h-[90vw] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
              <Image
                src={product ? product.photo : ''}
                width={350}
                height={350}
                alt="foto"
                className={`${
                  isZoomedIn ? `rounded-2xl object-cover w-full h-full` : ''
                }`}
              />
            </div>
            <div className="mx-auto w-fit mt-4">
              <Button.Group>
                <Button
                  onClick={(e) => setIsZoomedIn(false)}
                  outline
                  color={'gray'}
                  disabled={!isZoomedIn}
                >
                  <Image
                    src="/assets/images/icons/zoomout.png"
                    width={20}
                    height={20}
                    alt="zoom out"
                  />
                </Button>
                <Button
                  onClick={(e) => setIsZoomedIn(true)}
                  outline
                  color={'gray'}
                  disabled={isZoomedIn}
                >
                  <Image
                    src="/assets/images/icons/zoomin.png"
                    width={20}
                    height={20}
                    alt="zoom in"
                  />
                </Button>
              </Button.Group>
            </div>
          </div>

          {/* Right Hand Side */}
          <div className="max-w-[90vw] md:max-w-[60%]">
            <p className="text-sm font-bold bg-blue-100 border border-neutral-200 w-fit px-10 py-1 rounded-xl">
              {product?.name}
            </p>
            <h1 className="text-headline-medium md:text-display-medium">
              Produk {product?.name || ''}
            </h1>
            <p className="mb-8">
              <span className="text-title-large md:text-headline-small mr-[0.5rem]">
                Rp. {product?.price}
              </span>
              <span>stok {product?.stock}</span>
            </p>
            <p>{product?.description}</p>
            <div className="mt-8"></div>

            <p className="text-sm">
              Tanggal kadaluwarsa stok: {product?.description}
            </p>
            <p className="text-sm">Sisa stok sekarang: {product?.stock}</p>
          </div>
        </div>
      </main>
      {/* <CartFooter router={router.isReady} /> */}
    </>
  )
}
