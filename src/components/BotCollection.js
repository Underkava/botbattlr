import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBotToArmy, dischargeBot }) {


  return (
    <div className="ui four column grid">
      <div className="row">
      {bots.map((bot) => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            addBotToArmy={addBotToArmy} 
            dischargeBot={dischargeBot} 
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
