import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
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
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      // Create mailto link with form data
      const mailtoLink = `mailto:yatindrarai999@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      toast({
        title: "Success!",
        description: "Your email client is opening with the message pre-filled.",
      });

      setIsSuccess(true);
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitting(false);
        setIsSuccess(false);
      }, 2000);
    }, 500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "yatindrarai999@gmail.com",
      gradient: "from-purple-600 to-pink-600",
      emoji: "📧"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Varanasi, Uttar Pradesh",
      gradient: "from-blue-600 to-purple-600",
      emoji: "📍"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8726441500",
      gradient: "from-green-600 to-blue-600",
      emoji: "📞"
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden"
                  >
                    {/* Gradient border */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-100 blur-sm rounded-xl transition-all duration-300`}></div>
                    
                    <div className="relative flex items-center gap-4 bg-slate-800/60 backdrop-blur-sm rounded-xl p-5 border border-purple-500/30 group-hover:border-purple-400/60 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
                      <div className={`p-3 bg-gradient-to-br ${info.gradient} rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="text-white font-semibold text-sm">
                          {info.emoji} {info.title}
                        </h4>
                        <p className="text-gray-400 text-sm break-all hover:text-gray-300 transition-colors">{info.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/YatindraRai002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50 hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Github className="text-gray-300 group-hover:text-white transition-colors relative z-10" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yatindra-rai-6a3181324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden w-12 h-12 bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all duration-300 border border-slate-600/50 hover:border-blue-500/50 hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Linkedin className="text-gray-300 group-hover:text-white transition-colors relative z-10" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="relative group overflow-hidden">
              {/* Gradient border on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 to-pink-600/50 opacity-0 group-hover:opacity-100 blur-sm rounded-2xl transition-all duration-300"></div>
              
              <div className="relative bg-slate-800/60 backdrop-blur-lg rounded-2xl border border-purple-500/30 group-hover:border-purple-400/60 p-8 lg:p-10 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-300">
                        Your Name *
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 h-10"
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-300">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 h-10"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold text-gray-300">
                      Subject
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 h-10"
                      placeholder="What's this about?"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-300">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none min-h-[140px]"
                      placeholder="Tell me about your project, ideas, or just say hello!"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:scale-100 disabled:shadow-md flex items-center justify-center gap-2"
                  >
                    {isSuccess ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
