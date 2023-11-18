import { useDispatch, useSelector } from "react-redux";
import { LANG } from "../utils/LanguageConstant";
import { useRef } from "react";
import { openai } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovies } from "../utils/gPTSlice";

const GPTSearchBar = () => {
  const lang = useSelector((store) => store.config.lang);
  const searchBar = useRef();
  const dispatch = useDispatch();

  async function searchMoviesInTMDB(movieName) {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    ).catch((err) => console.log(err));
    return response.json();
  }

  async function handleGPTSearchClick() {
    // const searchText = "Act as a movies recommendation system and recommend some movies for the query: " + searchBar.current.value+ ". Only give me Name of 5 movies comma seprated like the example result given ahead. Example result: Gadar, Don, Exapandables, creed 3, The Invinsible"

    // const searchResults = await openai.chat.completions
    //   .create({
    //     messages: [{ role: "user", content: searchText }],
    //     model: "gpt-3.5-turbo",
    //   })
    //   .catch((err) => console.log(err));

    const moviesName = ["Don", "Expandebles", "Gadar", "Mission Impossible"]; //searchResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = moviesName.map((name) => searchMoviesInTMDB(name));
    const result = await Promise.all(promiseArray);
    console.log(result);
    dispatch(addGPTMovies({ gptMoviesResult: moviesName, tmdbResult: result }));
  }
  return (
    <div className="pt-[32%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12 bg-opacity-70"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9 p-4 m-4 rounded-md"
          type="text"
          placeholder={LANG.gptTextPlaceholder[lang]}
          ref={searchBar}
        />
        <button
          className="px-4 py-2 m-4 col-span-3 bg-red-800 text-white rounded-md text-sm md:text-lg font-medium"
          onClick={handleGPTSearchClick}
        >
          {LANG.gptSearchButton[lang]}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
