import { Mail, Youtube, Code2 } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-blue-200 mb-12">
            Have questions? We'd love to hear from you. Get in touch with us today!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:techhubacademy25@gmail.com"
              className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 flex flex-col items-center"
            >
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-200">techhubacademy25@gmail.com</p>
            </a>

            <div className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Youtube className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Subscribe on YouTube</h3>
              <p className="text-blue-200">Tech Hub Academy</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-blue-800 mt-12 pt-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Code2 className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold">Tech Hub Academy</span>
            </div>
            <p className="text-blue-300 text-center md:text-right">
              Empowering You with Digital Skills for Tomorrow
            </p>
          </div>
          <div className="text-center mt-6 text-blue-400 text-sm">
            &copy; 2024 Tech Hub Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
}
