import { SearchBox } from "./SearchBox";

const Hero = () => {
  return (
    <section className="relative bg-linear-to-b from-[#F8FAFC] to-[#EEF2FF] py-24 overflow-hidden">
      
      {/* Background Blur Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-200 opacity-30 blur-3xl rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-block mb-4 px-4 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          Secure Certificate Verification
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Verify Certificates{" "}
          <span className="text-blue-600">Instantly</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          Fast, secure and reliable platform to validate certificates in seconds.
          No hassle, no delays.
        </p>

        {/* Search Box */}
        <div className="mt-10">
          <SearchBox />
        </div>

      </div>
    </section>
  );
};

export default Hero;