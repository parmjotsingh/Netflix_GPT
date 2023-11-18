import GPTSearchBar from "./GPTSearchBar";
import bgimage from "../media/background-login.jpg";
import GPTSearchResult from "./GPTSearchResult";
const GPTSearch = () => {
  return (
    <div>
      <div className="h-full fixed -z-10">
        <img className="h-full object-cover" src={bgimage} alt="background" />
      </div>
      <GPTSearchBar />
      <GPTSearchResult />
    </div>
  );
};

export default GPTSearch;
