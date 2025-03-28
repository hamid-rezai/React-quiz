const SECS_PER_QUESTION = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload.questions,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active", 
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return{
        ...state,
        points:0 , highScore:0 , index:0, answer:null , status:"ready"
        
      }
    case 'tick':
      return{
        ...state,
        secondsRemaining:state.secondsRemaining-1,
        status:state.secondsRemaining === 0 ? "finished" : state.status,
      }
    default:
      throw new Error("Action unknown");
  }
};
export default reducer;
