import Image from "next/image";
import "../app/globals.css";
import { RiBuilding2Fill } from "react-icons/ri";
import { IoCheckmarkCircleOutline, IoDocumentTextOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineBook, MdOutlineEventAvailable, MdOutlineGroup, MdOutlineInventory2 } from "react-icons/md";
import { DataTableDemo } from "@/components/custom/custom-table";
import { ThemeChanger } from "@/components/custom/theme-switch";
import { ThemeProvider } from "next-themes";
import { useCallback, useState } from 'react';
import ProjectHome from "./project_home";

export default function Dashboard() {

  const [project, setProject] = useState("");

  const handleProjectClick = useCallback((projectName: any) => {
    console.log(`Project clicked: ${projectName}`);
    setProject(projectName);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      key="theme-provider"
    >
      <main className="w-full h-[100vh] flex items-center justify-between box-border">
        <div className="w-[280px] h-[100vh] shadow-md p-4 relative dark:bg-black">
          <Image priority={true} className="w-[50%] mb-4" src="/images/logo.png" width={150} height={50} alt={""} />
          <p className="text-sm text-slate-400 mb-2 ml-2">Overview</p>

          <div className="text-md px-4 py-2 mb-1 flex items-center bg-green-50 text-sm rounded-md cursor-pointer">
            <RiBuilding2Fill className="text-xl text-green-700" />
            <p className="ml-2 text-green-700">Projects</p>
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

          <div className="absolute top-8 right-[-16px] p-2 bg-white shadow-lg hover:shadow-md rounded-full cursor-pointer">
            <IoIosArrowBack className="text-xl" />
          </div>
        </div>
        <div className="w-full h-[100vh]">
          <div className="w-full h-[7vh] px-6 flex items-center justify-end">
            <ThemeChanger />
          </div>


          <div className="h-[93vh] w-full overflow-y-auto px-8">
            {project.length == 0 ? <DataTableDemo onProjectClick={handleProjectClick} /> :
              <ProjectHome projectname={project} />}
          </div>

        </div>
      </main>
    </ThemeProvider>
  );
}
