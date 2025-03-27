import { useEffect } from "react";
import { useQuizContext } from "../contexts/context";
import Counter from "./counter";

const Timer = () => {
  const { dispatch, secondsRemaining } = useQuizContext();
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className='timer-container'
      style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <div
        className='timer-container'
        style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        {/* Minutes - First digit */}
        <Counter value={Math.floor(minutes / 10)} fontSize={30} places={[1]} />
        {/* Minutes - Second digit */}
        <Counter value={minutes % 10} fontSize={30} places={[1]} />

        {/* Separator */}
        <span style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}>
          :
        </span>

        {/* Seconds - First digit */}
        <Counter value={Math.floor(seconds / 10)} fontSize={30} places={[1]} />
        {/* Seconds - Second digit */}
        <Counter value={seconds % 10} fontSize={30} places={[1]} />
      </div>
    </div>
  );
};
export default Timer;
