import axios from "axios";
import { Popular_Movies, options } from "../utils/constant";
import { getPopularMovies } from "../redux/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Popular_Movies, options);
    dispatch(getPopularMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default usePopularMovies;
