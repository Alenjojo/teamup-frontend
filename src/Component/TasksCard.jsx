import colorArray from "../Utils/color";

export default function TasksCard(data) {
  var bg = colorArray[Math.floor(Math.random() * colorArray.length)];
  console.log(bg);
  return (
    <div className={`flex flex-col p-5 m-4 shadow-xl rounded-lg bg-[${bg}]`}>
      <div className="flex justify-between mb-2">
        <div className="flex flex-col  text-left">
          <span className="text-lg">{data.data.title}</span>
          <span className="text-sm font-light mt-2">{data.data.desc}</span>
        </div>
        <div className="w-3/5 text-right">{data.data.time}</div>
      </div>
      <div className="flex justify-between">
        <span>{data.data.members}</span>
        <button className="bg-emerald-400 px-4 pb-0.5 rounded-full">
          {data.data.status}
        </button>
      </div>
    </div>
  );
}
