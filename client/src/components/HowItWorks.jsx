import { Search, Eye, Download } from "lucide-react";

const steps = [
  {
    icon: <Search size={28} />,
    title: "Enter Certificate ID",
    desc: "Input your unique certificate ID in the search box to begin verification."
  },
  {
    icon: <Eye size={28} />,
    title: "View Details",
    desc: "Instantly view certificate details including name, domain, and dates."
  },
  {
    icon: <Download size={28} />,
    title: "Download Certificate",
    desc: "Download your verified certificate in a clean and printable format."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>

        <p className="mt-4 text-gray-600">
          Verify your certificate in just 3 simple steps
        </p>

        {/* Steps */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">

          {steps.map((step, index) => (
            <div key={index} className="relative">

              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm w-8 h-8 flex items-center justify-center rounded-full">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">

                {/* Icon */}
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600">
                  {step.desc}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;