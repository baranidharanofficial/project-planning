import Image from "next/image";
import "../app/globals.css";
import { RiBuilding2Fill } from "react-icons/ri";
import { IoCheckmarkCircleOutline, IoDocumentTextOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdCheckCircle, MdOutlineBook, MdOutlineEventAvailable, MdOutlineGroup, MdOutlineInventory2 } from "react-icons/md";
import { DataTableDemo } from "@/components/custom/custom-table";
import { ThemeChanger } from "@/components/custom/theme-switch";
import { ThemeProvider } from "next-themes";
import { useCallback, useState } from 'react';
import { TaskTableDemo } from "@/components/custom/task-table";

export default function ProjectHome({ projectname }: { projectname: string }) {

  const [project, setProject] = useState("");

  const handleProjectClick = useCallback((projectName: any) => {
    console.log(`Project clicked: ${projectName}`);
    setProject(projectName);
  }, []);

  return (
    <main className="w-full h-[95%] flex items-center justify-between box-border shadow-sm">
      <div className="w-[280px] h-full p-4 relative dark:bg-black">

        <p className="text-sm text-slate-400 mb-2 ml-2">{projectname}</p>

        <div className="text-md px-4 py-2 mb-1 flex items-center bg-green-50 text-sm rounded-md cursor-pointer">
          <MdCheckCircle className="text-xl text-green-700" />
          <p className="ml-2 text-green-700">Tasks</p>
        </div>
        <div className="text-md px-4 py-2 mb-1 flex items-center hover:bg-slate-50 text-sm rounded-md cursor-pointer">
          <MdOutlineBook className="text-xl" />
          <p className="ml-2">Book</p>
        </div>
        <div className="text-md px-4 py-2 mb-1 flex items-center hover:bg-slate-50 text-sm rounded-md cursor-pointer">
          <MdOutlineGroup className="text-xl" />
          <p className="ml-2">Teams</p>
        </div>
        {/* <div className="text-md px-4 py-2 mb-1 flex items-center hover:bg-slate-50 text-sm rounded-md cursor-pointer">
            <IoDocumentTextOutline className="text-xl" />
            <p className="ml-2">Files</p>
          </div>
          <div className="text-md px-4 py-2 mb-1 flex items-center hover:bg-slate-50 text-sm rounded-md cursor-pointer">
            <MdOutlineInventory2 className="text-xl" />
            <p className="ml-2">Stocks</p>
          </div> */}


      </div>
      <div className="w-full h-full p-6">
        <TaskTableDemo onTaskClick={handleProjectClick} />
      </div>
    </main>
  );
}
