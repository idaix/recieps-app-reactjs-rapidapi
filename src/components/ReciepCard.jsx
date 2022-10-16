import {CgTimelapse} from 'react-icons/cg'

const ReciepCard = ({display, content}) => {
  return (
    <div className='mb-5'>
      <div className="relative group overflow-hidden">
        {display?.profiles?.[0]&&
        <div className='absolute bg-black/75 flex items-center gap-1 top-0 left-[-100%] group-hover:left-0 p-1 m-1 rounded-full overflow-hidden text-white duration-300'>
          <img src={display?.profiles?.[0].pictureUrl} alt={display?.profiles?.[0].displayName} className="w-10 h-10 rounded-full" />
          <span>{display?.profiles?.[0].displayName}</span>
        </div>}
        <img loading='lazy' src={display?.images?.[0]} alt={display?.displayName} className='w-full h-auto' />
        {content?.details?.totalTime&&<span className="absolute bottom-0 right-0 bg-primary/30 text-black/80 px-3 m-1 rounded-full flex items-center gap-1"><CgTimelapse />{content?.details?.totalTime}</span>}
      </div>
      <a href={display?.source?.sourceRecipeUrl} target='_blank'><h3 className="text-xl font-semibold text-gray-700 hover:text-primary">{display?.displayName}</h3></a>
    </div>
  )
}

export default ReciepCard