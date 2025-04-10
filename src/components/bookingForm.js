export function form() {
    return `
    <div class="absolute lg:top-5/9 mx-auto top-5/6  lg:bottom-0 lg:right-0 lg:left-5/10 px-6 md:px-28 lg:px-0  lg:max-w-1/2 w-full lg:pr-24  flex items-center justify-center p-8">
    <img src="/images/patterns/pattern-lines.svg" class="absolute hidden lg:block  -inset-12 top-97 shadow-2xl bottom-0" />
     <div class="relative w-full bg-white md:p-8 p-4 lg:mx-0  rounded shadow-2xl">
          <form id="reservation-form" class="space-y-6">
            <div>
              <label for="name" class="sr-only font-league">Name</label>
              <input type="text" id="name" name="name" placeholder="Name" required
                class="w-full px-4 py-3 border-b border-gray-300 focus:border-black  focus:outline-none">
            </div>
             <div>
              <label for="email" class="sr-only font-league">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" required
                class="w-full px-4 py-3 border-b font-league border-gray-300 focus:border-black focus:outline-none">
            </div>
            <div>
              <label class="block text-gray-500 mb-2 font-league">Pick a date</label>
              <div class="flex gap-4">
                <div class="flex-1">
                  <select id="month" name="month" required
                    class="w-full px-4 py-3 border-b font-league border-gray-300 focus:border-black focus:outline-none">
                    <option value="" disabled selected>MM</option>
                  </select>
                </div>
                <div class="flex-1">
                  <select id="day" name="day" required
                    class="w-full px-4 py-3 border-b font-league border-gray-300 focus:border-black focus:outline-none">
                    <option value="" disabled selected>DD</option>
                  </select>
                </div>
                <div class="flex-1">
                  <select id="year" name="year" required
                    class="w-full px-4 py-3 border-b font-league border-gray-300 focus:border-black focus:outline-none">
                    <option value="" disabled selected>YYYY</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label class="block text-gray-500 mb-2 font-league">Pick a time</label>
              <div class="flex gap-4">
                <div class="flex-1">
                  <select id="hour" name="hour" required
                    class="w-full px-4 py-3 border-b font-league border-gray-300 focus:border-black focus:outline-none">
                    <option value="" >HH</option>
                  </select>
                </div>
                <div class="flex-1">
                  <select id="minute" name="minute" required
                    class="w-full px-4 py-3 border-b border-gray-300 font-league focus:border-black focus:outline-none">
                    <option value="" disabled selected>MM</option>
                  </select>
                </div>
                <div class="flex-1">
                  <select id="ampm" name="ampm" required
                    class="w-full px-4 py-3 border-b font-league border-gray-300 focus:border-black focus:outline-none">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-gray-500 mb-2 font-league">Number of people</label>
              <div class="flex items-center border-b border-gray-300">
                <button type="button" id="decrease-people" class="px-4 py-2 text-2xl font-bold focus:outline-none">-</button>
                <input type="number" id="people" name="people" value="4" min="1" max="20" readonly
                  class="flex-1 font-league text-center py-3 focus:outline-none">
                <button type="button" id="increase-people" class="px-4 py-2 text-2xl font-bold focus:outline-none">+</button>
              </div>
            </div>
              <button type="submit"
              class="w-full bg-black font-league hover:bg-white hover:text-black  hover:border cursor-pointer text-white py-4 px-8 font-medium tracking-widest uppercase transition duration-300">
              Make Reservation
            </button>
          </form>
           <div id="success-message" class="hidden mt-6 p-4 font-league bg-green-100 text-green-800 rounded">
            Your reservation has been submitted successfully! We'll send a confirmation email shortly.
          </div>
        </div>
         </div>
       `
}