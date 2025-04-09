export function menuHighlights() {
  return `
    <div class="bg-black py-12 md:py-8 lg:py-24 px-4 md:px-22 lg:px-0">
      <div class="block  lg:flex justify-between  md:mt-24 md:max-w-5xl mx-auto">
        <div class="max-w-fit  md:max-w-md mb-12 lg:mb-0 text-center lg:text-left mx-auto lg:mx-0">
          <img src="/images/patterns/pattern-divide.svg" class="mb-10 w-16 mx-auto lg:mx-0" />
          <h2 class="text-4xl -tracking-0.25 px-4 md:px-0  font-league md:text-[48px] leading-[48px] md:-tracking-0.5 text-white mb-6 md:mb-8 font-medium">A few highlights from our menu</h2>
          <p class="text-white font-league text-[20px] leading-[30px] font-normal">We cater for all dietary requirements, but here is a glimpse at some of our dinner's favourites. Our menu is revamped every season.</p>
        </div>
        <div class="grid grid-cols-1  max-w-full lg:max-w-md gap-y-2 md:gap-y-8 gap-8">
          <div class="flex flex-col md:flex-row items-center relative text-center md:text-left">
            <div class="">
             <img src="/images/homepage/salmon-desktop-tablet@2x.jpg" class="relative hidden md:block " />
              <img src="/images/homepage/salmon-mobile.jpg" class="relative md:hidden mb-8 " />
             </div>
            <div class="hidden md:block relative w-10">
              <img src="/images/patterns/pattern-divide.svg" class="absolute w-24 h-auto left-2/8 top-0  -translate-x-1/2 -translate-y-7 " />
            </div>
            <div>
              <h3 class="font-medium font-league text-[20px] leading-[24px] -tracking-0.25 text-white pb-2">Seared Salmon Fillet</h3>
              <p class="text-base font-league text-[16px] px-[6px] sm:px-[38px] md:px-0 leading-[26px] text-gray-400">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            </div>
            </div>
            <div class="w-full h-px bg-gray-700 my-2 "></div>
          
          <div class="flex flex-col md:flex-row items-center   relative text-center md:text-left">
            <div class="">
             <img src="/images/homepage/beef-desktop-tablet@2x.jpg" class="relative hidden md:block  " />
              <img src="/images/homepage/beef-mobile.jpg" class="relative md:hidden mb-8 " />
            </div>
            <div class="hidden md:block relative w-14">
              <img src="/images/patterns/pattern-divide.svg" class="absolute w-16 h-auto left-2/8 top-0  -translate-x-1/2 -translate-y-7" />
            </div>
            <div>
              <h3 class="font-medium font-league text-white text-[20px] leading-[24px] -tracking-0.25 pb-2">Rosemary Filet Mignon</h3>
              <p class="text-[16px] px:[6px] sm:px-[38px] md:px-0 leading-[26px] font-league  text-gray-400">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
            </div>
          </div>
           <div class="w-full h-px bg-gray-700 my-2 "></div>
           <div class="flex flex-col md:flex-row items-center mb-8 relative text-center md:text-left">
            <div>
             <img src="/images/homepage/chocolate-desktop-tablet@2x.jpg" class="relative hidden md:block " />
              <img src="/images/homepage/chocolate-mobile.jpg" class="relative md:hidden mb-8 " />
            </div>
            <div class="hidden md:block relative w-14">
              <img src="/images/patterns/pattern-divide.svg" class="absolute w-24 h-auto left-2/8 top-0  -translate-x-1/2 -translate-y-7" />
            </div>
            <div>
              <h3 class="font-medium font-league text-white text-[20px] leading-[24px] -tracking-0.25 pb-2">Summer Fruit Chocolate Mousse</h3>
              <p class="text-[16px] leading-[26px] px-[6px] sm:px-[38px] md:px-0 font-league text-gray-400">A silky mousse combined with summer fruits and dark chocolate shavings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}