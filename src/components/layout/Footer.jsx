import { Facebook, Twitter, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold">
              Travel beyond your imagination, <br />
              with our Travel Agency!
            </h3>
          </div>

          {/* Middle Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p>1080 Brickell Ave</p>
            <p>Miami - Florida</p>
            <p>U.S. of America</p>
            <div className="flex justify-center lg:justify-start gap-4 mt-4">
              {/* Social Media Links */}
              <div className="text-gray-400 hover:text-white cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="text-gray-400 hover:text-white cursor-pointer">
                <Youtube size={20} />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <div className=" bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 cursor-pointer flex items-center gap-2">
              <Mail size={18} />
              <span>info@travel.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start mt-2 gap-2">
              <Phone size={18} />
              <p>+01 483 593 284</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
