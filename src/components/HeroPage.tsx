const HeroPage = () => {
  return (
    <div className="p-1 mt-5 flex">
      <div className="bg-gradient-to-tl from-purple-9 to-green-700 h-[24rem] lg:h-[50rem] w-full relative">
        <img
          src="https://img.freepik.com/free-photo/blur-coffee-shop_74190-5513.jpg?w=1380&t=st=1707046055~exp=1707046655~hmac=d740d451b26a589877a1551cc98fe85660a3edbe4922c2b4824ac3cdf14711b5"
          alt="cafe"
          className="w-full h-full object-cover absolute mix-blend-multiply opacity-80"
        />
        <div className="text-center lg:text-start">
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl">
            The Joke Cake Chronicles
          </h1>
          <p className="text-sm mt-2 text-muted-foreground">
            A modal dialog that interrupts the user with important content and
            expects a response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
