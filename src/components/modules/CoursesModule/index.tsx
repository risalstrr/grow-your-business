import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import './interface'
import { useAuthContext } from 'src/components/contexts/AuthContext'
import { IAuthContext } from 'src/components/contexts/AuthContext/interface'
import { Button, TextInput } from 'flowbite-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Course, Lesson } from './interface'
import { LessonCard } from './module-elements/LessonCard'
import Lottie from 'lottie-react'
import Business2 from 'public/assets/images/business2.json'

export const CoursesModule: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const { jwt, user, loading }: IAuthContext = useAuthContext()
  const [typeCourse, setTypeCourse] = useState<Course[]>([])

  const [course, setCourse] = useState<Course>()
  const [active, setActive] = useState(false)

  const [lessons, setLessons] = useState<Lesson[]>([])
  const [lesson, setLesson] = useState<Lesson>()

  const [leson, setLeson] = useState<Lesson>()
  const courseState = async (id: number) => {
    await axios
      .get(`https://growbiz-api.fly.dev/courses/courses/${id}/`)
      .then((response) => {
        setCourse(response.data)
        setActive(!active)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const lessonState = async (id: number) => {
    await axios
      .get(`https://growbiz-api.fly.dev/courses/lessons/${id}/`)
      .then((response) => {
        setLeson(response.data)
        // setActive(!active);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  // sisa detail dari course aja

  useEffect(() => {
    axios
      .get('https://growbiz-api.fly.dev/courses/courses/')
      .then((response) => {
        console.log('risaaa')
        console.log(response.data)
        setCourses(response.data)
        setTypeCourse(response.data)
      })
      .catch((error) => {
        console.error(error)
      })

    axios
      .get('https://growbiz-api.fly.dev/courses/lessons/')
      .then((response) => {
        console.log('risaaa')
        console.log(response.data)
        setLessons(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [courses, loading])

  return (
    <>
      <div className="flex flex-col bg-blue-light relative1 justify-center items-center w-full h-full">
        <div className=" w-10/12 lg:pt-10 md:pt-28 pt-24">
          <ToastContainer />

          <div className="flex lg:flex-row flex-col justify-center items-center">
            <div className="flex flex-col sm:mt-14">
              <h1 className="text-grey-dark lg:text-left text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
                GrowBiz Courses
              </h1>
              <br />
              <p className="text-left lg:text-xl md:text-xl text-lg mt-5">
                The “Courses” feature in GrowBiz has great potential to empower
                MSME owners and their employees with the knowledge and skills
                necessary to grow their businesses. This is an important step in
                supporting economic growth and achieving sustainable development
                goals.
              </p>
              <br />
              <br />
              <Button
                className="flex bg-purple-light w-[50%] hover:text-purple-light hover:bg-purple-lightest md:mr-auto md:mx-0 mx-auto"
                href="#about"
              >
                Let's explore!
              </Button>
            </div>
            <Lottie
              className="w-[2800px] h-[700px]"
              animationData={Business2}
            />
            {/* <Image
              width={350}
              height={350}
              className="rounded-t-lg relative drop-shadow-md w-[60%] lg:w-[48%] mx-auto lg:p-12 p-5 md:mt-20 rounded-2xl"
              src="/assets/images/courses.svg"
              alt="courses"
            /> */}
          </div>
        </div>

        <div className="w-full mt-14">
          <h1 className="text-purple-light text-center lg:text-display-medium text-display-small font-bold mr-3 md:my-0 my-auto">
            Courses
          </h1>
          <p className="text-center lg:text-xl md:text-xl lg:px-32 px-10 text-lg mt-5">
            The “Courses” feature in GrowBiz has great potential to empower MSME
            owners and their employees with the knowledge and skills necessary
            to grow their businesses. This is an important step in supporting
            economic growth and achieving sustainable development goals.
          </p>
          <div className="grid grid-cols-1 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-8">
            {/* {workshops ? (
              workshops?.map((workshop: WorkshopInterface, key: number) => (
                <WorkshopCard
                  key={key}
                  workshop={workshop}
                  handler={toast.error}
                />
              ))
            ) : (
              <Spinner />
            )} */}
          </div>
        </div>

        <div className="flex py-6 lg:px-20 md:px-20 px-5 w-full justify-around gap-x-2">
          <TextInput
            id="searchQuery"
            type="text"
            placeholder="Example: Business"
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

        {typeCourse.map((type) => (
          <>
            <button
              key={type.id}
              onClick={() => courseState(type.id)}
              className="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {type.name}
              </span>
            </button>
          </>
        ))}

        <div className="flex flex-wrap gap-5 justify-center mb-32 mt-20">
          {!active &&
            lessons?.map((lesson: Lesson, key: number) => (
              <LessonCard key={key} lesson={lesson} handler={toast.error} />
            ))}
        </div>

        <div className="flex flex-row gap-5 justify-center mb-32 mt-20">
          {active &&
            course?.lesson?.map((item) => (
              <>
                <div
                  onPlay={() => {
                    lessonState(item.id)
                  }}
                  key={item.id}
                  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <h1>{leson?.title}</h1>
                  <h1>{leson?.creator}</h1>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  )
}
