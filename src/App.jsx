import * as webllm from "@mlc-ai/web-llm";
import { useEffect, useState } from "react";

const App = () => {
  const [input, setInput] = useState("")
  const [engine, setEngine] = useState(null)

  const [messages, setMessages] = useState([{
    role: "system",
    content: "Hey, how can i help with?"
  },])

    useEffect(()=>{
    const selectedModel = "TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC";

    webllm.CreateMLCEngine(selectedModel, {
      initProgressCallback: (initProgress) => {
        console.log("Progress", initProgress);
      }
    }).then(engine=>{
      setEngine(engine)
    })
  }, [])

  async function sendMsgToLlm() {
    let tempMessage = [...messages]
    tempMessage.push({
      role: "user",
      content: input
    })

    setMessages(tempMessage=>[...tempMessage])
    setInput("")

    const reply = await engine.chat.completions.create({
      messages: tempMessage
    });
  
    const text = reply.choices[0].message.content

    console.log("reply", reply)

    tempMessage.push({
      role: "assistant",
      content: text
    })

    setMessages(tempMessage=>[...tempMessage])

  }

  return (
    <div className="main min-h-screen w-full bg-[rgb(7,7,7)] relative flex justify-center pb-28">
      
      <div className="MsgContainer h-full w-[80%]  flex flex-col gap-5 pt-5">

        {
          messages.map((message, idx)=>{
            return <div className={`${message.role}  message bg-[rgb(60,60,60)] border-none max-w-[90%] w-fit rounded-lg px-3 py-2 text-white`} key={idx}>
              {message.content}
            </div>
          })
        }

      </div>
  
      <div className="inputSection bg-[rgb(41,41,41)] w-[70%] fixed bottom-8 ml-auto border border-[#3c3c3c] rounded-full py-2 pl-4 ">
          <input value={input} onChange={(dets)=>{
            setInput(dets.target.value)
          }} onKeyDown={(dets)=>{
            if(dets.key == "Enter"){
              if (input != "") {
              sendMsgToLlm()
            }}
          }} type="text" placeholder="Message LLM..." className="w-[87%] mr-3 py-1 px-1.5 outline-none border-none rounded-full text-white bg-transparent"/>
          <button onClick={()=>{
            if (input != "") {
              sendMsgToLlm()
            }
          }} className="w-[10%] py-1 px-1.5 rounded-[0.45rem] bg-amber-300 cursor-pointer hover:bg-amber-500 transition-all text-md font-semibold"> Send</button>
        
      </div>
    </div>
  )
}

export default App
