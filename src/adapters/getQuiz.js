import api from "./api";

const getQuiz = async () => {
  try {
    return (await api.get("/quiz")).data;
  } catch (err) {
    console.log(err);
  }
}

export default getQuiz;