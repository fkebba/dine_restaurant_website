export function bookingHero() {
  return `
  <div class="relative w-full">
   <div class="relative w-full">
      <div class="absolute inset-0 ">
       <img src="/public/images/booking/hero-bg-desktop.jpg" alt="Food on plate" class="hidden lg:block">
       <img src="/public/images/booking/hero-bg-tablet.jpg" alt="Food on plate" class="hidden md:block lg:hidden">
        <img src="/public/images/booking/hero-bg-mobile.jpg" alt="Food on plate" class="md:hidden">
      </div>
      <div class="relative w-full min-h-[200px] md:min-h-[450px] lg:min-h-[550px]">
        <div class="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
          <div class="flex justify-center md:justify-start">
            <a href="/index.html">
              <img src="/public/images/logo.svg" class="mb-6 lg:mb-24 cursor-pointer"/> 
            </a>
          </div>
          <div class="text-center lg:text-left px-2 md:px-20 lg:px-0 lg:max-w-md">
            <h1 class="text-white font-league text-4xl md:text-[80px] leading-[80px] -tracking-1  font-light mb-4 sm:mb-6">Reservations</h1>
            <p class="text-white font-league md:text-[20px] md:leading-[30px] text-[16px] leading-[26px] mb-6">
              We can't wait to host you. If you have any special requirements please feel free to call on the phone number below. We'll be happy to accommodate you.
            </p>
            <button id="book-table-btn" class="md:hidden border mb-42 md:mb-32 border-white text-[16px] font-league -tracking-1 py-4   px-12 inline-block w-max uppercase hover:bg-white hover:text-black text-white tracking-widest transition duration-300 cursor-pointer">Reserve Place</button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full overflow-hidden">
      <img 
        src="/public/images/patterns/pattern-curve-bottom-right.svg" 
        alt="" 
        class="w-full hidden lg:block md:max-w-5xl mx-auto md:ml-0"
      >
    </div>
  </div>
  `
}