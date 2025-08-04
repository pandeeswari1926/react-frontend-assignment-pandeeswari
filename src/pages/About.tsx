const About = () => {
  return (
    <div className="pt-24 px-4 sm:px-8 max-w-6xl mx-auto h-screen ">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We are passionate about building great user interfaces and
            experiences. Our app helps users easily switch between themes to
            suit their style. Whether it's light, dark, or vibrant, we have a
            theme for everyone.
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400">
            Built with React, Tailwind CSS, and full responsiveness in mind.
            Start exploring now and see how themes can transform your UI.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>

        {/* Right image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="About us illustration"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
