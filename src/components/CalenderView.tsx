interface TaskBlockProps {
  title: string;
  time: string;
  duration: string;
  notes: string[];
  bgColor: string;
  borderColor: string;
  height: string;
}

function TaskBlock({ title, time, duration, notes, bgColor, borderColor, height }: TaskBlockProps) {
  return (
    <div className={`absolute top-2 left-14 right-4 z-10 ${bgColor} ${borderColor} border-l-4 rounded-md px-3 py-2 overflow-hidden`} style={{ height }}>
      <p className="text-white font-semibold text-sm">{title}</p>
      <p className="text-gray-300 text-xs">{time} | {duration}</p>
      {notes.map((note, i) => (
        <p key={i} className={`text-gray-300 text-xs ${i === 0 ? 'mt-1' : ''}`}>&bull; {note}</p>
      ))}
    </div>
  );
}

function CalenderView() {
    return (
      <div className='bg-zinc-950'>
        <div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>6:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>7:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>8:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Wake up"
              time="8:00 - 9:00"
              duration="1h"
              notes={['Say "Gm" in the group chat', 'No one says it back', 'Kill myself']}
              bgColor="bg-rose-900/80"
              borderColor="border-red-700"
              height="8rem"
            />
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>9:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Deep work"
              time="9:00 - 11:00"
              duration="2h"
              notes={['Finish calendar view component', 'No Slack, no Twitter', 'Phone on DND']}
              bgColor="bg-violet-900/80"
              borderColor="border-violet-600"
              height="16rem"
            />
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>10:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>



          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>11:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Standup"
              time="11:00 - 11:30"
              duration="30m"
              notes={[]}
              bgColor="bg-amber-900/80"
              borderColor="border-amber-600"
              height="4rem"
            />
          </div>

        
          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>12:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Lunch"
              time="12:00 - 13:00"
              duration="1h"
              notes={['Nasi lemak from the stall downstairs', 'Touch grass']}
              bgColor="bg-orange-900/80"
              borderColor="border-orange-600"
              height="8rem"
            />
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>13:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>14:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Code review"
              time="14:00 - 15:00"
              duration="1h"
              notes={['Review PR #12', 'Check the API changes']}
              bgColor="bg-cyan-900/80"
              borderColor="border-cyan-600"
              height="8rem"
            />
          </div>



          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>15:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>



          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>16:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>



          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>17:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Gym"
              time="17:00 - 18:30"
              duration="1h 30m"
              notes={['Push day', 'Bench / OHP / Dips', '10 min cardio']}
              bgColor="bg-emerald-900/80"
              borderColor="border-emerald-600"
              height="12rem"
            />
          </div>



          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>18:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>



          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>19:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Dinner"
              time="19:00 - 20:00"
              duration="1h"
              notes={['Cook chicken rice', 'Meal prep for tomorrow']}
              bgColor="bg-orange-900/80"
              borderColor="border-orange-600"
              height="8rem"
            />
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>20:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Side project"
              time="20:00 - 22:00"
              duration="2h"
              notes={['Walker app frontend', 'Hook up API endpoints', 'Deploy to staging']}
              bgColor="bg-violet-900/80"
              borderColor="border-violet-600"
              height="16rem"
            />
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>21:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>22:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
            <TaskBlock
              title="Wind down"
              time="22:00 - 23:00"
              duration="1h"
              notes={['Read a book', 'No screens']}
              bgColor="bg-indigo-900/80"
              borderColor="border-indigo-600"
              height="8rem"
            />
          </div>


          <div className='h-32 relative'>
            <div className='text-gray-500 text-xs flex items-center gap-x-4'>
              <p>23:00</p>
              <div className="flex-grow border-t border-1.5 border-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CalenderView;
