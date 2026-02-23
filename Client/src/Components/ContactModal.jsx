import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TbBulb, TbWorld } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaReact } from "react-icons/fa";
import { HiExclamation } from "react-icons/hi";
export default function ContactModal({ onClose }) {
  const [open, setOpen] = useState(true);
  const [toasts, setToasts] = useState(false);
  const [successToast, setSuccessToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessageError, setshowMessageError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    if(name === "message" && value.trim().length >= 10){
      setshowMessageError(false);
    }
  };

  const handleTemplateClick = (template) => {
    setToasts(true);
    const templates = {
      "Mobile app":
        "Hi! I’m looking to develop a mobile app. Here’s a brief overview of the idea: [brief description]. My budget range is [budget], and I’m aiming to launch by [timeline].",
      Website:
        "Hi! I’m looking to build a new website. Here’s a brief overview of what I need: [brief context]. My budget is around [budget], and I’m aiming for a launch around [timeline].",
      "Custom project":
        "Hi! I have a custom project idea. Here’s a brief overview: [brief description]. My budget range is [budget], and I’m aiming to have it completed by [timeline].",
    };
    setFormData((prev) => ({
      ...prev,
      message: templates[template],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if(formData.message.trim().length < 10){
      setshowMessageError(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://app.proforms.top/f/pr31ceecfb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success("Form submitted successfully!", {
          position: "bottom-right",
          autoClose: 4000,
          icon: <FaReact color="#16a34a" size={18} />,
          className:
            "bg-green-900/20 max-w-[90%] min-h-fit text-gray-300 font-outfit text-[15px] border border-gray-600/30 px-4 py-3 outline-none",
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.", {
        position: "bottom-right",
        autoClose: 4000,
        icon: (
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-600">
            <HiExclamation className="text-white text-xs" />
          </div>
        ),
        className:
          "!bg-[#f2dede] !text-red-600 !font-semibold !text-sm !rounded-xl !px-4 !py-3 !shadow-md flex items-center",
      });
      console.error("Error Submitting Form:", error);
    }
    setIsSubmitting(false);
  };

  const items = [
    {
      name: "Mobile app",
      icon: <FaMobileAlt />,
    },
    {
      name: "Website",
      icon: <TbWorld />,
    },
    {
      name: "Custom project",
      icon: <TbBulb />,
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <div className="absolute inset-0 flex items-end lg:items-center justify-center pointer-events-none">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.25 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.y > 100 || velocity.y > 500) {
                  handleClose();
                }
              }}
              className="
              pointer-events-auto
                w-full
                sm:w-[90%]
                md:w-[80%]
                lg:w-full lg:max-w-lg
                bg-black/60
                backdrop-blur-xl
                rounded-t-xl lg:rounded-xl
                shadow-xl
                p-5 sm:p-6 md:p-7
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border border-gray-600/30 p-3 rounded-xl">
                <div className="flex lg:hidden justify-center mb-4 -mt-1">
                  <div
                    className="py-3 px-8 cursor-grab active:cursor-grabbing"
                    onTouchStart={(e) => e.stopPropagation()}
                  >
                    <div className="h-1.5 w-20 rounded-full bg-gray-500/50 transition-all hover:bg-gray-400/70 active:scale-110" />
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-between mb-6">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-200 font-outfit">
                    Contact Form
                  </h2>

                  <button
                    onClick={handleClose}
                    className="hidden lg:flex p-2 rounded-lg hover:bg-gray-700/30 text-gray-400 hover:text-gray-300 transition"
                  >
                    <X size={18} />
                  </button>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm text-gray-400 font-outfit"
                      >
                        Full Name
                      </label>

                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your Full name"
                        id="name"
                        className="mt-1 w-full rounded-full border border-gray-600/30 bg-gray-900/20 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#2E8B57]/50 placeholder:text-[14px] placeholder:font-outfit text-gray-500 placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="text-sm text-gray-400 font-outfit">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className=" placeholder:font-outfit placeholder:text-[14px] mt-1 w-full rounded-full border border-gray-600/30 bg-gray-900/20 px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#2E8B57]/50 text-gray-500 placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 font-outfit">
                      Brief Overview
                    </label>
                     {showMessageError && (
                      <p className="text-red-400 text-sm mb-1">
                        Message must be at least 10 characters
                      </p>
                    )}
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 w-full rounded-xl border border-gray-600/30 bg-gray-900/20 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2E8B57]/50 transition resize-none text-gray-500 text-[14px] placeholder:text-gray-500 font-outfit"
                    />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-2">
                      Quick start with a template:
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {items.map(({ name, icon }, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleTemplateClick(name)}
                          className="px-4 py-2 text-gray-400 text-[13px] font-outfit rounded-full border border-gray-600/30 bg-gray-800/20 flex items-center gap-2 hover:bg-gray-700/30 hover:border-[#2E8B57]/50 hover:text-gray-300 transition"
                        >
                          <span className="text-base">{icon}</span>
                          <span>{name}</span>
                        </button>
                      ))}
                    </div>
                    <div>
                      {toasts && (
                        <p className="mt-5 w-full rounded-xl border text-gray-300 font-outfit text-[15px] border-gray-600/30 bg-green-900/20 px-4 py-3 outline-none">
                          📝 Please customize the template with your specific
                          details before sending.
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center rounded-xl bg-gradient-to-br from-black to-[#2E8B57] text-gray-100 font-medium py-2.5 transition shadow-lg disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span className="h-4 w-4 rounded-full border-2 border-gray-200 border-t-transparent animate-spin" />
                    ) : (
                      "Send"
                    )}
                  </button>
                </form>
                {successToast && (
                  <div className="bg-white flex items-center justify center "></div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
