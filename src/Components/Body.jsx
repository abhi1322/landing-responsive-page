const Body = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8 justify-center items-center">
      <div className="left-side md:w-1/2 ">
        <h1 className="font-['Playfair_Display'] font-bold text-6xl md:w-3/4">
          Host your website in less than 5 minutes.
        </h1>
        <p className="md:w-2/3 text-neutral-500/80 mt-6">
          With Hoster, get your website up and running in no less than 5 minutes
          with the most competitive pricing packages available online.
        </p>
        <div className="input-sec space-x-4 mt-5">
          <input
            className="py-4 px-5 border rounded-md"
            type="text"
            placeholder="Enter e-mail address"
          />
          <button className="bg-blue-500 text-white py-4 px-5 rounded-md hover:bg-blue-400">
            Join Waitlist
          </button>
        </div>
        <p className="flex gap-2 text-neutral-800 mt-4">
          <img src="/public/assets/Checkmark.svg" alt="check" />
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
      <div className="right-side relative w-1/2 flex justify-center items-center">
        <img
          className="absolute w-[50vh] -rotate-[45deg]"
          src="/public/assets/Blue-Shape.svg"
          alt="illustration"
        />
        <img
          className="absolute w-[50vh] -rotate-[30deg]"
          src="/public/assets/Pink-Shape.svg"
          alt="illustration"
        />
        <img
          className="absolute w-[50vh] -rotate-[15deg]"
          src="/public/assets/purple-Shape.svg"
          alt="illustration"
        />
        <img
          className="w-[50vh] relative"
          src="/public/assets/Hero-Model.png"
          alt="hero-img"
        />
      </div>
    </div>
  );
};

export default Body;
