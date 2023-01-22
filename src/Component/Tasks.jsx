import TasksCard from "./TasksCard";

export default function Tasks() {
  const data = [
    {
      title: "1",
      desc: "Hello type and scrambled it to make a type specimen book.",
      members: [1, 2, 3],
      status: 3,
      time: "1:00",
    },
    {
      title: "2",
      desc: "Hello type and scrambled it to make a type specimen book.",
      members: [1, 2, 3],
      status: 3,
      time: "1:00",
    },
    {
      title: "3",
      desc: "Hello type and scrambled it to make a type specimen book.",
      members: [1, 2, 3],
      status: 3,
      time: "1:00",
    },
    {
      title: "4",
      desc: "Hello type and scrambled it to make a type specimen book.",
      members: [1, 2, 3],
      status: 3,
      time: "1:00",
    },
  ];
  return (
    <div className="flex flex-col justify-start ">
      <div
        className="flex justify-between rounded-lg 
                                p-4 m-4 shadow-xl
                "
      >
        <div className="flex flex-col  items-start ml-4  ">
          <span className="text-gray-500">October 26, 2022</span>
          <span className="font-semi-bold text-2xl ">Tuesday</span>
        </div>
        <button
          className="flex justify-center items-center mr- mt-1
                                    max-h-12 px-4 rounded-lg text-white text-sm 
                                     bg-gradient-to-r from-emerald-300 to-emerald-400
                                     tracking-wider                 
                "
        >
          <span className="material-symbols-outlined ">create_new_folder</span>
          <span className="pl-3">Add Tasks</span>
        </button>
      </div>

      <div className="flex flex-col  p-5 m-4 shadow-xl rounded-lg justify-evenly ">
        <div className="flex justify-between text-xl mb-3">
          <div className="flex flex-col items-start ">
            <span>Weekly Activity</span>
            <span>percentage</span>
          </div>

          <div className="flex flex-col items-start">
            <span className="material-symbols-outlined">more_horiz</span>
            <span>image</span>
          </div>
        </div>
        <hr className="h-2 bg-orange-300 rounded-full" />
      </div>
      {data.map((i) => (
        <TasksCard data={i} />
      ))}
    </div>
  );
}
