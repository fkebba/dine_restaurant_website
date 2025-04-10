export function bookingFooter() {
  return `
  <div class="bg-black text-white mt-30 sm:mt-30 lg:mt-0 py-12">
    <div class="container mx-auto px-4 md:px-12">
      <div class="flex flex-col items-center text-center md:text-left md:flex-row md:items-start">
        <div class="mb-8 md:mb-0 md:mr-12 lg:mr-24">
          <a href="/index.html">
            <img src="/images/logo.svg" alt="Dine Logo" class="mb-8 cursor-pointer"/> 
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          <div>
            <div class="text-gray-400 font-league">
              <p>MARTHWAITE, SEDBERGH</p>
              <p>CUMBRIA</p>
              <p>+00 44 123 4567</p>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-bold font-league">OPEN TIMES</h3>
            <div class="text-gray-400 font-league">
              <p>MON - FRI: 09:00 AM - 10:00 PM</p>
              <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
