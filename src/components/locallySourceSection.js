export function locallSourceSection() {
  return `
  <div class="relative px-4 md:px-18 lg:px-8 ">
   <div class="flex flex-col-reverse lg:flex-row md:max-w-5xl justify-between mx-auto relative">
      <div class="relative  flex flex-col  justify-center md:px-20 lg:px-0 lg:max-w-md lg:mx-0 text-center lg:text-left mb-12 lg:mb-0">
        <img src="/public/images/patterns/pattern-divide.svg" class="w-24 mx-auto lg:mx-0 mb-6" />
        <h2 class="text-3xl md:text-[45px] text-[#242b37] lg:text-[50px] mb-4 font-bold leading-tight">The most locally sourced food</h2>
        <p class="text-[#5c6779] md:text-[18px] lg:text-[19px] mb-4">All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.</p>
      </div>
      <div class="relative lg:max-w-md mb-24 lg:mb-0">
      <img src="/public/images/homepage/locally-sourced-desktop.jpg" alt="Countryside" class="relative hidden lg:block shadow  ml-auto object-cover translate-y-1/12" />
      <img id="event-image" src="/public/images/homepage/locally-sourced-tablet.jpg" alt="Family dining" class="relative hidden md:block lg:hidden mx-auto mt-12   shadow-2xl" />
            <img id="event-image" src="/public/images/homepage/locally-sourced-mobile.jpg" alt="Family dining" class="md:hidden shadow-2xl" />
        <img src="/public/images/patterns/pattern-lines.svg" class="absolute lg:-right-30 md:-right-6 top-5/13 hidden md:block" />
      </div>
    </div>
    <img src="/public/images/patterns/pattern-curve-top-left.svg" class="absolute bottom-0 lg:top-80 right-0 lg:w-9/14 lg:h-70 md:w-1/2 md:h-62  hidden md:block" />
  </div>
   
  `
}