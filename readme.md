# CineFlix — Movie & TV Discovery App

A modern, streaming-platform inspired web app that lets users **browse**, **scroll**, and **search** movies and TV series across multiple categories such as Movies, Series, Popular, and Trends.

**Built by:** Ahsanuzzaman Tahmid, Elizabeth Muchane and Nusaiba Tasnia Rahman  
**Deployment:** GitHub Pages / Live Server (recommended for local development)

---

## Purpose

This app was created as a front-end project to practice:
- Building a streaming-style UI using HTML, CSS, and JavaScript
- DOM manipulation and event handling
- Implementing live search and filtering
- Creating horizontal scrolling sections
- Designing responsive layouts for different screen sizes
- Applying modern UI/UX patterns inspired by media platforms

---

## API Used

**The Movie Database (TMDB) API**  
Website: https://www.themoviedb.org/

### Endpoints
- Trending content (for Trends section):
  - `https://api.themoviedb.org/3/trending/movie/day`
  - `https://api.themoviedb.org/3/trending/tv/day`
- Popular content:
  - `https://api.themoviedb.org/3/movie/popular`
  - `https://api.themoviedb.org/3/tv/popular`
- Search (movies & TV):
  - `https://api.themoviedb.org/3/search/multi`
- Images:
  - `https://image.tmdb.org/t/p/w500/{poster_path}`

---

## How to Run Locally

This project is fully client-side and should be run using a local server for best results.

### Option 1: VS Code Live Server
1. Open the repository in VS Code  
2. Install the **Live Server** extension  
3. Right-click `index.html` → Open with Live Server  

### Option 2: Direct Browser Open
1. Open `index.html` in a modern browser (Chrome recommended)

---

## Features

- ✅ Sticky navigation bar with active menu highlighting
- ✅ Smooth scrolling between page sections
- ✅ Horizontal movie lists with mouse-wheel scrolling support
- ✅ Live search filter using movie/series titles
- ✅ Clear search button for instant reset
- ✅ Interactive movie cards with hover overlays
- ✅ Sidebar icon navigation
- ✅ Responsive layout for desktop, tablet, and mobile
- ✅ Streaming-style multi-column footer with social icons

---

## Accessibility Notes

- Search input is clearly labelled and keyboard accessible
- Buttons use semantic `<button>` elements
- Images include descriptive `alt` text
- High-contrast color palette for readability
- Smooth focus and hover states for interactive elements

---

## Known Issues / Limitations

- Movie and series data is currently static (manually added)
- Search filters existing cards instead of fetching live API results
- Watch button is visual only and does not provide playback
- API key should not be exposed if TMDB integration is enabled
- Some future TMDB results may not include poster images

---

## Credits & Attribution

- Movie and TV data provided by **The Movie Database (TMDB)**  
- Required attribution statement:  
  *“This product uses the TMDB API but is not endorsed or certified by TMDB.”*
- Fonts provided by **Google Fonts** (Roboto, Sen)
- Icons provided by **Font Awesome**
- This repository was developed as **CineFlix** by Prince Lola, Tahmid, and Nusaiba
