import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import { useQuizContext } from "./contexts/context";
import Loader from "./components/loader";
import Error from "./components/error";
import StartScreen from "./components/startScreen";
import Question from "./components/question";
import NextButton from "./components/nextButton";
import Progress from "./components/progress";
import FinishScreen from "./components/finishScreen";
import Footer from "./components/footer";
import Timer from "./components/timer";


function App() {

  const {status,dispatch} = useQuizContext();
  

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => {
        return res.json();
      })
      .then((data) => dispatch({type:"dataReceived", payload:data}))
      .catch((error) => dispatch({type:'dataFailed'}));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader/>}
        {status === 'error' && <Error/>}
        {status === 'ready' && <StartScreen/>}
        {status === 'active' && <>
          <Progress/>

         <Question /> 

         <Footer>
          <Timer/>
         <NextButton/>
         </Footer>
           </>}
         {status === 'finished' && <FinishScreen/>}
      </Main>
    </div>
  );
}

export default App;
