import { useNavigate } from "react-router-dom";
// Assuming Layout is your wrapper component
import Layout from "../Layout/Layout";
// Assuming NotFoundImg is your 404 image
import NotFoundImg from "../assets/images/not-found.png";

function NotFound() {
  const navigate = useNavigate();
  // Define brand colors
  const deepTeal = "#006973";
  const accentGold = "#D4AF37";

  return (
    <Layout hideBar={true}>
      <section className="min-h-screen w-full flex md:flex-row flex-col-reverse md:justify-around items-center px-4 bg-gray-50 dark:bg-[#131212]">
        {/* Left Side: 404 Content and Button */}
        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="text-9xl font-extrabold text-gray-700 dark:text-white tracking-widest font-cormorant">
            404
          </h1>

          {/* Branded "Page Not Found" Banner */}
          <div
            className="text-white px-3 py-1 text-sm rounded rotate-12 absolute font-semibold"
            style={{ backgroundColor: accentGold, color: deepTeal }} // Use brand colors
          >
            We seem to be lost...
          </div>

          <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 font-cormorant">
            The holistic path you sought doesn't exist here.
          </p>

          {/* Branded Go Back Button */}
          <button className="mt-8" onClick={() => navigate(-1)}>
            <a
              className="relative inline-block text-sm font-medium group focus:outline-none focus:ring"
              style={{ color: accentGold }} // Accent Gold outline color
            >
              <span
                className="relative block px-8 py-3 text-white border border-current transition-colors duration-200 hover:scale-105"
                style={{ backgroundColor: deepTeal, borderColor: deepTeal }} // Deep Teal button background
              >
                Go Back
              </span>
            </a>
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/3 w-full max-w-sm mt-10 md:mt-0">
          {/* Replace this with your actual image component */}
          <img
            src={NotFoundImg}
            alt="Page Not Found Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    </Layout>
  );
}

export default NotFound;
