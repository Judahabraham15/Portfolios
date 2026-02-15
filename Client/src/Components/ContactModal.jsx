import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ onClose }) {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleTemplateClick = (template) => {
    const templates = {
      "Mobile App": "I'm interested in building a mobile app for...",
      Website: "I need a modern website for...",
      "Custom Project": "I have a custom project that requires...",
    };
    setFormData((prev) => ({
      ...prev,
      message: templates[template],
    }));
  };
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

       
          <div className="absolute inset-0 flex items-end lg:items-center justify-center">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="
                w-full
                sm:w-[90%]
                md:w-[80%]
                lg:w-full lg:max-w-lg
                bg-white
                rounded-t-2xl lg:rounded-2xl
                shadow-xl
                p-5 sm:p-6 md:p-7
              "
            >
              <div className="border border-gray-300 p-3 rounded-xl">
              {/* Drag bar (mobile + tablet) */}
              <div className="flex lg:hidden justify-center mb-4">
                <div className="h-1.5 w-16 rounded-full bg-gray-300" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-center lg:justify-between mb-6 ">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                  Contact Form
                </h2>

                <button
                  onClick={handleClose}
                  className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm text-gray-600">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your Full name"
                      className="mt-1 w-full rounded-full border border-orange-200 bg-orange-50/40 px-4 py-1.5 outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-[14px] placeholder:font-outfit"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 font-outfit">Email</label>
                    <input
                      type="email"
                      placeholder="example@email.com"
                      className="mt-1 w-full rounded-full border border-orange-200 bg-orange-50/40 px-4 py-2.5 outline-none focus:ring-2 focus:ring-orange-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-600 font-outfit">
                    Brief Overview
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-xl border border-orange-200 bg-orange-50/40 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    Quick start with a template:
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Mobile App", "Website", "Custom Project"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleTemplateClick(item)}
                        className="px-4 py-2 text-sm rounded-full border border-gray-200 bg-gray-50"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 transition"
                >
                  Send
                </button>
              </form>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
