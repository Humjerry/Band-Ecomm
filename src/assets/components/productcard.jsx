import React from 'react'
import ItemImg from "../images/firstshow/product-cover-5 (2).png"


function Productcard({item}) {
  const notify = () => toast("Wow so easy!");
  return (
    <div className='text-center bg-lightgray shadow-lg w-[30vmin] h-[40vmin]' onClick={()=>(
      console.log(item)
    )}>
     <div className='h-[60%]'>
<img src={ItemImg} alt="" />
     </div>
     <div>
      <h2 className='font-bold font-inter'>Graphic Design</h2>
      <p>English Department</p>
      <div className="cost flex items-center justify-center gap-1 font-bold">
      <h2>5 items</h2>
<h2 className='text-emerald'>$16.48</h2>
</div>
     </div>

    </div>
  )
}

export default Productcard
