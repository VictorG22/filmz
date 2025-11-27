const navLinks = [
  {
    label: "Home",
    link: "/",
    pointer: "cursor-pointer",
  },
  {
    label: "About Us",
    link: "/",
    pointer: "cursor-not-allowed",
  },
  {
    label: "Contact Us",
    link: "/",
    pointer: "cursor-not-allowed",
  },
  {
    label: "Movies",
    link: "/movies",
    pointer: "cursor-pointer",
  },
  {
    label: "TV Shows",
    link: "/tv-shows",
    pointer: "cursor-pointer",
  },
];

const footerLinks = {
  movies: [
    "Top Rated",
    "New Releases",
    "Popular Movies",
    "Genres",
    "Upcoming",
    "Classic Films",
  ],
  Shows: [
    "Trending Shows",
    "Latest Episodes",
    "Network Picks",
    "Genres",
    "Reality & Docs",
    "Award Winners",
  ],
  actors: [
    "Featured Actors",
    "Rising Stars",
    "Award Winners",
    "Filmography",
    "Interviews",
    "Spotlight",
  ],
  info: [
    "Search Tips",
    "Favorites",
    "Watchlist",
    "News & Updates",
    "Community",
    "About",
  ],
};

export { navLinks, footerLinks };
