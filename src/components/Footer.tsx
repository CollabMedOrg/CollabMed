import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex space-x-8">
              <Link to="/" className="nav-link hover:text-accent">
                Home
              </Link>
              <Link to="/mentorship" className="nav-link hover:text-accent">
                Mentorship
              </Link>
              <Link to="/volunteer" className="nav-link hover:text-accent">
                Volunteer
              </Link>
            </div>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-primary-foreground hover:text-accent transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground">
            © 2025 CollabMed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;