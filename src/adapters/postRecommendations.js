import api from "./api";

const postRecommendations = async (movieRatings) => {
  try {
    return (
      await api.post("/recommendations", movieRatings, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
    ).data;
  } catch (err) {
    console.log(err.response.status);
  }
};

export default postRecommendations;
