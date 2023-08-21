import Message from './components/message.component'
import DefaultTemplate from './template/default'
import useLoading from './useLoading.hooks';
// import useChatConnection from './useChatConnection.hooks'

function App() {

  const {isLoading, setIsLoading} = useLoading()

  // const host = window.location.href;

  // const urlParams = new URL(host);
  // const id = urlParams.searchParams.get('id') || ``;
  // const companyId = urlParams.searchParams.get('companyId') || ``;
  // const {messages} = useChatConnection({companyId, clientId: id});

  window.addEventListener('message', event => {
    console.log(event)
    setIsLoading(false)
  });
  
  return (
    <DefaultTemplate>
      {isLoading ? (
        <p>Carregando</p>
      ) : (
        <div className='flex justify-between'>
          <div className='flex flex-col max-h-screen rounded-e-lg overflow-hidden'>
            <div className='flex bg-slate-300 justify-between p-3'>
              <p className="text-sm rounded-none w-full">Chats</p>
            </div>
            <div className='bg-slate-400 w-full overflow-y-scroll p-4 h-5/6'>
              <div className='flex flex-col gap-8 max-h-6/6'>
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
      )}
      
    </DefaultTemplate>
  )
}

export default App
