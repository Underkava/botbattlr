import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  // State for the list of all bots
  const [bots, setBots] = useState([]);
  
  // State for the list of bots in your army
  const [botArmy, setBotArmy] = useState([]);

  // Fetch bots from the backend API
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  // Function to add a bot to the army
  function addBotToArmy(bot) {
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot]);
    }
  }

  // Function to remove a bot from the army
  function removeBotFromArmy(bot) {
    setBotArmy(botArmy.filter((b) => b.id !== bot.id));
  }

  // Function to discharge (delete) a bot permanently
  function dischargeBot(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
      setBotArmy(botArmy.filter((b) => b.id !== bot.id));
    });
  }

  return (
    <div>
      <YourBotArmy botArmy={botArmy} removeBot={removeBotFromArmy} />
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} dischargeBot={dischargeBot} />
    </div>
  );
}
export default BotsPage;
