import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowRight, Users, Megaphone, DollarSign, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Volunteer = () => {
  return (
    <div className="min-h-screen bg-background page-transition">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 animate-fade-in">
            Apply to Volunteer with CollabMed
          </h1>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-12 animate-fade-in">
            Help us grow our community and impact by contributing to marketing, outreach, fundraising, or program development.
          </p>
          
          <Card className="section-card max-w-2xl mx-auto">
            <CardContent className="text-center p-12">
              <Heart className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-primary/70 mb-8">
                Join our team of dedicated volunteers and help shape the future of healthcare mentorship. Your skills and passion can help connect and empower the next generation of healthcare leaders.
              </p>
              
              <a 
                href="https://forms.gle/1KyYv42X7aRKf2Xi6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="hero-button text-lg flex items-center gap-2">
                  Open Volunteer Form
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volunteer Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Volunteer Opportunities</h2>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Choose from various ways to contribute your skills and make an impact in healthcare mentorship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <Megaphone className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Marketing</h3>
                <p className="text-primary/70">
                  Help spread the word about CollabMed through social media, content creation, and digital marketing campaigns.
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Community Outreach</h3>
                <p className="text-primary/70">
                  Connect with schools, universities, and healthcare organizations to expand our mentorship network.
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <DollarSign className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Fundraising</h3>
                <p className="text-primary/70">
                  Support our mission by helping secure funding through grants, donor outreach, and fundraising events.
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <Settings className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-4">Programs Development</h3>
                <p className="text-primary/70">
                  Help design and improve our mentorship programs, create resources, and enhance the user experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Why Volunteer with Us?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <div className="text-3xl font-bold text-accent mb-4">🌟</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Make an Impact</h3>
                <p className="text-primary/70">
                  Directly contribute to shaping the next generation of healthcare professionals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <div className="text-3xl font-bold text-accent mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Build Networks</h3>
                <p className="text-primary/70">
                  Connect with like-minded individuals passionate about healthcare and mentorship.
                </p>
              </CardContent>
            </Card>
            
            <Card className="section-card">
              <CardContent className="text-center p-8">
                <div className="text-3xl font-bold text-accent mb-4">📚</div>
                <h3 className="text-xl font-semibold text-primary mb-4">Gain Experience</h3>
                <p className="text-primary/70">
                  Develop valuable skills in your chosen area while making a meaningful difference.
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

export default Volunteer;