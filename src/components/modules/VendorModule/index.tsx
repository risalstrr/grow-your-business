import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import {
  ChatBubbleBottomCenterTextIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { Vendor } from './interface'
import { Button, TextInput } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { DialogueCard } from '../AuthModule/module-elements/DialogueCard'
import Lottie from 'lottie-react'
import Business5 from 'public/assets/images/business5.json'

export const VendorModule: React.FC = () => {
  const [content, setContent] = useState<string | undefined>()
  const { jwt, user, loading }: IAuthContext = useAuthContext()
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [product, setProduct] = useState('')
  const [vendors, setVendors] = useState<Vendor[]>([])

  const handleCreateVendor = async () => {
    if (name == '' || phoneNumber == '' || product == '') {
      toast.error('Tidak boleh ada data kosong!')
    } else {
      await axios
        .post(
          'https://growbiz-api.fly.dev/vendors/vendor/',
          {
            name: name,
            phone_number: phoneNumber,
            product_name: product,
          }
          // config
        )
        .then((response) => {
          console.log(response.data)
          setProduct('')
          setName('')
          setPhoneNumber('')
          toast.success('Success post data')
        })
    }
  }

  const handleDeleteVendor = async (id: Number) => {
    await axios
      .delete(`https://growbiz-api.fly.dev/vendors/vendor/${id}/delete/`)
      .then((response) => {
        toast.success('Success delete data')
      })
      .catch((err) => {
        toast.error('eror')

        console.log('error')
      })
  }

  useEffect(() => {
    axios
      .get('https://growbiz-api.fly.dev/vendors/vendor/')
      .then((response) => {
        // console.log('risaaa')

        console.log(response.data)
        setVendors(response.data)
        console.log(jwt)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [vendors])

  return (
    <>
      <div className="flex flex-col bg-blue-light relative1 justify-center items-center w-full h-full">
        <div className=" w-10/12 lg:pt-32 md:pt-28 pt-24">
          <ToastContainer />
          <br />

          <div className="flex lg:flex-row flex-col">
            <div className="flex flex-col justify-center items-center">
              <h1 className="py-6 text-3xl  text-display-medium text-purple-light text-center">
                Join Our Community
              </h1>
              <p className="text-center lg:text-xl md:text-xl px-20 text-lg">
                Helping MSMEs in{' '}
                <span className="font-productSansBold text-purple-terong">
                  develop their business
                </span>{' '}
                and{' '}
                <span className="font-productSansBold text-purple-terong">
                  achieve various goals
                </span>{' '}
                , such as increasing sales, expanding market reach, and
                improving operational efficiency.
              </p>
              {/* <Image
                width={350}
                height={350}
                className="p-8 rounded-t-lg"
                src="/assets/images/vendor.svg"
                alt="vendor"
              /> */}

              <Lottie className="w-[450px]" animationData={Business5} />
            </div>
            <DialogueCard>
              <h2>MSME's name</h2>
              <TextInput
                type="text"
                placeholder="Example: Brightness"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />

              <h2>Telephone Number</h2>
              <TextInput
                type="text"
                placeholder="example: 08128167165"
                required={true}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <br />

              <h2>About MSME's</h2>
              <TextInput
                type="text"
                placeholder="Example: This MSME's is about... "
                required={true}
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />
              <br />

              <Button
                className="bg-indigo-500"
                disabled={!jwt}
                onClick={() => handleCreateVendor()}
                // onClick={(e) => router.push('/auth/login')}
              >
                {jwt ? 'Create New Community' : 'Login first!'}
              </Button>
            </DialogueCard>
          </div>
        </div>

        <div className="w-full">
          <h1 className="pt-14 text-3xl text-display-medium text-purple-light text-center">
            MSME's that already have joined
          </h1>
          <p className="text-center lg:text-xl md:text-xl lg:px-32 px-10 text-lg mt-5">
            With the "Vendor" feature, the GrowBiz Application provides an
            opportunity to MSMEs and other service providers to develop business
            them online, reach more customers, and improve operational
            efficiency. This is one way to support economic growth and achieve
            development goals sustainability (SDGs).
          </p>

          <div className="lg:flex lg:flex-row md:grid md:grid-cols-3 sm:grid sm:grid-cols-2 lg:p-10 justify-center mx-auto m-10 gap-5 lg:overflow-x-auto lg:w-10/12 md:w-10/12 w-full">
            {vendors.map((vendor) => (
              <>
                <DialogueCard key={vendor.id} className="m-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {vendor.name}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-productSansBold text-purple-terong">
                      {' '}
                      Phone Number:
                    </span>{' '}
                    {vendor.phone_number}
                  </p>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    <span className="font-productSansBold text-purple-terong">
                      {' '}
                      Products:{' '}
                    </span>{' '}
                    {vendor.product_name}
                  </p>
                  <Button
                    disabled={!jwt}
                    className="bg-indigo-500"
                    onClick={() => handleDeleteVendor(vendor.id)}
                    // onClick={(e) => router.push('/auth/login')}
                  >
                    {jwt ? 'Delete' : 'Login first!'}
                  </Button>
                </DialogueCard>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
