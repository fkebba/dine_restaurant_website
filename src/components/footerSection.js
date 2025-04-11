export function footerSection() {
  return `
<footer class="bg-black text-white">
    <div class="py-16 px-8 bg-cover bg-center bg-gray-700 bg-blend-overlay" style="background-image: url('/images/homepage/ready-bg-desktop.jpg');  ">
      <div class="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <h2 class="text-3xl font-league md:text-5xl mb-8 font-bold md:mb-0 text-center lg:text-left">Ready to make a reservation?</h2>
        <a href="/booking.html" class="border md:mt-8 lg:mt-0 border-white text-[16px] px-12 py-4 lg:py-3 lg:px-6 inline-block uppercase tracking-widest font-medium hover:bg-white hover:text-black transition mx-auto md:mx-0 ">Book a table</a>
      </div>
    </div>
    <div class="py-8 px-8">
      <div class="max-w-5xl mx-auto flex flex-col lg:justify-between md:space-x-40  md:flex-row items-center  md:items-start  space-y-8 md:space-y-0">
  <div>
   <a href="/index.html"><img src="/images/logo.svg" class="mb-8  cursor-pointer"/></a>
  </div>
  <div class="lg:flex md:space-y-10 lg:space-x-40 text-gray-400">
   <div class="text-center font-league md:text-left">
          <p class="uppercase text-md  mb-1">Marthwaite, Sedbergh</p>
          <p class="uppercase text-md mb-1">Cumbria</p>
          <p class="uppercase text-md mb-4 md:mb-1">+00 44 123 4567</p>
        </div>
        <div class="text-center font-league md:text-left text-gray-400">
          <p class="uppercase text-md mb-1">Open Times</p>
          <p class="uppercase text-md mb-1">Mon - Fri: 09:00 AM - 10:00 PM</p>
          <p class="uppercase text-md mb-1">Sat - Sun: 09:00 AM - 11:30 PM</p>
        </div>
     </div>
     </div>
    </div>
  </footer>
  `
}