const Hero = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 items-center my-20">
      <div>
        <h2 className="font-inter text-6xl font-bold">Build Your Ideal</h2>
        <h2 className=" text-6xl font-bold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
          Development Stack
        </h2>
        <p className="font-extralight text-base mt-5 mb-10 leading-6">
          Explore frontend, backend, database, and tooling options, <br />{" "}
          compare them side by side, and put together the stack that fits your
          <br />
          next project.
        </p>
        <div className="grid grid-cols-4 gap-2">
          <button className="btn btn-xs sm:btn-md bg-linear-to-r from-[#FF5722] to-[#D81B7E] text-white rounded-lg">
            Explore Technologies
          </button>
          <button className="btn btn-xs sm:btn-md rounded-lg">
            Learn More
          </button>
        </div>
      </div>
      <div className="justify-self-end">
        <img src="/src/assets/img/banner-stack.png" alt="Banner Stack" />
      </div>
    </div>
  );
};

export default Hero;
