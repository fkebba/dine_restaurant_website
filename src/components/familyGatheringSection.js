export function familyGathering() {
  return `
  <img src="/images/patterns/pattern-curve-top-right.svg" class="absolute w-114 h-64 hidden sm:block" />
  <div class="relative py-24 md:py-34 md:px-16 lg:px-0 px-6">
      <div class="flex flex-col lg:max-w-5xl mx-auto justify-between lg:flex-row">
        <div class="relative lg:max-w-md mb-8 md:mb-0">
         <img id="event-desktop-image" src="/images/homepage/family-gathering-desktop.jpg" alt="Family dining" class=" hidden lg:block shadow-2xl" >
         <img id="event-tablet-image" src="/images/homepage/family-gathering-tablet.jpg" alt="Family dining" class="hidden md:block mb-6 lg:hidden mx-auto   shadow-2xl" >
          <img id="event-mobile-image" src="/images/homepage/family-gathering-mobile.jpg" alt="Family dining" class="md:hidden mx-auto w-full shadow-2xl" >
         <img src="/images/patterns/pattern-lines.svg" class="absolute -top-10 bottom-0 -left-12 hidden sm:block" />
        <img src="/images/patterns/pattern-divide.svg" class="absolute w-34 left-9/10 top-9/13 hidden lg:block" />
        </div>
        <div class="lg:max-w-md flex lg:flex-col flex-col-reverse justify-center pl-0 text-center lg:text-left">
        <div class="md:px-20 lg:px-0 md:mt-10 lg:mt-0">
          <h2 id="event-title" class="text-3xl font-league text-[#242b37] md:text-[48px] tracking-[-0.5px] mb-4 font-bold">Family Gathering</h2>
          <p id="event-description" class="text-[#5c6779] font-league text-[20px] leading-[30px] mb-8">We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience.</p>
          <a href="/booking.html" class="bg-black cursor-pointer text-white  text-[16px] font-league tracking-widest py-4 px-16 md:px-12 inline-block mx-auto md:mx-0 w-max uppercase hover:bg-white hover:border-[1px] hover:text-black transition">Book a table</a>
        </div>
          <div class="mt-10 mb-10 md:mb-0 space-y-4 font-league font-medium text-[#5c6779] text-[17px] leading-[28px] tracking-[2.5px]">
            <button class="event-type lg:block w-full md:w-auto uppercase cursor-pointer  md:mr-8 lg:mr-4">Family Gathering</button>
            <button class="event-type lg:block  w-full md:w-auto uppercase cursor-pointer  md:mr-8 lg:mr-4">Special Events</button>
            <button class="event-type lg:block  w-full uppercase cursor-pointer  md:w-auto">Social Events</button>
          </div>
        </div>
      </div>
    </div>
  `
}