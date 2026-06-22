import { useState } from "react";
import kiminoVideo from "./kimi.mp4";
import "./project1.css";

function Home() {
  return (
    <div>
      <h2>Welcome to Anime World 🌸</h2>
      <p>Explore trending anime, search your favorites, track your watchlist, and more!</p>
    </div>
  );
}

function TrendingAnime() {
  return (
    <div>
      <h2>🔥 Trending Anime</h2>
      <div className="card">Naruto</div>
      <div className="card">Attack on Titan</div>
      <div className="card">One Piece</div>
    </div>
  );
}

function SearchAnime() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <h2>🔍 Search Anime</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter anime name"
      />
      <p>Searching for: {query}</p>
    </div>
  );
}

function AnimeDetails() {
  return (
    <div>
      <h2>📖 Anime Details</h2>
      <div className="card">
        <p><b>Title:</b> Demon Slayer</p>
        <p><b>Rating:</b> 8.9</p>
        <p><b>Episodes:</b> 26</p>
        <p><b>Genre:</b> Action, Fantasy</p>
      </div>
    </div>
  );
}

function Favorites() {
  return (
    <div>
      <h2>❤️ Favorites</h2>
      <div className="card">My Hero Academia</div>
      <div className="card">Death Note</div>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>👤 Profile</h2>
      <p>Username: AnimeFan123</p>
      <p>Dark Mode: Enabled 🌙</p>
    </div>
  );
}

function CharacterExplorer() {
  return (
    <div>
      <h2>🎭 Character Explorer</h2>
      <div className="card">Naruto Uzumaki - Popularity: 95%</div>
      <div className="card">Luffy - Popularity: 90%</div>
    </div>
  );
}

function Watchlist() {
  return (
    <div>
      <h2>📺 Watchlist Tracker</h2>
      <div className="card">Bleach - Watching</div>
      <div className="card">Dragon Ball Z - Completed</div>

      <h3>🎬 Now Watching: Kimi no Na Wa</h3>
      <video width="600" controls>
        <source src={kiminoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

function QuizGame() {
  return (
    <div>
      <h2>🎮 Anime Quiz Game</h2>
      <p>Guess the anime from this image (placeholder)</p>
      <div className="card">Q: Which anime has a character named Goku?</div>
      <button>Dragon Ball Z</button>
      <button>Naruto</button>
      <button>One Piece</button>
    </div>
  );
}

function Recommendation() {
  return (
    <div>
      <h2>✨ Anime Recommendation</h2>
      <p>Select favorite genres to get recommendations.</p>
      <div className="card">Recommended: Fullmetal Alchemist</div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home": return <Home />;
      case "trending": return <TrendingAnime />;
      case "search": return <SearchAnime />;
      case "details": return <AnimeDetails />;
      case "favorites": return <Favorites />;
      case "profile": return <Profile />;
      case "characters": return <CharacterExplorer />;
      case "watchlist": return <Watchlist />;
      case "quiz": return <QuizGame />;
      case "recommend": return <Recommendation />;
      default: return <Home />;
    }
  };

  return (
    <div className="app-container">
      <h1>🌸 Anime World</h1>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("trending")}>Trending Anime</button>
        <button onClick={() => setPage("search")}>Search Anime</button>
        <button onClick={() => setPage("details")}>Anime Details</button>
        <button onClick={() => setPage("favorites")}>Favorites</button>
        <button onClick={() => setPage("profile")}>Profile</button>
        <button onClick={() => setPage("characters")}>Character Explorer</button>
        <button onClick={() => setPage("watchlist")}>Watchlist</button>
        <button onClick={() => setPage("quiz")}>Quiz Game</button>
        <button onClick={() => setPage("recommend")}>Recommendations</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;