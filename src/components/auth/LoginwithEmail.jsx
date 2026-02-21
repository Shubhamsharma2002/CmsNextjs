export default function LoginWithEmail() {

  
  return (
    <div className="border-2 border-amber-200 p-6 rounded-lg w-full max-w-md mx-auto space-y-4 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 text-center">Login with Email</h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Sign In
      </button>
    </div>
  );
}
