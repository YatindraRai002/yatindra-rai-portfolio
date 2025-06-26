
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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

    // Create mailto link with form data
    const mailtoLink = `mailto:yatindrarai999@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Get In Touch
            </span>
          </h2>
          <div className="w-12 sm:w-16 md:w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-3 sm:mb-4 md:mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="px-2 sm:px-4 lg:px-0">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-4 lg:px-0">
              <div className="flex items-center space-x-3 sm:space-x-4 group p-2 sm:p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Mail className="text-white" size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-medium text-sm sm:text-base">Email</h4>
                  <p className="text-gray-400 text-xs sm:text-sm break-all">yatindrarai999@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 group p-2 sm:p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <MapPin className="text-white" size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-medium text-sm sm:text-base">Location</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Varanasi, Uttar Pradesh</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 group p-2 sm:p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Phone className="text-white" size={16} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-white font-medium text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">+91 8726441500</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 md:space-x-6 pt-3 sm:pt-4 md:pt-6 px-2 sm:px-4 lg:px-0">
              <a
                href="https://github.com/YatindraRai002"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110 border border-purple-500/20"
              >
                <Github className="text-white" size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/yatindra-rai-6a3181324/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-slate-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 border border-blue-500/20"
              >
                <Linkedin className="text-white" size={16} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-slate-800/40 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-purple-500/20 p-3 sm:p-4 md:p-6 lg:p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-300">
                      Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 h-8 sm:h-10 md:h-12 text-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-300">
                      Email *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 h-8 sm:h-10 md:h-12 text-sm"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="subject" className="text-xs sm:text-sm font-medium text-gray-300">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 h-8 sm:h-10 md:h-12 text-sm"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="message" className="text-xs sm:text-sm font-medium text-gray-300">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="bg-slate-700/50 border-purple-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none min-h-[80px] sm:min-h-[100px] md:min-h-[120px] text-sm"
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-2 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800 text-sm sm:text-base"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 pt-4 sm:pt-6 md:pt-8 border-t border-purple-500/20 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 Yatindra Rai. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
