import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaYoutube,FaTwitter} from "react-icons/fa"

const social=[
    {icon:<FaGithub/>, path:"https://github.com/sandeepa2001"},
    {icon:<FaLinkedinIn/>, path:"https://www.linkedin.com/in/kavidu-sandeepa-8874a0241/"},
    /*{icon:<FaYoutube/>, path:""},
    {icon:<FaTwitter/>, path:""},*/
]
const Social = ({containerStyles,iconStyles}) => {
  return <div className={containerStyles}>
    {social.map((item,index)=>{
        return<Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
    
  </div>
}

export default Social