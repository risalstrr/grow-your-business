export interface Course {
    id: number
    name: string
    photo: string
    lesson: Lesson[]
}
  
export interface Lesson {
    id: number
    title: string
    photo:string
    description: string
    creator: string
    rating: number
    price: number
    class_start: Date
    class_end: Date
    total_mentee: number
    link_meeting: string
    pdf_book: string
    join_status: boolean
  }

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