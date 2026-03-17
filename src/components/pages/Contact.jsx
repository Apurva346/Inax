
// import React from 'react';

// const ContactUs = () => {
//   return (
//     <div className="w-full bg-white py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
//           {/* LEFT COLUMN: BRAND INFO & IMAGE */}
//           <div className="lg:w-1/2 flex flex-col justify-center">
//             <div className="mb-8">
//               <h4 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
//                 Need Any Help?
//               </h4>
//               <h2 className="text-4xl font-black text-blue-900 leading-tight">
//                 Get in touch with us <br />
//                 <span className="text-blue-700">I-NAX™ Precision Industries</span>
//               </h2>
//               <div className="w-16 h-1 bg-red-600 mt-4"></div>
//             </div>

//             <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
//               <img 
//                 src="/images/Contactusimage.jfif" 
//                 alt="Customer Support" 
//                 className="w-full h-[400px] object-cover"
//               />
//             </div>
//           </div>

//           {/* RIGHT COLUMN: CONTACT FORM */}
//           <div className="lg:w-1/2 bg-gray-50 p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100">
//             <h3 className="text-3xl font-black text-blue-900 mb-8 text-center lg:text-left">
//               Feel free to write
//             </h3>
            
//             {/* NETLIFY FORM SETTINGS ADDED HERE */}
//             <form 
//               name="inax-contact-form" 
//               method="POST" 
//               data-netlify="true"
//               className="space-y-6"
//             >
//               {/* This hidden input is required for React forms on Netlify */}
//               <input type="hidden" name="form-name" value="inax-contact-form" />

//               {/* Full Name */}
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <input 
//                   type="text" 
//                   name="full-name"
//                   placeholder="Enter your name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                   required
//                 />
//               </div>

//               {/* Email & Phone Row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">
//                     Email <span className="text-red-500">*</span>
//                   </label>
//                   <input 
//                     type="email" 
//                     name="email"
//                     placeholder="Email address"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">
//                     Phone <span className="text-red-500">*</span>
//                   </label>
//                   <input 
//                     type="tel" 
//                     name="phone"
//                     placeholder="Phone number"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Subject */}
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">
//                   Subject <span className="text-red-500">*</span>
//                 </label>
//                 <input 
//                   type="text" 
//                   name="subject"
//                   placeholder="Subject of inquiry"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//                   required
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">
//                   Message <span className="text-red-500">*</span>
//                 </label>
//                 <textarea 
//                   name="message"
//                   rows="4" 
//                   placeholder="Write your message here..."
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
//                   required
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button 
//                 type="submit"
//                 className="w-full bg-blue-700 text-white font-black py-4 rounded-lg uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg active:scale-95"
//               >
//                 Submit Now
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm(
//       'service_sw5lyih',      // तुमचा Service ID
//       'template_vj1b8os',     // तुमचा Template ID
//       form.current, 
//       'qJiwmX_sQ2bzT1_hy'     // तुमची Public Key
//     )
//     .then((result) => {
//         // हा तो 'Popup' जो युजरला दिसेल
//         alert("Success! Your message has been sent to I-NAX™. We will contact you soon.");
//         e.target.reset(); // फॉर्म रिकामा होईल
//     }, (error) => {
//         alert("Oops! Something went wrong. Please try again or call us directly.");
//         console.log(error.text);
//     });
//   };

//   return (
//     <div className="w-full bg-white py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
//           {/* LEFT COLUMN: BRAND INFO & IMAGE */}
//           <div className="lg:w-1/2 flex flex-col justify-center">
//             <div className="mb-8">
//               <h4 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">Need Any Help?</h4>
//               <h2 className="text-4xl font-black text-blue-900 leading-tight">
//                 Get in touch with us <br />
//                 <span className="text-blue-700">I-NAX™ Precision Industries</span>
//               </h2>
//               <div className="w-16 h-1 bg-red-600 mt-4"></div>
//             </div>

//             <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
//               <img src="/images/Contactusimage.jfif" alt="Customer Support" className="w-full h-[400px] object-cover" />
//             </div>
//           </div>

//           {/* RIGHT COLUMN: CONTACT FORM */}
//           <div className="lg:w-1/2 bg-gray-50 p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100">
//             <h3 className="text-3xl font-black text-blue-900 mb-8 text-center lg:text-left">Feel free to write</h3>
            
//             <form ref={form} onSubmit={sendEmail} className="space-y-6">
//               {/* Full Name - Name attribute matches template tags */}
//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
//                 <input type="text" name="full-name" placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" required />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
//                   <input type="email" name="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" required />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
//                   <input type="tel" name="phone" placeholder="Phone number" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" required />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
//                 <input type="text" name="subject" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none" required />
//               </div>

//               <div>
//                 <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
//                 <textarea name="message" rows="4" placeholder="Write your message here..." className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none resize-none" required></textarea>
//               </div>

//               <button type="submit" className="w-full bg-blue-700 text-white font-black py-4 rounded-lg uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg">
//                 Submit Now
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
emailjs.init("qJiwmX_sQ2bzT1_hy");

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_koor6je',      // तुमचा Service ID
      'template_vj1b8os',     // तुमचा Template ID
      form.current, 
      'qJiwmX_sQ2bzT1_hy'     // तुमची Public Key
    )
    .then((result) => {
        // यश मेसेज (Success Popup)
        alert("Success! Your message has been sent to I-NAX™. We will contact you soon.");
        e.target.reset(); // फॉर्म रिकामा होईल
    }, (error) => {
        alert("Oops! Something went wrong. Please try again or call us directly.");
        console.log(error.text);
    });
  };

  return (
    <div className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* LEFT COLUMN: BRAND INFO & IMAGE */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-8">
              <h4 className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">Need Any Help?</h4>
              <h2 className="text-4xl font-black text-blue-900 leading-tight">
                Get in touch with us <br />
                <span className="text-blue-700">I-NAX™ Precision Industries</span>
              </h2>
              <div className="w-16 h-1 bg-red-600 mt-4"></div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="/images/Contactusimage.jfif" alt="Customer Support" className="w-full h-[400px] object-cover" />
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:w-1/2 bg-gray-50 p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-black text-blue-900 mb-8 text-center lg:text-left">Feel free to write</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              
              {/* Full Name - Template मधील {{name}} साठी बदलले आहे */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email - {{email}} */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" placeholder="Email address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" required />
                </div>
                {/* Phone - {{phone}} */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                  <input type="tel" name="phone" placeholder="Phone number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" required />
                </div>
              </div>

              {/* Subject - Template मधील {{title}} साठी बदलले आहे */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject *</label>
                <input type="text" name="title" placeholder="Subject of inquiry" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" required />
              </div>

              {/* Message - {{message}} */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                <textarea name="message" rows="4" placeholder="Write your message here..." className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none" required></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-700 text-white font-black py-4 rounded-lg uppercase tracking-widest hover:bg-blue-800 transition-all shadow-lg active:scale-95">
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