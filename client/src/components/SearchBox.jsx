export const SearchBox = () => {
  return (
    <div className="flex items-center justify-center">

      <div className="flex items-center w-full max-w-xl bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-2">

        {/* Input */}
        <input
          type="text"
          placeholder="Enter Certificate ID..."
          className="flex-1 h-12 px-4 bg-transparent outline-none text-gray-700"
        />

        {/* Button */}
        <button className="h-12 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Verify
        </button>

      </div>

    </div>
  );
};