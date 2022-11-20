import TasksCard from "./TasksCard";

export default function Tasks(){
    return(
        <div className="flex flex-col justify-start ">
            <div className="flex justify-between rounded-lg bg-pink-500
                                p-4 m-4 shadow-xl
                ">
                <div className="flex flex-col  items-start ml-4  ">
                    <span className="text-gray-500">October 26, 2022</span>
                    <span className="font-semi-bold text-2xl ">Tuesday</span>
                </div>
                <button className="flex justify-center items-center mr- mt-1
                                    max-h-12 px-4 rounded-lg text-white text-sm 
                                     bg-gradient-to-r from-emerald-300 to-emerald-400
                                     tracking-wider                 
                ">
                    <span class="material-symbols-outlined ">
                        create_new_folder
                    </span>
                    <span className="pl-3">
                        Add Tasks
                    </span>
                </button>

            </div>

            <div className="flex flex-col  p-5 m-4 shadow-xl rounded-lg bg-red-500 justify-evenly">
                <div className="flex justify-between text-xl mb-3">
                    <div className="flex flex-col items-start ">
                        <span >Weekly Activity</span>
                        <span>percentage</span>
                    </div>

                    <div className="flex flex-col items-start">
                        <span class="material-symbols-outlined">
                        more_horiz
                        </span>
                        <span>
                            image
                        </span>
                    </div>
                </div>
                <hr className="h-2 bg-orange-300 rounded-full"/>
            </div>
            <TasksCard />
        </div>
    );
}