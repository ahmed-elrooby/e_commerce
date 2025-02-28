import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";
import { MdOutlineVideogameAsset } from "react-icons/md";

export const categories =[
    {id:0,title:"Phones",icon:<SlScreenSmartphone size={56}/>,href:"/Phones"},
    {id:1,title:"Computers",icon:<HiOutlineComputerDesktop size={56}/>,href:"/Computers"},
    {id:2,title:"SmartWatch",icon:<TbDeviceWatchStats size={56}/>,href:"/SmartWatch"},
    {id:3,title:"Camera",icon:<CiCamera size={56}/>,href:"/Camera"},
    {id:4,title:"HeadPhones",icon:<PiHeadphones size={56}/>,href:"/HeadPhones"},
    {id:5,title:"Gaming",icon:<MdOutlineVideogameAsset size={56}/>,href:"/Gaming"},
]