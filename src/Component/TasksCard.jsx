
export default function TasksCard(){
    return(
        <div className="flex flex-col p-5 m-4 shadow-xl rounded-lg bg-blue-500 ">
           <div className="flex justify-between mb-2">
                <div className="flex flex-col  text-left">
                    <span className="text-lg">Wireframing</span>
                    <span className="text-sm font-light mt-2">Hello type and scrambled it to make a type specimen book.</span>
                </div>
                <div className="w-3/5 text-right">08:00 AM</div>
            </div> 
           <div className="flex justify-between">
            <span>members</span>
            <button className="bg-emerald-400 px-4 pb-0.5 rounded-full">ongoing</button>
           </div>
        </div>

    )
}