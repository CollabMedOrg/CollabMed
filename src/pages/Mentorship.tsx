import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Mentorship = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            Sign Up for 1-on-1 Mentorship
          </h1>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-12">
            Join our community of future healthcare professionals. We'll pair you with a mentor at the next stage of your journey.
          </p>
          
          <Card className="section-card max-w-2xl mx-auto">
            <CardContent className="text-center p-12">
              <Users className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Ready to Connect with Your Mentor?
              </h2>
              <p className="text-primary/70 mb-8">
                Complete our mentorship form to get matched with someone who understands your path and can guide you toward your healthcare career goals.
              </p>
              
              <a 
                href="https://forms.gle/z3jqJp8KhbRVfEEE9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="hero-button text-lg flex items-center gap-2">
                  Open Mentorship Form
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <div className="text-3xl font-bold text-accent mb-4">1-on-1</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Personal Mentorship</h3>
                <p className="text-primary/70">
                  Get personalized guidance tailored to your specific goals and challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <div className="text-3xl font-bold text-accent mb-4">3</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Academic Stages</h3>
                <p className="text-primary/70">
                  Mentorship available for high school, college, and medical school students.
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <div className="text-3xl font-bold text-accent mb-4">∞</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Ongoing Support</h3>
                <p className="text-primary/70">
                  Build lasting relationships that extend beyond formal mentorship periods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentorship;