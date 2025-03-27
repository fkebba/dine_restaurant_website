export function familyGathering() {
  return `
  <img src="/public/images/patterns/pattern-curve-top-right.svg" class="absolute w-114 h-64 hidden sm:block" />
  <div class="relative py-24 md:py-34 md:px-18 lg:px-0 px-4">
      <div class="flex flex-col lg:max-w-5xl mx-auto justify-between lg:flex-row">
        <div class="relative lg:max-w-md mb-8 md:mb-0">
         <img id="event-desktop-image" src="/public/images/homepage/family-gathering-desktop.jpg" alt="Family dining" class=" hidden lg:block shadow-2xl" >
         <img id="event-tablet-image" src="/public/images/homepage/family-gathering-tablet.jpg" alt="Family dining" class="hidden md:block mb-6 lg:hidden mx-auto   shadow-2xl" >
          <img id="event-mobile-image" src="/public/images/homepage/family-gathering-mobile.jpg" alt="Family dining" class="md:hidden shadow-2xl" >
         <img src="/public/images/patterns/pattern-lines.svg" class="absolute -top-10 bottom-0 -left-12 hidden sm:block" />
        <img src="/public/images/patterns/pattern-divide.svg" class="absolute w-24 left-5/8 top-5/7 hidden lg:block" />
        </div>
        <div class="lg:max-w-md flex lg:flex-col flex-col-reverse justify-center pl-0 text-center lg:text-left">
        <div class="md:px-20 lg:px-0 md:mt-10 lg:mt-0">
          <h2 id="event-title" class="text-3xl text-[#242b37] md:text-[45px] mb-4 font-bold">Family Gathering</h2>
          <p id="event-description" class="text-[#5c6779] text-[18px] md:[18px] mb-8">We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience.</p>
          <button id="book-table-btn" class="bg-black cursor-pointer text-white text-xs py-3 px-6 inline-block mx-auto md:mx-0 w-max uppercase hover:bg-gray-800 transition">Book a table</button>
        </div>
          <div class="mt-10 mb-10 md:mb-0 space-y-4">
            <button class="event-type uppercase text-xs md:text-[16px] lg:text-[12px] tracking-widest font-medium cursor-pointer lg:block    w-full md:w-auto md:mr-18 lg:mr-4">Family Gathering</button>
            <button class="event-type uppercase text-xs md:text-[16px] lg:text-[12px] tracking-widest text-gray-400 cursor-pointer lg:block  w-full md:w-auto md:mr-18 lg:mr-4">Special Events</button>
            <button class="event-type uppercase text-xs md:text-[16px] lg:text-[12px] tracking-widest text-gray-400 cursor-pointer lg:block  w-full md:w-auto">Social Events</button>
          </div>
        </div>
      </div>
    </div>
  `
}