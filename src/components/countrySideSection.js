export function CountrysideSection() {
  return `
  <div class="relative px-4 md:px-18 lg:px-8 ">
  <img src="/public/images/patterns/pattern-curve-top-right.svg" class="absolute hidden md:block bottom-0 top-1/3 left-0   md:w-94 lg:w-212 h-64" />
   <div class="flex flex-col lg:flex-row md:max-w-5xl justify-between mx-auto relative">
      <div class="relative lg:max-w-md mb-24 md:mb-2 lg:mb-0">
      <img src="/public/images/homepage/enjoyable-place-desktop.jpg" alt="Countryside" class="relative hidden lg:block shadow  ml-auto object-cover -translate-y-1/12" />
       <img id="event-image" src="/public/images/homepage/enjoyable-place-tablet.jpg" alt="Family dining" class="relative hidden md:block lg:hidden mx-auto mt-12 shadow-2xl -translate-y-5/16" />
         <img id="event-image" src="/public/images/homepage/enjoyable-place-mobile.jpg" alt="Family dining" class="relative md:hidden shadow-2xl  -translate-y-1/14" />
       </div>
      <div class="relative  flex flex-col  justify-center md:px-20 lg:px-0 lg:max-w-[460px]  lg:mx-0 text-center lg:text-left mb-12 lg:mb-0">
        <img src="/public/images/patterns/pattern-divide.svg" class="w-24 mx-auto lg:mx-0 mb-6" />
        <h2 class="text-3xl text-[#242b37] md:text-[45px] lg:text-[50px] mb-4 font-bold leading-tight">Enjoyable place for all the family</h2>
        <p class="text-[#5c6779]  md:text-[16px] lg:text-[19px] mb-4">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
      </div>
      </div>
  </div>
  
  `;
}