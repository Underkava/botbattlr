import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  function addBotToArmy(bot) {
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot]);
    }
  }

  function removeBotFromArmy(bot) {
    setBotArmy(botArmy.filter((b) => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBotArmy(botArmy.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
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