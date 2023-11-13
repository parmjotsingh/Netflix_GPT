const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[20%] pl-24 absolute text-white bg-gradient-to-r from-black-950  aspect-video w-full">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="my-3 text-md w-1/4">{description}</p>
      <div className="flex">
        <button className="bg-white text-black px-7 py-2 text-lg rounded-sm font-medium flex items-center hover:opacity-80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
          Play
        </button>
        <button className="ml-2 bg-zinc-700 text-white px-8 py-2 text-lg rounded-sm font-medium bg-opacity-90 hover:bg-opacity-70 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
