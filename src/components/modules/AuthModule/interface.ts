export interface ILoginData {
  email: string
  password: string
}

export interface IRegisterData {
  email: string
  name: string
  phone: string
  birth_date: string | number | readonly string[] | undefined
  address: string
  password: string
  password2: string
}
