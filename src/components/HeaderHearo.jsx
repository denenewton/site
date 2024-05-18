
const HeaderHearo = ({children, background_url}) => {
  const url = background_url ;
  return (
    <div className='px-5 md:px-5'>
      <div className={"w-full h-[90%] flex items-start bg-gradient-to-t from-white via-transparent to-black px-0 md:px-0 absolute top-0 left-0"}>
      <img
          src={url}
          alt='movies'
          className='w-full h-full  object-cover mix-blend-overlay absolute'
        />
      </div>

      {children}
    </div>
  )
}

export default HeaderHearo