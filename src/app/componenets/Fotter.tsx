import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          
          {/* Newsletter Section */}
          <div className="space-y-6 mb-8 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold birds">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to my newsletter for the latest updates and insights.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-2 border-white rounded-lg px-4 py-2 focus:outline-none"
              />
              <button className="bg-white text-black px-6 py-2 rounded-lg birds hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6 w-fit">
            <h3 className="text-xl md:text-2xl font-bold birds">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black p-4 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a 
                href="https://www.upwork.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black p-4 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
              </a>

              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black p-4 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
