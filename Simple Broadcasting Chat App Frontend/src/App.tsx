import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const wsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="bg-white h-3/4 w-1/2 rounded-lg flex flex-col">
        {/* chat messages div below */}
        <div className="overflow-y-scroll flex-grow p-4 pt-2 space-y-2">
          {messages.map((message) => (
            <div className="py-2">
              <span className="bg-blue-400 text-black rounded px-4 py-2">
                {message}
              </span>
            </div>
          ))}
        </div>
        {/*input box div below */}
        <div className="p-2 flex">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a message..."
            className="w-full outline-none rounded-lg bg-slate-700 p-2 mr-1 text-white"
          />
          <button
            onClick={() => {
              const message = inputRef.current?.value;
              wsRef.current.send(
                JSON.stringify({
                  type: "chat",
                  payload: {
                    message: message,
                  },
                })
              );
            }}
            className="bg-slate-700 rounded-lg text-slate-400 pr-4 pl-4"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
