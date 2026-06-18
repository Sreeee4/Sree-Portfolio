import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSending(true);

    const serviceId = 'service_zu9jqxj';
    const templateId = 'template_b8u99vc';
    const publicKey = 'MmQjRrVcvhdpnWaLx';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setIsSending(false);
        setIsSubmitted(true);
        formRef.current?.reset();
        setTimeout(() => setIsSubmitted(false), 4000);
      }, (error) => {
        console.log(error.text);
        setIsSending(false);
        alert("Missed the shot! Failed to send the message. Check your console for details.");
      });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-pitch-dark relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-8xl font-display font-black text-white uppercase mb-4">
            The Final <span className="text-pitch-neon">Whistle</span>
          </h2>
          <p className="text-pitch-line/60 font-mono">Let's discuss tactics and build something extraordinary.</p>
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8 relative"
        >
          <div className="group relative interactive">
            <div className="absolute inset-0 bg-pitch-neon/20 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-none"></div>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your Name (The Manager)"
              className="w-full bg-pitch-light/80 border-b-2 border-pitch-line/20 p-4 text-white font-sans outline-none focus:border-pitch-neon transition-colors duration-300 relative z-10 placeholder:text-pitch-line/30"
            />
          </div>

          <div className="group relative interactive">
            <div className="absolute inset-0 bg-pitch-blue/20 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-none"></div>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email Address"
              className="w-full bg-pitch-light/80 border-b-2 border-pitch-line/20 p-4 text-white font-sans outline-none focus:border-pitch-blue transition-colors duration-300 relative z-10 placeholder:text-pitch-line/30"
            />
          </div>

          <div className="group relative interactive">
            <div className="absolute inset-0 bg-pitch-neon/20 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 rounded-none"></div>
            <textarea
              rows={4}
              name="message"
              required
              placeholder="Match Strategy (Your Message)"
              className="w-full bg-pitch-light/80 border-b-2 border-pitch-line/20 p-4 text-white font-sans outline-none focus:border-pitch-neon transition-colors duration-300 relative z-10 placeholder:text-pitch-line/30 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="interactive relative w-full overflow-hidden bg-pitch-light border border-pitch-line/20 py-6 font-display font-black uppercase tracking-widest text-white group transition-colors hover:border-pitch-neon disabled:opacity-50"
          >
            <div className="relative z-10 flex items-center justify-center gap-4">
              {isSending ? (
                <span className="text-pitch-blue animate-pulse">Taking the shot...</span>
              ) : isSubmitted ? (
                <span className="text-pitch-neon">Goal Scored! (Message Sent)</span>
              ) : (
                <>
                  <span>Send Proposal</span>
                  <motion.div animate={{ x: isHovered ? 10 : 0, rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.5 }}>
                    <Send className={isHovered ? "text-pitch-neon" : "text-white"} />
                  </motion.div>
                </>
              )}
            </div>

            {/* Hover fill effect */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered && !isSubmitted && !isSending ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="absolute inset-0 bg-pitch-neon/10 origin-left"
            ></motion.div>
          </button>
        </motion.form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-0 w-full text-center text-pitch-line/30 font-mono text-xs uppercase tracking-widest">
        &copy; 2026 Sreekanth P G. Engineered for the Top 1%.
      </div>
    </section>
  );
}
