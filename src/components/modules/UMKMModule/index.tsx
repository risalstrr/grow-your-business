import 'react-toastify/dist/ReactToastify.css'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import Image from 'next/image'

import { ALink } from '@elements'
import { TextInput, Button, Spinner } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { DialogueCard } from '../AuthModule/module-elements/DialogueCard'
import { IRegisterData } from '../AuthModule/interface'
import { EMPTY_REGISTER_DATA } from '../AuthModule/constant'
import axios from 'axios'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const UMKMModule: React.FC = () => {
  const [data, setData] = useState<IRegisterData>(EMPTY_REGISTER_DATA)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const { jwt, user, loading }: IAuthContext = useAuthContext()
  const [name, setName] = useState('')
  const [storeContact, setStoreContact] = useState('')
  const [NIB, setNIB] = useState('')
  const [BLI, setBLI] = useState('')
  const [modalAwal, setModalAwal] = useState('')
  const [storeChannel, setStoreChannel] = useState('')
  const [storeChannelPhoto, setStoreChannelPhoto] = useState('')
  const [milestone, setMilestone] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [challenges, setChallenges] = useState('')

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const UMKMProfileSubmit = async () => {
    if (
      name == '' ||
      storeContact == '' ||
      NIB == '' ||
      BLI == '' ||
      modalAwal == '' ||
      storeChannel == '' ||
      milestone == '' ||
      businessType == '' ||
      challenges == ''
    ) {
      toast.error('Tidak boleh ada data kosong!')
    } else {
      await axios
        .post(
          `https://growbiz-api.fly.dev/umkm/profile/`,
          {
            store_name: name,
            store_contact: storeContact,
            nomor_induk_berusaha: NIB,
            kode_BLI: BLI,
            beginning_capital: modalAwal,
            store_channel: storeChannel,
            store_channel_photo: storeChannelPhoto,
            store_milestone: milestone,
            business_type: businessType,
            challenges: challenges,
          },
          config
          // config
        )
        .then((response) => {
          setName('')
          setStoreContact('')
          setNIB('')
          setBLI('')
          setModalAwal('')
          setStoreChannel('')
          setStoreChannelPhoto('')
          setMilestone('')
          setBusinessType('')
          setChallenges('')
          toast.success('Success post data')
          // console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    axios
      .get('https://growbiz-api.fly.dev/umkm/profile/')
      .then((response) => {
        console.log('risaaa')
        // console.log(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  })

  return (
    <>
      <div className=" bg-blue-light relative w-full py-10 lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <ToastContainer />
        <h1 className="text-3xl text-center text-purple-light">
          Complete your UMKM profile
        </h1>
        <br />
        <DialogueCard>
          <h2>Store Name</h2>
          <TextInput
            id="name"
            type="name"
            placeholder="Contoh: Toko Berkah"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required={true}
          />
          <br />

          <h2>Store Contact</h2>
          <TextInput
            id="contact"
            type="text"
            placeholder="Contoh: 081281621122 (TIDAK BOLEH LEBIH DARI 12 ANGKA)"
            onChange={(e) => setStoreContact(e.target.value)}
            value={storeContact}
            required={true}
          />
          <br />

          <h2>Nomor Induk Berusaha</h2>
          <TextInput
            id="NIB"
            type="text"
            placeholder="Contoh: 2102810281"
            onChange={(e) => setNIB(e.target.value)}
            value={NIB}
            required={true}
          />
          <br />

          <h2>Kode BLI</h2>
          <TextInput
            id="BLI"
            type="text"
            placeholder="Contoh: 2102810281"
            onChange={(e) => setBLI(e.target.value)}
            value={BLI}
            required={true}
          />
          <br />

          <h2>Modal Awal Usaha</h2>
          <TextInput
            id="Modal"
            type="text"
            placeholder="Contoh: 10000000"
            onChange={(e) => setModalAwal(e.target.value)}
            value={modalAwal}
            required={true}
          />
          <br />

          <h2>Store Channel</h2>
          <TextInput
            id="channel"
            type="text"
            placeholder="Contoh: Tokopedia"
            onChange={(e) => setStoreChannel(e.target.value)}
            value={storeChannel}
            required={true}
          />
          <br />

          <h2>Store Milestone</h2>
          <TextInput
            id="milestone"
            type="text"
            placeholder="Contoh: Juara 1"
            onChange={(e) => setMilestone(e.target.value)}
            value={milestone}
            required={true}
          />
          <br />

          <h2>Business Type</h2>
          <TextInput
            id="milestone"
            type="text"
            placeholder="Contoh: Makanan"
            onChange={(e) => setBusinessType(e.target.value)}
            value={businessType}
            required={true}
          />
          <br />

          <h2>Challenges</h2>
          <TextInput
            id="challenges"
            type="text"
            placeholder="Contoh: Kompetitor"
            onChange={(e) => setChallenges(e.target.value)}
            value={challenges}
            required={true}
          />
          <br />

          <div className="flex flex-row gap-x-8 justify-end">
            <Button
              disabled={!jwt}
              onClick={() => UMKMProfileSubmit()}
              className=" bg-indigo-500"
            >
              {jwt ? 'Submit' : 'Login first!'}
            </Button>
          </div>
        </DialogueCard>
      </div>
    </>
  )
}
