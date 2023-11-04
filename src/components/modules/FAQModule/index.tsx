import { Accordion } from 'flowbite-react'
import { faqs } from './constant'

export const FAQModule: React.FC = () => {
  return (
    <>
      <div className="relative w-full min-h-screen 2xl:px-[20vw] lg:py-20 md:py-20 py-24 lg:px-32 md:px-16 ">
        <h1 className="flex w-full justify-center lg:text-display-medium md:text-display-small text-display-small pb-3 text-purple-light leading-none mt-12 mb-5">
          Frequently Asked Questions
        </h1>
        <Accordion alwaysOpen={true}>
          {faqs.map((item, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title className="text-black">
                <p>{item.question}</p>
              </Accordion.Title>
              <Accordion.Content className="bg-blue-light">
                <p>{item.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </>
  )
}
