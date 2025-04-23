import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const MenuLeft = () => {
  const MenuItems = [
    {name : "SecurityHub",
     submenu:[
      {submenu_name : "Summary",},
      {submenu_name : "Controls",},
      {submenu_name : "Security standards",},
      {submenu_name : "Insights",},
      {submenu_name : "Findings",},
      {submenu_name : "Integrations ",}
     ]
    },
    {name : "Management",
      submenu:[
        {submenu_name : "Automations",},
        {submenu_name : "Custom Actions",},
       ]
    },
    {name : "Settings",
      submenu:[
        {submenu_name : "General",},
        {submenu_name : "Regions",},
        {submenu_name : "Configurations ",},
        {submenu_name : "Usage",},
       ]
    },
  ]
  return (
    <>
    
    
    <div className='left bg-[#151515] w-2/10 border-r-1 h-full border-[#585757] p-10 overflow-y-scroll overflow-x-hidden'>
    <div className='hamburger'>
        <GiHamburgerMenu className='w-10 h-10 text-white' />
        </div>
     {
       <div className="main-content">
        {
        MenuItems.map((item)=>{
          return(
            <div className='menuitems flex flex-col gap-3'>
         
                <p key={item.name} className='text-2xl font-semibold text-white mt-2'>{item.name}</p>
                {
                 item.submenu && item.submenu.map((subitem)=>{
                   return <p key={subitem.submenu_name} className=' text-l font-medium text-white'>{subitem.submenu_name }</p>
                 })


                }
          
          <br className='mt-1' />
          <hr className='text-amber-300' />
          <br />
          </div>
          
          )
       }
      )
    }
       </div>
     }
    
     
    
    </div>
    
    
    
    </>
  )
}

export default MenuLeft
