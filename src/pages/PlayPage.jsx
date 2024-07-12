import {
  insertCoin,
  myPlayer,
  useMultiplayerState,
  setState,
  usePlayerState,
  usePlayersList,
} from "playroomkit";
import { useEffect, useState } from "react";
import ChatMessage from "../components/ChatMessage";
import PromptDisplay from "../components/PromptDisplay";
import LoadingSpinner from "../components/LoadingSpinner";

function PlayPage() {

  const [messages, setMessages] = useMultiplayerState("message", []);
  const [input, setInput] = useState("");
  const [localScore, setLocalScore] = useState(0);


  const [isLoading, setIsLoading] = useState(true);

  // Keywords to check within text messages
  const insults = [

    "no one asked",
    "dont care",
    "womp",
    "xD",
    "smooth brain",
    "didnt ask",
    "rekt",
    "stupid",
    "dumb",
    "braincell",
    "i am an intellectual",
    "complexities",
    "amateur",
    "sad",
    "wrong",
    "hopeless",
    "embarassing",
    "infuriating"
  ];

  // Custom avatars 
  const avatars = [

    "avatar-1.jpg",
    "avatar-2.jfif",
    "avatar-3.jpg",
    "avatar-4.jfif",
    "avatar-5.jfif",
    "avatar-6.jfif",
    "avatar-7.jfif",
    "avatar-8.jfif",
    "avatar-9.jfif",
    "avatar-10.jfif"
  ];

  const maxPlayersPerRoom = 2;

  // Lobby creation and game launch
  const lobbyLaunch = async () => {

    await insertCoin({
      avatars,
      maxPlayersPerRoom,
    });
    
    const player = myPlayer();
    
    setIsLoading(false);
    player && player.setState("score", 0);
    

  };


  useEffect(() => {
    lobbyLaunch();
  });

  // Retrieving player's name and avatar
  try {

    var playerAvatar = myPlayer().getProfile().photo;
    var playerName = myPlayer().getProfile().name;

    
  } catch (error) {
    
    console.log(error);
  }

  const handleSendMessage = () => {
    
    if (input) {
      
        let currentInput = input;
        if (input.length < 4) {
          currentInput = "*embarassing tongue slip* 🤓";
          setLocalScore(localScore-1);
        }
        else {

          insults.forEach( (insult) => {
            input.includes(insult) && setLocalScore(localScore+1);
          })

        }

        const messageDetails = {
          message: currentInput,
          name: myPlayer().getProfile().id,
          avatar: myPlayer().getProfile().photo,
      };


        setMessages([...messages, messageDetails]);
        setInput("");
    }
  };

  if (isLoading) {
    return (

      <div className="flex flex-col font-mono text-slate-100 bg-neutral-950 justify-center items-center h-screen w-screen">
        <LoadingSpinner />
        Loading...
      </div>

    
    );
  }


  return (
    <>
      
      <div className="flex font-mono text-slate-100 bg-neutral-950 justify-center items-center h-screen w-screen flex-col">

        <div className="flex p-4 text-xl w-full justify-around "> 
          <img className="h-12 rounded-full" src={playerAvatar} alt="avatar" /> 
            Score: {localScore} 
          <img className="h-12 rounded-full scale-x-[-1]" src={playerAvatar} alt="avatar" /> 
        </div>
        
        <PromptDisplay />

        <div className="flex flex-col h-4/5 w-4/5 p-4 border-2 border-slate-100 rounded-2xl">
          {messages.slice(-8).map((msg, i) => {
            return (
              <ChatMessage
                avatar={msg.avatar}
                message={msg.message}
                alignment={myPlayer().getProfile().id === msg.id ? 1 : 0}
              />
            );
          })}
        </div>

        <input
          value={input}
          type="text"
          placeholder="Write your message here"
          className="w-1/2 p-4 mb-8  border-2 border-slate-100 rounded-xl absolute bottom-0 bg-neutral-950"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />

      </div>

    </>
  );
}

export default PlayPage;
