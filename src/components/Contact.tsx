import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle, Shield, Fingerprint } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "All core fields required.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      const mailtoLink = `mailto:yatindrarai999@gmail.com?subject=${encodeURIComponent(formData.subject || 'Neural Network Inquiry')}&body=${encodeURIComponent(
        `Unit Name: ${formData.name}\nSource: ${formData.email}\n\nTransmission:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      toast({ title: "Signal Sent", description: "Communication channel established." });
      setIsSuccess(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
        setIsSuccess(false);
      }, 2000);
    }, 800);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
           >
              <Fingerprint size={16} className="text-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Biometric Protocol</span>
           </motion.div>
           <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black text-white text-center mb-6 tracking-tight italic">
              Initiate <span className="text-shimmer bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent px-4 py-2 inline-block">Contact</span>
           </h2>
           <div className="w-12 h-1 bg-white/10 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           
           {/* Info Panel */}
           <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 rounded-3xl lg:rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl group hover:border-primary/30 transition-all duration-500"
              >
                  <div className="flex items-center gap-4 mb-8">
                     <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/10"
                     >
                        <Shield size={24} />
                     </motion.div>
                     <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">Access Points</h3>
                  </div>

                  <div className="space-y-6">
                     {[
                        { icon: Mail, label: "Neural Mail", val: "yatindrarai999@gmail.com" },
                        { icon: MapPin, label: "Core Location", val: "Varanasi, India" },
                        { icon: Phone, label: "Comms Line", val: "+91 8726441500" }
                     ].map((item, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + (i * 0.1) }}
                          className="group/item cursor-pointer"
                        >
                           <div className="flex items-center gap-4">
                              <item.icon size={18} className="text-gray-600 group-hover/item:text-primary transition-colors" />
                              <div className="flex flex-col">
                                 <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.label}</span>
                                 <span className="text-white font-medium text-sm group-hover/item:text-primary transition-colors">{item.val}</span>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/5">
                     <div className="flex gap-4">
                        {[
                           { icon: Github, link: "https://github.com/YatindraRai002" },
                           { icon: Linkedin, link: "https://www.linkedin.com/in/yatindra-rai-6a3181324/" }
                        ].map((social, i) => (
                           <motion.a
                              key={i}
                              whileHover={{ y: -5, scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.1)", borderColor: "rgba(139, 92, 246, 0.4)" }}
                              whileTap={{ scale: 0.95 }}
                              href={social.link}
                              target="_blank"
                              className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all backdrop-blur-md shadow-lg"
                           >
                              <social.icon size={20} />
                           </motion.a>
                        ))}
                     </div>
                  </div>
              </motion.div>
           </div>

           {/* Form Panel */}
           <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-10 rounded-3xl lg:rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Send size={120} />
                 </div>

                 <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <Label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Entity Name</Label>
                          <Input
                             name="name"
                             value={formData.name}
                             onChange={handleInputChange}
                             placeholder="IDENTIFIER"
                             className="h-14 bg-white/5 border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                          />
                       </div>
                       <div className="space-y-3">
                          <Label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Encryption Endpoint</Label>
                          <Input
                             name="email"
                             type="email"
                             value={formData.email}
                             onChange={handleInputChange}
                             placeholder="EMAIL@DOMAIN"
                             className="h-14 bg-white/5 border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                          />
                       </div>
                    </div>

                    <div className="space-y-3">
                       <Label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Communication Header</Label>
                       <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="SUBJECT LINE"
                          className="h-14 bg-white/5 border-white/10 rounded-2xl text-white placeholder-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                       />
                    </div>

                    <div className="space-y-3">
                       <Label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Data Payload</Label>
                       <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="WRITE YOUR MESSAGE HERE..."
                          className="min-h-[160px] bg-white/5 border-white/10 rounded-[32px] text-white placeholder-white/20 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none p-6"
                       />
                    </div>

                    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                       <Button
                          type="submit"
                          disabled={isSubmitting || isSuccess}
                          className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl shadow-[0_20px_40px_rgba(139,92,246,0.3)] disabled:opacity-50 transition-all overflow-hidden group/btn relative"
                       >
                          <AnimatePresence mode="wait">
                             {isSuccess ? (
                                <motion.div key="s" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                                   <CheckCircle size={18} /> Signal Transmitted
                                </motion.div>
                             ) : isSubmitting ? (
                                <motion.div key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                             ) : (
                                <motion.div key="d" initial={{ y: 0 }} animate={{ y: 0 }} className="flex items-center gap-2">
                                   <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /> 
                                   Initiate Uplink
                                </motion.div>
                             )}
                          </AnimatePresence>
                       </Button>
                    </motion.div>
                 </form>
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
