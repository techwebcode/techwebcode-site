import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div>
          <h2 className="text-xl font-bold text-white">Tech Web Code</h2>
          <p className="mt-2 text-sm">
            Tools & resources for developers. Compare code, learn, and explore
            tech guides to improve your workflow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://x.com/TechWebCode" target="_blank" rel="noreferrer" className="hover:text-white">
              Twitter
            </a>
            <a href="https://youtube.com/@techwebcode" target="_blank" rel="noreferrer" className="hover:text-white">
              YouTube
            </a>
            <a href="https://github.com/techwebcode" target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tech Web Code. All rights reserved.
      </div>
    </footer>
  );
}
