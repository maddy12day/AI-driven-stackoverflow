const Background = () => {
  return (
    <>
      <div className="relative w-1/2 bg-login flex flex-col justify-center items-center p-6">
        <img
          src="https://cdn.stackoverflow.co/images/jo7n4k8s/production/ed9b76801d6f22cd8a3e351d86814cb539468d2e-1920x1081.png?rect=0,37,1920,1009&w=415&h=218&auto=format&dpr=2"
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Stack Overflow Clone
          </h1>
          <p className="text-lg">
            Join our community to get help, share knowledge, and build your
            career.
          </p>
        </div>
      </div>
    </>
  );
};

export default Background;
