export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://media.licdn.com/dms/image/v2/D4D35AQE5o_aWODPniQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1698505571717?e=1724220000&v=beta&t=yZ3_lFGLMAeVp3H-gx_Z-2FIO-C4mvEfeKQDpf6Ccj4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,

  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"


export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPNEAI_KEY = process.env.REACT_APP_OPNEAI_KEY;
