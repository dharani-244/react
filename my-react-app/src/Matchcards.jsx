import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import './Matchcards.css';

const CARD_SYMBOLS = ['🍎', '🍎', '🍊', '🍊', '🍌', '🍌', '🍇', '🍇', 
                      '🍓', '🍓', '🍉', '🍉', '🍒', '🍒', '🥝', '🥝'];

const Matchcards = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(new Set());
  const [matched, setMatched] = useState(new Set());
  const [moves, setMoves] = useState(0);
  const hasInitialized = useRef(false);

  // Compute game won state instead of storing it
  const gameWon = useMemo(() => {
    return cards.length > 0 && matched.size === cards.length && matched.size > 0;
  }, [matched, cards.length]);

  const initializeGame = useCallback(() => {
    const shuffled = [...CARD_SYMBOLS].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped(new Set());
    setMatched(new Set());
    setMoves(0);
  }, []);

  // Initialize game on mount only
  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      initializeGame();
    }
  }, [initializeGame]);

  // Check for matches when two cards are flipped
  useEffect(() => {
    if (flipped.size === 2) {
      const [first, second] = Array.from(flipped);
      
      // Small delay to let user see both cards before checking
      const timer = setTimeout(() => {
        if (cards[first] === cards[second]) {
          // Cards match
          setMatched(prev => new Set([...prev, first, second]));
        }
        // Unflip cards (whether they matched or not)
        setFlipped(new Set());
        setMoves(prev => prev + 1);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [flipped, cards]);

  const handleCardClick = useCallback((index) => {
    // Don't allow clicking if game is won, card already flipped, or already matched
    if (gameWon || flipped.has(index) || matched.has(index)) {
      return;
    }
    
    // Don't allow flipping more than 2 cards
    if (flipped.size >= 2) {
      return;
    }

    setFlipped(prev => new Set([...prev, index]));
  }, [flipped, matched, gameWon]);

  return (
    <div className="matchcards-container">
      <h1>🎮 Match Cards Game</h1>
      
      <div className="instructions">
        <h2>📋 How to Play:</h2>
        <ol>
          <li>Click on any card to flip it and reveal the emoji</li>
          <li>Click on another card to find its matching pair</li>
          <li>If the cards match, they stay flipped permanently</li>
          <li>If they don't match, both cards flip back over</li>
          <li>Find all matching pairs to win the game!</li>
          <li>Try to complete the game in the fewest moves possible</li>
        </ol>
      </div>

      <div className="game-stats">
        <div className="stat">
          <span>Moves: </span>
          <span className="stat-value">{moves}</span>
        </div>
        <div className="stat">
          <span>Matched: </span>
          <span className="stat-value">{Math.floor(matched.size / 2)} / {Math.floor(cards.length / 2)}</span>
        </div>
      </div>

      {gameWon && (
        <div className="win-message">
          🎉 You Won! Completed in {moves} moves! 🎉
        </div>
      )}

      <div className="cards-grid">
        {cards.map((symbol, index) => (
          <div
            key={`card-${index}`}
            className={`card ${flipped.has(index) || matched.has(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
            role="button"
            tabIndex={0}
            aria-pressed={flipped.has(index) || matched.has(index)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{symbol}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={initializeGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Matchcards;
