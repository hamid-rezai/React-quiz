import { useQuizContext } from "../contexts/context";
import Options from "./options";

const Question = () => {
  const { questions , index} = useQuizContext();
  return (
    <div>
      <h4>{questions[index].question}</h4>

      <Options />
    </div>
  );
};
export default Question;
