import React, { useContext, useEffect, useState } from "react";

// todo: how to avoid duplicating phrases in a session?


export function CountdownTimer() {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function startClock() {
    setIsActive(true);
  }

  function resetClock() {
    setRemainingSecs(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

}

export default class Catchphrase {
  const [teamPointsA, setTeamPointsA] = useState(0);
  const [teamPointsB, setTeamPointsB] = useState(0);

  static async startGame() {
    // return this.sessionId;
  }
}

