import Image from "next/image";

import "../app/globals.css";
import { RiBuilding2Fill, RiBuilding2Line, RiCheckLine } from "react-icons/ri";
import { IoCheckmarkCircleOutline, IoDocumentTextOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdEventAvailable, MdOutlineEventAvailable, MdOutlineInventory2 } from "react-icons/md";
import { DataTableDemo } from "@/components/custom/custom-table";

export default function Dashboard() {
  return (
    <main className="w-full h-[100vh] flex items-center justify-between box-border">
      <div className="w-[280px] h-[100vh] shadow-md p-4 relative">
        <Image priority={true} className="w-[50%] mb-4" src="/images/logo.png" width={150} height={50} alt={""} />
        <p className="text-sm text-slate-400 mb-2 ml-2">Overview</p>


        <div className="text-md px-4 py-2 mb-1 flex items-center bg-green-50 text-sm rounded-md cursor-pointer">
          <RiBuilding2Fill className="text-xl text-green-700" />
          <p className="ml-2 text-green-700">Projects</p>
        </div>
        <div className="text-md px-4 py-2 mb-1 flex items-center hover:bg-slate-50 text-sm rounded-md cursor-pointer">
          <IoCheckmarkCircleOutline className="text-xl" />
          <p className="ml-2">Tasks</p>
        </div>
        <div className="text-md px-4 py-2 mb-1 flex items-center hover:bg-slate-50 text-sm rounded-md cursor-pointer">
          <MdOutlineEventAvailable className="text-xl" />
          <p className="ml-2">Attendance</p>
        </div>
        <div className="text-md px-4 py-2 mb-1 flex items-center hover:bg-slate-50 text-sm rounded-md cursor-pointer">
          <IoDocumentTextOutline className="text-xl" />
          <p className="ml-2">Files</p>
        </div>
        <div className="text-md px-4 py-2 mb-1 flex items-center hover:bg-slate-50 text-sm rounded-md cursor-pointer">
          <MdOutlineInventory2 className="text-xl" />
          <p className="ml-2">Stocks</p>
        </div>
        
        <div className=" absolute top-8 right-[-16px] p-2 bg-white shadow-lg hover:shadow-md rounded-full cursor-pointer">
          <IoIosArrowBack className="text-xl" />
        </div>
        
      </div>
      <div className="w-full h-[100vh] bg-slate-50">
        <div className="w-full h-[7vh]">

        </div>
        <div className="h-[93vh] w-full p-8">
          <DataTableDemo />
        </div>
      </div>
    </main>
  );
}