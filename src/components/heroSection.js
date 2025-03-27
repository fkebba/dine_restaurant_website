export function Hero() {
  return `
    <div class="flex flex-col-reverse lg:flex-row">
      <div class="bg-black text-white w-full lg:w-1/2 px-4 py-8 lg:py-0 lg:px-0 flex flex-col justify-center">
        <div class="text-center lg:text-left lg:translate-x-40  md:px-18 lg:px-0 space-y-4 md:space-y-6  mx-auto md:mx-12 lg:mx-0">
          <img src="/public/images/logo.svg" class="w-14 h-10 sm:w-28 sm:h-14 mb-8 lg:mb-20 md:mt-4  mx-auto lg:mx-0" /> 
          <h1 class="text-2xl md:text-3xl tracking-wider lg:text-4xl xl:text-5xl font-light">Exquisite dining<br />since 1989</h1>
          <p class="text-sm sm:text-base text-gray-300 my-4 md:my-6">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <div class="flex justify-center lg:justify-start">
            <button id="book-table-btn" class="border mb-8 lg:mb-20 md:mb-28 md:mt-10 lg:mt-0 border-white text-[16px] py-2 px-12 md:py-4 md:px-10  tracking-widest inline-block w-max uppercase hover:bg-white hover:text-black transition duration-300 cursor-pointer">Book a table</button>
          </div>
        </div>
      </div>
      <div class"w-full md:h-1/9 md:w-1/3 lg:w-1/2">
       <img src="/public/images/homepage/hero-bg-desktop.jpg" alt="Pasta dish" class="hidden lg:block object-cover w-full" />
        <img src="/public/images/homepage/hero-bg-tablet.jpg" alt="Pasta dish" class="hidden md:block lg:hidden object-cover  w-full " />
        <img src="/public/images/homepage/hero-bg-mobile.jpg" alt="Pasta dish" class="md:hidden object-center w-full" />
      </div>
     </div>
  `;
}