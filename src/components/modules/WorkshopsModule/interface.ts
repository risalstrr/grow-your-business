export interface WorkshopInterface {
  id: number,
  title: string,
  description: string,
  date: Date,
  price: string,
  registration: string,
  photo: string,
  places: string,
  link_meeting: string,
  contact_person: number,
  speaker_name: string,
  speaker_description: string
}

export interface Vendor {
  id: number
  name: string
  phone_number: string
  product_name: string
}