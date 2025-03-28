import { useQuizContext } from "../contexts/context";

const Progress = () => {
  const { index, maxPossiblePoints,answer, points, numQuestions } = useQuizContext();
  

  return (
    <header className='progress'>
      <progress max={numQuestions} value={index+Number(answer !==null)} />
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};
export default Progress;
