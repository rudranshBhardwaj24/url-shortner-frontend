import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    const res = await fetch(
      "https://url-shortner-backend-ssdt.onrender.com/api/url/save",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }),
      }
    );

    const data = await res.text(); // because backend returns plain string
    setShortUrl(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Short URL Generator</h1>

        <input
          type="text"
          className="border px-4 py-2 rounded w-full mb-2"
          placeholder="Enter long URL"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition mb-4"
          onClick={handleShorten}
        >
          Shorten URL
        </button>
        {shortUrl && (
          <p className="text-green-600 font-semibold mb-4 break-all">
            Shortened URL: {shortUrl}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
