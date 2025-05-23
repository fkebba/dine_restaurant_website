export function Hero() {
  return `
  <div class="h-64 md:hidden bg-[#5c6779] bg-cover bg-blend-overlay" style="background-image: url('/images/homepage/hero-bg-mobile.jpg')"></div>
  <div class="hidden md:block lg:hidden h-80 bg-[#17192b] bg-cover bg-blend-overlay" style="background-image: url('/images/homepage/hero-bg-tablet.jpg')"></div>
    <div
    class="relative h-[500px] md:h-[600px] lg:h-[700px] px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-10 bg-[#242b37] bg-cover bg-blend-overlay lg:bg-[url('/images/homepage/hero-bg-desktop.jpg')]" >
    <div class="absolute top-0 left-0 w-full lg:w-[510px] bottom-0  bg-black"></div>
    <div class="max-w-5xl mx-auto relative lg:mb-24">
      <div class="relative flex justify-center lg:justify-start lg:px-0 ">
        <img src="/images/logo.svg" alt="Logo" class="w-auto h-auto" />
      </div>
    </div>
    <div class="relative max-w-5xl text-center lg:text-left mx-auto">
      <div class="text-white max-w-sm md:max-w-lg mt-12 mx-auto lg:mx-0">
        <h1 class="text-5xl leading-wide md:leading-[80px] md:text-[80px] md:-tracking-1 font-light font-league">Exquisite dining since 1989</h1>
        <p class="mt-6  text-[16px] leading-[26px] md:text-[20px] md:leading-[30px] font-normal font-league max-w-md mx-auto lg:mx-0">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
         <a href="/booking.html" class="mt-8 md:mt-10 inline-block border-2 border-white font-league tracking-widest text-lg md:text-xl hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer px-12 py-4 md:px-10 md:py-4">
          Book a table
        </a>
      </div>
    </div>
  </div>
  `;
}
