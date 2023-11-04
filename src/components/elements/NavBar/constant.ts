import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  WalletIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  UserIcon,
  TruckIcon,
  IdentificationIcon,
  QuestionMarkCircleIcon,
  ComputerDesktopIcon
  
  
} from '@heroicons/react/24/outline'

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/Community',
    name: 'Meet Communities',
    icon: IdentificationIcon,
  },
  {
    path: '/JobReady',
    name: 'Job Ready Network',
    icon: ComputerDesktopIcon,
  },
  {
    path: '/Forum',
    name: 'Forum Discussion',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    path: '/Courses',
    name: 'Courses',
    icon: AcademicCapIcon,
  },
  {
    path: '/Workshops',
    name: 'Workshops',
    icon: GlobeAltIcon,
  },
  // {
  //   path: '/UMKM',
  //   name: 'UMKM',
  //   icon: UserIcon,
  // },
  {
    path: '/Wallet',
    name: 'Wallet',
    icon: WalletIcon,
  },
  {
    path: '/Products',
    name: 'Products',
    icon: TruckIcon,
  },
 
 
]
