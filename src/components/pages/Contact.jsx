import React from 'react';

const ContactUs = () => {
  return (
    <div className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* LEFT COLUMN: BRAND INFO & IMAGE */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-8">
              <h4 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
                Need Any Help?
              </h4>
              <h2 className="text-4xl font-black text-blue-900 leading-tight">
                Get in touch with us <br />
                <span className="text-blue-700">I-NAX™ Precision Industries</span>
              </h2>
              <div className="w-16 h-1 bg-red-600 mt-4"></div>
            </div>

            {/* Support Image - As seen in your screenshot */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src="/images/Contactusimage.jfif" 
                alt="Customer Support" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:w-1/2 bg-gray-50 p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-black text-blue-900 mb-8 text-center lg:text-left">
              Feel free to write
            </h3>
            
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="Email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Subject of inquiry"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows="4" 
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-blue-700 text-white font-black py-4 rounded-lg uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg active:scale-95"
              >
                Submit Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;