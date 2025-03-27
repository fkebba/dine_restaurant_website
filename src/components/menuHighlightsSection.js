export function menuHighlights() {
  return `
    <div class="bg-black py-12 md:py-8 lg:py-24 px-4 md:px-18 lg:px-8">
      <div class="block  lg:flex justify-between  md:mt-24 md:max-w-5xl mx-auto">
        <div class="max-w-fit  md:max-w-md mb-12 lg:mb-0 text-center lg:text-left mx-auto lg:mx-0">
          <img src="/public/images/patterns/pattern-divide.svg" class="mb-6 w-24 mx-auto lg:mx-0" />
          <h2 class="text-3xl md:text-[45px] lg:text-[50px] text-white mb-6 md:mb-8 font-medium">A few highlights from our menu</h2>
          <p class="text-white text-base md:text-lg">We cater for all dietary requirements, but here is a glimpse at some of our dinner's favourites. Our menu is revamped every season.</p>
        </div>
        <div class="grid grid-cols-1  max-w-full lg:max-w-md gap-y-2 md:gap-y-12 gap-8">
          <div class="flex flex-col md:flex-row items-center relative text-center md:text-left">
            <div class="">
             <img src="/public/images/homepage/salmon-desktop-tablet.jpg" class="relative hidden md:block " />
              <img src="/public/images/homepage/salmon-mobile.jpg" class="relative md:hidden mb-8 " />
             </div>
            <div class="hidden md:block relative w-14">
              <img src="/public/images/patterns/pattern-divide.svg" class="absolute w-24 h-auto left-2/8 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              <h3 class="font-medium text-white">Seared Salmon Fillet</h3>
              <p class="text-sm text-gray-400">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
            </div>
            </div>
            <div class="w-full h-px bg-gray-700 my-2 "></div>
          
          <div class="flex flex-col md:flex-row items-center   relative text-center md:text-left">
            <div class="">
             <img src="/public/images/homepage/beef-desktop-tablet.jpg" class="relative hidden md:block " />
              <img src="/public/images/homepage/beef-mobile.jpg" class="relative md:hidden mb-8 " />
            </div>
            <div class="hidden md:block relative w-14">
              <img src="/public/images/patterns/pattern-divide.svg" class="absolute w-16 h-auto left-2/8 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              <h3 class="font-medium text-white">Rosemary Filet Mignon</h3>
              <p class="text-sm text-gray-400">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
            </div>
          </div>
           <div class="w-full h-px bg-gray-700 my-2 "></div>
           <div class="flex flex-col md:flex-row items-center mb-8 relative text-center md:text-left">
            <div class="">
             <img src="/public/images/homepage/chocolate-desktop-tablet.jpg" class="relative hidden md:block " />
              <img src="/public/images/homepage/chocolate-mobile.jpg" class="relative md:hidden mb-8 " />
            </div>
            <div class="hidden md:block relative w-14">
              <img src="/public/images/patterns/pattern-divide.svg" class="absolute w-24 h-auto left-2/8 top-9/12 transform -translate-x-1/2 -translate-y-1/3" />
            </div>
            <div>
              <h3 class="font-medium text-white">Summer Fruit Chocolate Mousse</h3>
              <p class="text-sm text-gray-400">A silky mousse combined with summer fruits and dark chocolate shavings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}