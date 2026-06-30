import { formatTaskTime, getDuration } from "../utils/DateUtils";

interface TaskBlockProps {
  title: string;
  startTime: Date;
  endTime: Date;
  tasks: string[];
  bgColor: string;
}

function TaskBlock({ title, startTime, endTime, tasks, bgColor, }: TaskBlockProps) {
  return (
    <div className={`absolute top-2 left-14 right-4 z-10 ${bgColor} border-l-4 rounded-md px-3 py-2 overflow-hidden h-40`}>
      <p className="text-white font-semibold text-sm">{title}</p>
      <p className="text-gray-300 text-xs">{formatTaskTime({startTime, endTime})} | {getDuration({startTime, endTime})}</p>
      {tasks.map((note, i) => (
        <p key={i} className={`text-gray-300 text-xs ${i === 0 ? 'mt-1' : ''}`}>&bull; {note}</p>
      ))}
    </div>
  );
}

function CalenderView() {

    return (
      <div className='bg-zinc-950 flex-1'>
        <div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4 mx-4'>
              <p>6:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4 mx-4'>
              <p>7:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4 mx-4'>
              <p>8:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Wake up"
              bgColor="bg-rose-900/80" 
              startTime={new Date(Date.parse("30 Jun 2026 00:00:00 GMT"))} 
              endTime={new Date(Date.parse("30 Jun 2026 01:00:00 GMT"))} 
              tasks={["Wake Up", "Eat", "Sleep"]}            />
            </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4 mx-4'>
              <p>23:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CalenderView;
