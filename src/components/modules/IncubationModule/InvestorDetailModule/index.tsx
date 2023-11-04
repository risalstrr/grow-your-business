import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Incubation, Investor, Portfolio } from '../interface'
import { Breadcrumb, Button } from 'flowbite-react'
import Image from 'next/image'
// import { CartFooter } from '@elements'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { ToastContainer, toast } from 'react-toastify'

export const InvestorDetailModule: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  const [investor, setInvestor] = useState<Investor | null>()
  const [portfolio, setPortfolio] = useState<Portfolio | null>()

  const [isZoomedIn, setIsZoomedIn] = useState<boolean>(true)
  const { jwt, loading }: IAuthContext = useAuthContext()

  const [incubation, setIncubation] = useState<Incubation | null>(null)

  const fetchPortfolio = async () => {
    if (router.isReady) {
      incubation?.portfolio.map((inv) =>
        axios
          .get(
            `https://growbiz-api.fly.dev/incubations/incubation/portfolio/${inv}/`
          )
          .then((response) => {
            // console.log('risaaa')
            console.log(inv)
            console.log(response.data[0])
            setPortfolio(response.data[0])
          })
          .catch((error) => {
            console.error(error)
          })
      )
    }
  }

  async function fetchIncubation(): Promise<Incubation[]> {
    console.log(id, 'idnya')
    const res = await axios.get(
      `https://growbiz-api.fly.dev/incubations/incubation/${id}/`
    )
    return res.data
  }

  // if (router.isReady && !product && !loading) {
  if (router.isReady) {
    fetchIncubation()
      .then((data) => {
        toast.success('bersaskajskaj')
        console.log('berhashill')
        console.log(data[0].portfolio)
        setIncubation(data[0])
        fetchPortfolio()
        console.log(portfolio?.photo)
      })
      .catch((err) => {
        alert(err)
        setIncubation(null)
      })
  }

  // useEffect(() => {
  //   axios
  //     .get('https://growbiz-api.fly.dev/vendors/vendor/')
  //     .then((response) => {
  //       // console.log('risaaa')
  //       console.log(response.data)
  //       setVendors(response.data)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }, [vendors])
  return (
    <>
      <main className="relative w-full min-h-screen 2xl:px-[20vw] lg:py-32 md:py-28 py-24 lg:px-32 md:px-16 px-3 bg-slate-50">
        <Breadcrumb className="lg:mb-12 mb-8">
          <Breadcrumb.Item href="#">Katalog Portfolio</Breadcrumb.Item>
          <Breadcrumb.Item>{portfolio?.title || '...'}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="md:flex md:flex-row lg:gap-x-12 md:gap-x-8">
          {/* Left Hand Side */}
          <div>
            <div className="w-[90vw] h-[90vw] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
              <Image
                src={portfolio ? portfolio.photo : ''}
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

          {incubation !== null ? (
            <>
              <div className="max-w-[90vw] md:max-w-[60%]">
                <p className="text-sm font-bold bg-blue-100 border border-neutral-200 w-fit px-10 py-1 rounded-xl">
                  {portfolio?.title}
                </p>
                <h1 className="text-headline-medium md:text-display-medium">
                  portfolio {portfolio?.title || ''}
                </h1>
                <p className="mb-8">
                  <span className="text-title-large md:text-headline-small mr-[0.5rem]">
                    {portfolio?.title}
                  </span>
                  <span>stok {portfolio?.description}</span>
                </p>
                <p>{portfolio?.description}</p>
                <div className="mt-8"></div>

                <p className="text-sm">{portfolio?.title}</p>
                <p className="text-sm">{portfolio?.title}</p>
              </div>
            </>
          ) : (
            ''
          )}

          {/* <div>{investor?.description}</div> */}

          {/* <div>
            {incubation?.investor.map((inv) => (
              fetchInvestor
            ))}
          </div> */}

          {/* Right Hand Side */}
          {/* <div className="max-w-[90vw] md:max-w-[60%]">
            <p className="text-sm font-bold bg-blue-100 border border-neutral-200 w-fit px-10 py-1 rounded-xl">
              {investor?.name}
            </p>
            <h1 className="text-headline-medium md:text-display-medium">
              Investor {investor?.name || ''}
            </h1>
            <p className="mb-8">
              <span className="text-title-large md:text-headline-small mr-[0.5rem]">
                {investor?.name}
              </span>
              <span>stok {investor?.description}</span>
            </p>
            <p>{investor?.description}</p>
            <div className="mt-8"></div>

            <p className="text-sm">{investor?.name}</p>
            <p className="text-sm">{investor?.criteria}</p>
          </div> */}
        </div>
      </main>
      {/* <CartFooter router={router.isReady} /> */}
    </>
  )
}
