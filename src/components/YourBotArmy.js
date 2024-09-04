import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({ botArmy, removeBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.length > 0 ? (
            botArmy.map((bot) => (
              <BotCard 
                key={bot.id} 
                bot={bot} 
                addBotToArmy={removeBot} 
              />
            ))
          ) : (
            <div>Your Bot Army is empty</div>
          )}
        </div>
      </div>
    </div>
  );
}


export default YourBotArmy;
