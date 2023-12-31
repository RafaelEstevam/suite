import Contact from './components/contact.component'
import Message from './components/message.component'
import DefaultTemplate from './template/default'

function App() {
  return (
    <DefaultTemplate>
      <div className='flex justify-between'>
        <div className='border-r border-slate-500 w-1/5 rounded-s-lg overflow-hidden bg-slate-200'>
          <div className='flex bg-slate-300 justify-between'>
            <button className="text-sm rounded-none bg-slate-300 w-full">Chats</button>
            <button className="text-sm rounded-none bg-slate-300 w-full">Historics</button>
            <button className="text-sm rounded-none bg-slate-300 w-full">Config</button>
          </div>
          <div className='p-4 flex flex-col gap-4'>
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
          </div>
        </div>
        <div className='w-4/5 flex flex-col min-h-full rounded-e-lg overflow-hidden'>
          <div className='flex bg-slate-300 justify-between p-3'>
            <p className="text-sm rounded-none w-full">Chats</p>
          </div>
          <div className='bg-slate-400 w-full overflow-y-scroll p-4 max-h-96'>
            <div className='flex flex-col gap-8 max-h-5/6'>
              <Message ownMessage />
              <Message />
              <Message />
              <Message ownMessage/>
              <Message ownMessage/>
              <Message />
              <Message ownMessage/>
              <Message ownMessage/>
              <Message />
            </div>
          </div>
          <div className='bg-slate-400 h-1/6 w-full flex'>
            <textarea className='w-full bg-slate-300 text-slate-800 p-4'>
              conversas aqui
            </textarea>
            <button className="text-sm rounded-none bg-slate-600">submit</button>
          </div>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default App
