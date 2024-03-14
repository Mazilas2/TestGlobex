'use client'
import React from 'react'

interface CardProps {
  name: string
  phone: string
  email: string
  date: string
  position: string
  department: string
}

export default function Card(CardProps: CardProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button className="w-full h-[314px] rounded-2xl shadow-custom p-6 flex flex-col gap-6" onClick={toggleModal}>
        <h2 className='text-2xl font-bold text-left text-[#262C40]'>
          {CardProps.name}
        </h2>
        <div className='flex gap-3 flex-col [&>div]:flex [&>div]:gap-[14px] font-normal text-sm text-[#8189A3]'>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17 1H7C6.44775 1 6 1.44922 6 2V2.5H18V2C18 1.70312 17.8701 1.4375 17.6641 1.25391C17.4873 1.09375 17.2549 1 17 1ZM5 2.5V3.5V18.5V19.5V22C5 23.1055 5.89551 24 7 24H17C17.6602 24 18.2456 23.6797 18.6099 23.1875C18.855 22.8555 19 22.4453 19 22V19.5V18.5V3.5V3V2C19 0.894531 18.1045 0 17 0H7C6.5498 0 6.13428 0.148438 5.7998 0.398438C5.31396 0.761719 5 1.34375 5 2V2.5ZM6 3.5V18.5H18V3.5H6ZM6 22V19.5H18V22C18 22.5508 17.5522 23 17 23H7C6.69092 23 6.41455 22.8594 6.23145 22.6367C6.08691 22.4648 6 22.2422 6 22ZM13 21C13 21.5508 12.5522 22 12 22C11.4478 22 11 21.5508 11 21C11 20.4492 11.4478 20 12 20C12.5522 20 13 20.4492 13 21Z" fill="#432EAB" />
            </svg>
            {CardProps.phone}
          </div>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M23 7V17C23 17.5523 22.5523 18 22 18L2 18C1.44772 18 0.999999 17.5523 0.999999 17L1 7C1 6.89068 1.01754 6.78546 1.04996 6.687L10.4171 14.351C11.338 15.1045 12.6624 15.1045 13.5833 14.351L22.9501 6.68727C22.9825 6.78565 23 6.89078 23 7ZM22.1891 6.01786L12.9501 13.5771C12.3975 14.0292 11.6029 14.0292 11.0504 13.5771L1.81123 6.01779C1.87236 6.00611 1.93547 6 2 6L22 6C22.0647 6 22.1279 6.00614 22.1891 6.01786ZM22 5C23.1046 5 24 5.89543 24 7V17C24 18.1046 23.1046 19 22 19L2 19C0.895429 19 0 18.1046 0 17V7C0 5.89543 0.895432 5 2 5H22Z" fill="#432EAB" />
            </svg>
            {CardProps.email}
          </div>
        </div>
      </button>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-10">
          <div className="flex flex-col bg-white w-[500px] h-[468px] rounded-2xl gap-y-10 p-6 shadow-custom">
            <div className='flex justify-between items-center h-[30px]'>
              <h2 className='text-2xl font-bold text-left text-[#262C40]'>
                {CardProps.name}
              </h2>
              <button onClick={toggleModal}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z" fill="black" />
                </svg>
              </button>
            </div>
            <table>
              <tbody className='[&>tr>td:nth-child(even)]:text-[#8189A3] [&>tr>td]:align-text-top [&>tr>td:nth-child(odd)]:w-[177px] [&>tr>td]:h-9'>
                <tr>
                  <td>Телефон</td>
                  <td>{CardProps.phone}</td>
                </tr>
                <tr>
                  <td>Почта</td>
                  <td>{CardProps.email}</td>
                </tr>
                <tr>
                  <td>Дата приема</td>
                  <td>{CardProps.date}</td>
                </tr>
                <tr>
                  <td>Должность</td>
                  <td>{CardProps.position}</td>
                </tr>
                <tr>
                  <td>Подразделение</td>
                  <td>{CardProps.department}</td>
                </tr>
              </tbody>
            </table>
            <div className='flex flex-col font-normal gap-3'>
              <h3 className='text-[18px] leading-[24px]'>Дополнительная информация:</h3>
              <p className='text-[16px] leading-[18px] text-[#8189A3]'>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
