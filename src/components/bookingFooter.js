export function bookingFooter() {
  return `
   <div class="bg-black text-white mt-[450px] md:mt-[600px] lg:mt-0 py-12">
    <div class="container mx-auto px-4 md:px-12">
      <div class="flex flex-col items-center text-center md:text-left md:space-x-40 lg:space-x-0 md:flex-row lg:justify-between md:items-start">
        <div>
        <a href="/index.html"">
              <img src="/public/images/logo.svg" class="w-28 h-14 mb-8 cursor-pointer"/> 
          </a>
        </div>
        <div class="lg:flex lg:space-x-40 md:space-y-20 lg:space-y-0  ">
         <div class="mb-8 md:mb-0 ">
          <div class="text-gray-400">
            <p>MARTHWAITE, SEDBERGH</p>
            <p>CUMBRIA</p>
            <p>+00 44 123 4567</p>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">OPEN TIMES</h3>
          <div class="text-gray-400">
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
        </div>
       </div>
  </div>
  `
}