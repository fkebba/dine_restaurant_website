export function Hero() {
  return `
  <div class="h-[250px] md:hidden bg-[url('/images/homepage/hero-bg-mobile.jpg')] bg-gray-700 bg-cover bg-blend-overlay"></div>

  <div class="md:h-[350px]  lg:hidden md:bg-[url('/images/homepage/hero-bg-tablet.jpg')] bg-gray-700 bg-cover bg-blend-overlay"></div>
   <div
      class="relative h-[600px] md:h-[650px] lg:h-[700px] lg:py-10 md:px-12 px-4  md:py-0 py-4 lg:bg-[url('/images/homepage/hero-bg-desktop.jpg')] bg-gray-700 bg-cover bg-blend-overlay"
    >
      <div class="absolute top-0 left-0 lg:w-[545px] lg:max-w-[600px] w-full bottom-0 bg-black"></div>
      <div class="lg:max-w-5xl mx-auto">
        <div class="relative lg:mb-26 px-35 md:px-70 lg:px-0 ml-auto ">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
      </div>
      <div class="relative lg:max-w-5xl text-center lg:text-left mr-auto lg:mx-auto">
        <div class="hero-content text-white lg:max-w-xl w-full mt-12 ">
          <h1 class="text-[48px] leading-[48px] -tracing-0.5 md:text-[80px] md:leading-[80px] -tracing-1  font-league font-light">Exquisite dining since 1989</h1>

          <p class="mt-6 font-league text-[20px] leading-[30px] lg:max-w-[450px] font-normal">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>

          <a href="/booking.html"  class="mt-10 inline-block border-2 sm:border-2 border-white sm:border-white font-league  text-[24px] md:text-[20px] tracking-widest hover:bg-white hover:text-black cursor-pointer px-12 py-4 md:px-10 md:py-4"
            >Book a table</a
          >
        </div>
      </div>
    </div>




     
  `;
}