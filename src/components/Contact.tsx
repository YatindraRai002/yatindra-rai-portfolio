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
           <h2 className="text-4xl lg:text-7xl font-black text-white text-center mb-6 tracking-tighter italic">
              Initiate <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">Contact</span>
           </h2>
           <div className="w-12 h-1 bg-white/10 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           
           {/* Info Panel */}
           <div className="lg:col-span-5 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl"
              >
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                        <Shield size={24} />
                     </div>
                     <h3 className="text-xl font-black text-white uppercase tracking-tight">Access Points</h3>
                  </div>

                  <div className="space-y-6">
                     {[
                        { icon: Mail, label: "Neural Mail", val: "yatindrarai999@gmail.com" },
                        { icon: MapPin, label: "Core Location", val: "Varanasi, India" },
                        { icon: Phone, label: "Comms Line", val: "+91 8726441500" }
                     ].map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                           <div className="flex items-center gap-4">
                              <item.icon size={18} className="text-gray-600 group-hover:text-primary transition-colors" />
                              <div className="flex flex-col">
                                 <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.label}</span>
                                 <span className="text-white font-medium text-sm group-hover:text-primary transition-colors">{item.val}</span>
                              </div>
                           </div>
                        </div>
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
                              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.05)" }}
                              href={social.link}
                              target="_blank"
                              className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all backdrop-blur-md"
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-3xl relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-5">
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
                             className="h-14 bg-white/5 border-white/10 rounded-2xl text-white placeholder-white/10 focus:border-primary/50 transition-colors"
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
                             className="h-14 bg-white/5 border-white/10 rounded-2xl text-white placeholder-white/10 focus:border-primary/50 transition-colors"
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
                          className="h-14 bg-white/5 border-white/10 rounded-2xl text-white placeholder-white/10 focus:border-primary/50 transition-colors"
                       />
                    </div>

                    <div className="space-y-3">
                       <Label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Data Payload</Label>
                       <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="WRITE YOUR MESSAGE HERE..."
                          className="min-h-[160px] bg-white/5 border-white/10 rounded-[32px] text-white placeholder-white/10 focus:border-primary/50 transition-colors resize-none p-6"
                       />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                       <Button
                          type="submit"
                          disabled={isSubmitting || isSuccess}
                          className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.3em] text-[10px] rounded-2xl shadow-[0_20px_40px_rgba(139,92,246,0.3)] disabled:opacity-50"
                       >
                          <AnimatePresence mode="wait">
                             {isSuccess ? (
                                <motion.div key="s" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                                   <CheckCircle size={18} /> Signal Transmitted
                                </motion.div>
                             ) : isSubmitting ? (
                                <motion.div key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                             ) : (
                                <motion.div key="d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                                   <Send size={18} /> Initiate Uplink
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
