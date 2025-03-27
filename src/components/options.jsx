import { useQuizContext } from "../contexts/context";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const Options = ()=>{

  const {questions, index,answer, dispatch} = useQuizContext();
  const question = questions[index];
  const hasAnswered = answer != null;
  return (
    <>
    <AnimatePresence>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:2 , ease:easeInOut}} className='options'>
        {question.options.map((option , index) => (
          <button className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`} key={option}
          disabled={hasAnswered} onClick={()=>dispatch({type:"newAnswer", payload:index})}>
            {option}
          </button>
        ))}
      </motion.div>
      </AnimatePresence>
      </>
  )
}
export default Options;