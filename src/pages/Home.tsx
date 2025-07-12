import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Welcome to CollabMed
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary/80 mb-8">
            Connecting Future Healthcare Leaders
          </h2>
          <p className="text-lg md:text-xl text-primary/70 mb-12 max-w-4xl mx-auto">
            CollabMed connects high school, college, and medical students pursuing a career in healthcare. 
            We provide mentorship, guidance, and a supportive community at every stage.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/mentorship">
              <Button className="hero-button text-lg">
                Sign Up for Mentorship
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button className="hero-button text-lg">
                Apply to Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-xl text-primary/80 max-w-4xl mx-auto">
              To bridge the gap between aspiring doctors through mentorship, resources, and real connections—empowering 
              the next generation of healthcare leaders.
            </p>
          </div>
          
          <Card className="section-card max-w-4xl mx-auto">
            <CardContent className="flex items-center justify-center p-12">
              <div className="text-center">
                <Target className="h-16 w-16 text-accent mx-auto mb-6" />
                <p className="text-lg text-primary/80">
                  Building bridges across academic stages to create a supportive network of future healthcare professionals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* The Program Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">How It Works</h2>
            <p className="text-xl text-primary/80 max-w-4xl mx-auto">
              We offer 1-on-1 mentorship across three academic stages: high school, college, and medical school. 
              Each mentee is matched with a mentor who understands their journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">High School</h3>
                <p className="text-primary/70">
                  Get guidance on pre-med preparation, course selection, and college applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">College</h3>
                <p className="text-primary/70">
                  Navigate pre-med requirements, MCAT preparation, and medical school applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <Briefcase className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Medical School</h3>
                <p className="text-primary/70">
                  Receive mentorship on specialties, residency applications, and career planning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-8">Get Involved</h2>
          <p className="text-xl text-primary/80 mb-12 max-w-3xl mx-auto">
            Want to help? We're looking for passionate volunteers in the following areas:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="section-card">
              <CardContent className="text-center p-6">
                <h3 className="text-lg font-semibold text-primary">Marketing</h3>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-6">
                <h3 className="text-lg font-semibold text-primary">Community Outreach</h3>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-6">
                <h3 className="text-lg font-semibold text-primary">Fundraising</h3>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-6">
                <h3 className="text-lg font-semibold text-primary">Programs Development</h3>
              </CardContent>
            </Card>
          </div>
          
          <Link to="/volunteer">
            <Button className="hero-button text-lg">
              Apply to Volunteer
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;