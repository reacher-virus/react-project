import { MusicPlayer } from "./component/MusicPlayer";
import { AllSongs } from "./component/AllSongs";
import { Playlists } from "./component/Playlists";

import { BrowserRouter, Routes, Route } from "react-router";
import { MusicProvider } from "./contexts/MusicContext";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
        <div className="app">
          <Navbar />
          <main className="app-main">
            <div className="player-section">
              <MusicPlayer />
            </div>
            <div className="content-section">
              <Routes>
                <Route path="/" element={<AllSongs />} />
                <Route path="/playlists" element={<Playlists />} />
              </Routes>
            </div>
          </main>
        </div>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;