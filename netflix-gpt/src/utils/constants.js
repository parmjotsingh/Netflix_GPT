export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "punjabi", name: "Punjabi" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "french", name: "French" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
