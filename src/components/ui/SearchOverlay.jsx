import React, { useState, useEffect } from "react";

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      if (query.trim() === "") {
        setResults([]);
        setSelectedDestination(null);
        return;
      }

      try {
        const res = await fetch(
          "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations",
          { signal: controller.signal }
        );
        const data = await res.json();

        const filtered = data.filter((item) =>
          `${item.name} ${item.country}`.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      }
    };

    const timeout = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  const handleSelect = (item) => {
    setSelectedDestination(item);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative group">
          <input
            type="text"
            placeholder="Search destinations..."
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedDestination(null); 
            }}
            className="w-full py-4 pl-6 pr-14 text-lg bg-gray-800/80 border-2 border-gray-700 rounded-2xl outline-none focus:border-gray-500 placeholder-gray-400 text-white backdrop-blur-lg transition-all"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <kbd className="hidden sm:inline-flex items-center px-2 py-1 bg-gray-800/50 border border-gray-600 rounded-md text-gray-100 text-sm">
              Esc
            </kbd>
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {results.length > 0 && (
          <ul className="mt-4 bg-gray-800 rounded-xl max-h-60 overflow-y-auto text-white">
            {results.map((item) => (
              <li
                key={item.id}
                className="p-3 hover:bg-gray-700 cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <span className="font-semibold">{item.name}</span> —{" "}
                <span className="text-gray-300">{item.country}</span>
              </li>
            ))}
          </ul>
        )}

        {query && results.length === 0 && (
          <div className="p-5 bg-gray-900/80 rounded-2xl shadow-md border border-gray-700 text-gray-400 text-sm text-center mt-4">
            <strong>No destinations found.</strong> 
          </div>
        )}

        {selectedDestination && (
          <div className="mt-6 p-5 bg-gray-900/80 rounded-2xl text-white shadow-md border border-gray-700">
            <h2 className="text-xl font-bold mb-2">
              {selectedDestination.name} – {selectedDestination.country}
            </h2>
            <img
              src={selectedDestination.image}
              alt={selectedDestination.name}
              className="w-full max-h-60 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-300">{selectedDestination.description}</p>
            <p className="mt-2 text-sm text-gray-400">
              <strong>Price:</strong> ${selectedDestination.price}
            </p>
          </div>
        )}

        <p className="text-center mt-4 text-gray-400 text-sm">
          Click <strong>Ctrl+K</strong> or <strong>⌘+K</strong>, and start typing to search. Press <strong>Esc</strong> to close.
        </p>
      </div>
    </div>
  );
};

export default SearchOverlay;
