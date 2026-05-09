const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">
            Luxury Jewels
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Discover exquisite jewelry crafted with passion and precision.
            Timeless elegance for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="/"
                className="hover:text-yellow-400 transition-colors"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/shop"
                className="hover:text-yellow-400 transition-colors"
              >
                Shop
              </a>
            </li>

            <li>
              <a
                href="/cart"
                className="hover:text-yellow-400 transition-colors"
              >
                Cart
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Customer Care
          </h4>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 transition-colors"
              >
                Shipping
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-yellow-400 transition-colors"
              >
                Returns
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Follow Us
          </h4>

          <div className="flex space-x-4">
            
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 
                1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 
                1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 
                0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 
                2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 
                2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 
                1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 
                2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 
                2.212 9.142 0 14.307-7.721 
                13.995-14.646.962-.695 1.797-1.562 
                2.457-2.549z" />
              </svg>
            </a>

            
          </div>
          <div>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
>
              <svg
              className="w-5 h-5"
               fill="currentColor"
               viewBox="0 0 24 24"
 >
            <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.33 4 20 5.67 20 7.75v8.5C20 18.33 18.33 20 16.25 20h-8.5C5.67 20 4 18.33 4 16.25v-8.5C4 5.67 5.67 4 7.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
           </svg>
          </a>
          </div>
          <div>
            <a
             href="#"
            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
>
             <svg
             className="w-5 h-5"
             fill="currentColor"
             viewBox="0 0 24 24"
  >
             <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
           </svg>
           </a>
          </div>
    
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
        <p>
          &copy; 2026 Luxury Jewels. All rights reserved. Created by Srilekha Paul
        </p>
      </div>

    </footer>
  );
};

export default Footer;