import { useState } from "react"
import {ReactComponent as Logo} from "../assets/logo.svg"

export default function(){
        const[dashboard, setDashboard] = useState("font-normal py-2")
        const[projects, setProjects] = useState("font-normal py-2")
        const[tasks, setTasks] = useState("font-normal py-2")
        const[members, setMembers] = useState("font-normal py-2")
        const[settings, setSettings] = useState("font-normal py-2") 

    function handleClick(item){
        
        if(item === "dashboard"){
            setDashboard("font-normal py-2 bg-black mr-1 rounded-r-lg text-white")
            setProjects("font-normal py-2")
            setTasks("font-normal py-2")
            setMembers("font-normal py-2")
            setSettings("font-normal py-2")
        }
        else if(item === "projects"){
            setProjects("font-normal py-2 bg-black mr-1 rounded-r-lg text-white")
            setTasks("font-normal py-2")
            setMembers("font-normal py-2")
            setSettings("font-normal py-2")
            setDashboard("font-normal py-2")
        }
        else if(item === "tasks"){
            setTasks("font-normal py-2 bg-black mr-1 rounded-r-lg text-white")
            setProjects("font-normal py-2")
            setMembers("font-normal py-2")
            setSettings("font-normal py-2")
            setDashboard("font-normal py-2")
        }
        else if(item === "members"){
            setMembers("font-normal py-2 bg-black mr-1 rounded-r-lg text-white")
            setProjects("font-normal py-2")
            setTasks("font-normal py-2")
            setSettings("font-normal py-2")
            setDashboard("font-normal py-2")
        }
        else if(item === "settings"){
            setSettings("font-normal py-2 bg-black mr-1 rounded-r-lg text-white")
            setProjects("font-normal py-2")
            setTasks("font-normal py-2")
            setMembers("font-normal py-2")
            setDashboard("font-normal py-2")
        }
    }
    return(
        <>
        <div className="flex flex-col justify-around h-full ">
            <div className="flex justify-evenly items-center">
               <Logo className="h-16 min-h-16 w-16 max-w-16"/>
               <p className="text-4xl font-medium">Team Up</p> 
            </div >

            <div className={`flex flex-col justify-between text-gray text-2xl text-gray-400 `}>
                <div className={`${dashboard} flex justify-start items-center pl-14`}>
                    <span className="pr-1 material-symbols-outlined">
                    dashboard
                    </span>
                    <span  
                    onClick={(e)=>handleClick("dashboard")}
                    >Dashboard</span>
                </div >
                <div className={`${projects} flex justify-start items-center pl-14`}>
                    <span className="pr-1 material-symbols-outlined">
                    article
                    </span>
                    <span 
                    onClick={(e)=>handleClick("projects")}
                    >Projects</span>
                </div>
                <div className={`${tasks} flex justify-start items-center pl-14`}>
                    <span className="pr-1 material-symbols-outlined">
                    folder
                    </span>
                    <span 
                    onClick={(e)=>handleClick("tasks")}
                    >Tasks
                    </span>
                </div>
                <div className={`${members} flex justify-start items-center pl-14`}>
                    <span className="pr-1 material-symbols-outlined">
                    group
                    </span>
                    <span 
                    onClick={(e)=>handleClick("members")}
                    >Members
                    </span>
                </div>
                <div className={`${settings} flex justify-start items-center pl-14`}>
                    <span className="pr-1 material-symbols-outlined">
                    settings
                    </span>
                    <span 
                    onClick={(e)=>handleClick("settings")}
                    >Settings</span>
                </div>

            </div>
            <div>
                <fieldset className="py-2 border border-black m-8 rounded-xl">
                    <legend className="ml-6">Workspace</legend>
                    <div className="flex justify-evenly items-center ">
                        <span className="material-symbols-outlined ">
                        account_circle
                        </span>
                        <span>Demo</span>
                        <span className="material-symbols-outlined">
                        expand_more
                    </span>
                    </div>
                </fieldset>
                <div className="flex justify-evenly items-center">
                    <span className="material-symbols-outlined ">
                            account_circle
                            </span>
                    <div>
                        <p>Name</p>
                        <p>occupation</p>
                    </div>
                        <span class="material-symbols-outlined">
                        notifications
                        </span> 
                    <div className="bg-gray-100 rounded-lg px-2 flex justify-center items-center">
                        <span class="material-symbols-outlined">
                        person_add
                        </span>
                        <span>Invite</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}