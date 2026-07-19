import * as webllm from "@mlc-ai/web-llm";
import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [loadingModel, setLoadingModel] = useState(true);
  const [input, setInput] = useState("")
  const [engine, setEngine] = useState(null)
  const [error, setError] = useState("");

  const [messages, setMessages] = useState([{
    role: "system",
    content: "You are an helpful assistant that can help me with my tasks"
  }])

    useEffect(()=>{

      async function LoadEngine() {
        try {
          setStatus("Preparing AI Model...");
          setError("");

          const selectedModel = "TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC";

          const loadedEngine = await webllm.CreateMLCEngine(selectedModel, {
            initProgressCallback: (initProgress) => {
              console.log("Progress", initProgress);
              setProgress(initProgress.progress);
              setStatus(initProgress.text);
            }
          })

          setEngine(loadedEngine);
          setLoadingModel(false);
          setStatus("Model Loaded Successfully!");

        } catch (err) {
          console.error(err);

          const errorMessage = err?.message || err?.toString() || "Unknown error occurred";

          setError(errorMessage);
          setStatus("Failed to load model");
          alert(errorMessage);
        }
      }

      LoadEngine();

    // const selectedModel = "TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC";


  }, [])

  async function sendMsgToLlm() {
    if (!engine) {
      alert("Model is still loading...");
      return;
    }
    let tempMessage = [...messages,  { role: "user", content: input},]


    setMessages(tempMessage)
    setInput("")

    const reply = await engine.chat.completions.create({
      messages: tempMessage
    });
  
    const text = reply.choices[0].message.content

    console.log("reply", reply)

    setMessages([...tempMessage, {role: "assistant", content: text}])

  }

  return (
    <div className="main min-h-screen w-full bg-[rgb(7,7,7)] relative flex justify-center lg:pb-28 pb-26">

      {error && (
        <div className="fixed lg:top-1/2 top-55 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 bg-red-600 text-white px-3 py-2 rounded-lg shadow-lg lg:w-fit w-[90%]  wrap-break z-50">
          <p className="font-semibold">Error</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {loadingModel && (
        <ProgressBar progress={progress} status={status}/>
      )}
      
      <div className="MsgContainer h-full lg:w-[80%] w-[93%] flex flex-col gap-5 pt-5">

        {
          messages.filter(message=>message.role!=="system").map((message, idx)=>{
            return <div className={`${message.role}  message  border-none max-w-[90%] w-fit  text-white`} key={idx}>
              {message.content}
            </div>
          })
        }

      </div>
  
      <div className="inputSection bg-[rgb(41,41,41)] lg:w-[70%] w-[80%] fixed bottom-8 ml-auto border border-[#3c3c3c] lg:rounded-full rounded-4xl pr-3 flex gap-3">
          <input value={input} onChange={(dets)=>{
            setInput(dets.target.value)
          }} onKeyDown={(dets)=>{
            if(dets.key == "Enter"){
              if (input != "") {
              sendMsgToLlm()
            }}
          }} type="text" placeholder="Message LLM..." className="flex-1  py-3 pl-4 outline-none border-none rounded-l-full text-white  bg-transparent" />
          <button onClick={()=>{
            if (input != "") {
              sendMsgToLlm()
            }
          }} className="lg:w-[8%] w- h-[80%] m-auto py-1 px-1.5 rounded-[0.45rem] bg-amber-300 cursor-pointer hover:bg-amber-500 transition-all text-md font-semibold"> Send</button>
        
      </div>
    </div>
  )
}

export default App
// lg:w-[87%]
// py-2  pl-4
// mr-3