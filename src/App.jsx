

const App = () => {
  return (
    <div className="main min-h-screen w-full bg-[rgb(7,7,7)] relative flex justify-center pb-28">
      
      <div className="MsgContainer h-full w-[80%]  flex flex-col gap-5 pt-5">

        <div className="message bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white">Hello what can i help you with?</div>
        <div className="message user self-end bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white">I want to learn about React</div>
        <div className="message bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white">Ahh haa, Tell me what do you want to learn about react, I will help you out</div>
        <div className="message user self-end bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message  bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message user self-end bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message  bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message user self-end bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message  bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message user self-end bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message  bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message user self-end bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message  bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message user self-end bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message  bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message user self-end bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message  bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message user self-end bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>
        <div className="message  bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat necessitatibus quae alias earum recusandae ullam!</div>

      </div>
  
      <div className="inputSection bg-[rgb(41,41,41)] w-[70%] fixed bottom-8 ml-auto border border-[#3c3c3c] rounded-full py-2 pl-4 ">
          <input type="text" placeholder="Message LLM..." className="w-[87%] mr-3 py-1 px-1.5 outline-none border-none rounded-full text-white bg-transparent"/>
          <button className="w-[10%] py-1 px-1.5 rounded-[0.45rem] bg-amber-300 cursor-pointer hover:bg-amber-500 transition-all text-md font-semibold"> Send</button>
        
      </div>
    </div>
  )
}

export default App
