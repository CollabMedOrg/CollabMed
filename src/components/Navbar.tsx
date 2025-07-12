import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="CollabMed Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-accent' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/mentorship" 
              className={`nav-link ${isActive('/mentorship') ? 'text-accent' : ''}`}
            >
              Mentorship
            </Link>
            <Link 
              to="/volunteer" 
              className={`nav-link ${isActive('/volunteer') ? 'text-accent' : ''}`}
            >
              Volunteer
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-primary-foreground">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden mt-4 border-t border-primary-foreground/20 pt-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'text-accent' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/mentorship" 
              className={`nav-link ${isActive('/mentorship') ? 'text-accent' : ''}`}
            >
              Mentorship
            </Link>
            <Link 
              to="/volunteer" 
              className={`nav-link ${isActive('/volunteer') ? 'text-accent' : ''}`}
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;