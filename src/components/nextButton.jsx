import { useQuizContext } from "../contexts/context"
import { AnimatePresence, motion } from "framer-motion";

const NextButton = () =>{
  const {answer, index ,numQuestions, dispatch}=useQuizContext();
  if(answer === null) return null;
  if(index < numQuestions -1)
  return (
<AnimatePresence>
    <motion.button initial={{opacity:0 }} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:2}} className="btn " onClick={()=> dispatch({type:"nextQuestion"})}>
      Next
    </motion.button>
    </AnimatePresence>
  )

  if(index === numQuestions -1)
  return (
    <button className="btn " onClick={()=> dispatch({type:"finish"})}>
      Finish
    </button>
  )
  
}
export default NextButton;