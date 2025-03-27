import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/reducer";

const QuizContext = createContext();

const initialState = {
  questions: [],
  status: "loading",
  index:0,
  answer:null,
  points:0,
  highScore:0,
  secondsRemaining:null,
};

const QuizProvider = ({ children }) => {
  const [{questions ,secondsRemaining,points,highScore, status , answer, index}, dispatch] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <QuizContext.Provider value={ { status,questions ,index,answer,points,highScore, numQuestions,maxPossiblePoints , secondsRemaining,dispatch}}>{children}</QuizContext.Provider>
  );
};

const useQuizContext = ()=>{
  return useContext(QuizContext);
}

export {useQuizContext , QuizProvider};