function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5">
          <h1 className="text-5xl font-extrabold text-blue-600">DigiTools</h1>

          <ul className="hidden items-center gap-10 text-[18px] font-medium text-gray-800 md:flex">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Testimonials</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>

          <div className="flex items-center gap-5">
            <button className="text-xl">🛒</button>
            <button className="hidden text-[18px] font-medium text-gray-800 md:block">
              Login
            </button>
            <button className="rounded-full bg-blue-600 px-6 py-3 text-[16px] font-medium text-white">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-8 py-16 lg:grid-cols-2 lg:py-20">
        {/* Left Side */}
        <div>
          <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 px-5 py-2 text-base font-medium text-blue-500">
            <span className="mr-2 text-blue-500">●</span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-[72px] font-extrabold leading-[1.05] text-[#2d2a6e]">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="mt-6 max-w-[700px] text-[22px] leading-10 text-gray-400">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-500 px-8 py-4 text-lg font-medium text-white">
              Explore Products
            </button>

            <button className="rounded-full border border-gray-300 px-8 py-4 text-lg font-medium text-gray-500">
              ▶ Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-end">
          <div className="relative h-[520px] w-full max-w-[620px] overflow-hidden rounded-none bg-[#f3f4fb]">
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e8e8d5d3b83?auto=format&fit=crop&w=900&q=80"
              alt="Hero"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-0 pb-16">
        <div className="grid w-full grid-cols-1 bg-gradient-to-r from-blue-600 to-purple-500 text-center text-white md:grid-cols-3">
          <div className="px-6 py-14 md:border-r md:border-white/30">
            <h2 className="text-7xl font-extrabold">50K+</h2>
            <p className="mt-4 text-3xl text-white/90">Active Users</p>
          </div>

          <div className="px-6 py-14 md:border-r md:border-white/30">
            <h2 className="text-7xl font-extrabold">200+</h2>
            <p className="mt-4 text-3xl text-white/90">Premium Tools</p>
          </div>

          <div className="px-6 py-14">
            <h2 className="text-7xl font-extrabold">4.9</h2>
            <p className="mt-4 text-3xl text-white/90">Rating</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App