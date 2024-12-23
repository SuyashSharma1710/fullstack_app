import React from 'react'

const Mainscreen = ({title, children}) => {
  return (
    <div>

        <div className='flex flex-col gap-4'>
            <div >
                {title && (
                    <h1 className='text-5xl font-thin font-oswald text-blue-500 text-center'>{title}</h1>
                )}
            </div>
            <hr className='bg-blue-100 h-[2px]' />
            <div>
                {children}
            </div>
        </div>
      
    </div>
  )
}

export default Mainscreen
