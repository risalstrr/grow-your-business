export interface Incubation{
  id: number
  name: string,
  photo: string,
  business_category: string,
  description: string,
  criteria: string,
  investor: Investor[],
  portfolio: Portfolio[]
}

export interface Investor {
  id: number
  name: string
  photo: string
  description: string
}

export interface Portfolio {
  id: number
  title: string
  photo: string
  description: string
}