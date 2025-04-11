export function CountrysideSection() {
  return `
  <div class="relative px-6 md:px-18 lg:px-8 ">
  <img src="/images/patterns/pattern-curve-top-right.svg" class="absolute hidden md:block bottom-0 md:top-5/24 lg:top-5/13 left-0 md:w-94 lg:w-202 h-64" />
   <div class="flex flex-col lg:flex-row md:max-w-5xl justify-between mx-auto relative">
      <div class="relative lg:max-w-md">
      <img src="/images/homepage/enjoyable-place-desktop.jpg" alt="Countryside" class="relative hidden lg:block shadow  ml-auto object-cover -translate-y-1/12" />
       <img id="event-image" src="/images/homepage/enjoyable-place-tablet.jpg" alt="Family dining" class="relative hidden md:block lg:hidden mx-auto shadow-2xl -translate-y-5/18" />
         <img id="event-image" src="/images/homepage/enjoyable-place-mobile.jpg" alt="Family dining" class="relative md:hidden shadow-2xl mx-auto -translate-y-5/32 sm:-translate-y-5/24 w-full" />
       </div>
      <div class="relative flex flex-col justify-center md:px-24 lg:px-0 lg:max-w-md lg:mx-0 text-center lg:text-left mb-14 lg:mb-0">
        <img src="/images/patterns/pattern-divide.svg" class="w-20 mx-auto lg:mx-0 mb-10" />
        <h2 class="text-[#242b37] font-league sm:px-10 px-4 md:px-0 -tracking-0.25 text-4xl md:text-[48px] md:-tracking-0.5  mb-6 font-bold leading-[48px]">Enjoyable place for all the family</h2>
        <p class="text-[#5c6779] font-league text-[20px] leading-[30px]  md:text-[20px] md:leading-[30px] font-normal mb-4">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
      </div>
      </div>
  </div>
  
  `;
}