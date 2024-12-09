// HomePage.js
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <header className="py-12 bg-gradient-to-r from-primary to-primary-foreground text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to SmartHealth Navigator
          </h1>
          <p className="mt-4 text-lg md:text-xl text-card-foreground">
            AI-driven healthcare solutions for accessible and affordable care.
          </p>
          <div className="mt-6">
            <Link
              href="#features"
              className="bg-card text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-card text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-primary">Our Features</h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="bg-card shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">AI Symptom Checker</h3>
              <p className="text-card-foreground">
                Input your symptoms to receive AI-powered diagnostics and personalized health recommendations.
              </p>
            </div>
            <div className="bg-card shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Telemedicine</h3>
              <p className="text-card-foreground">
                Consult with certified doctors remotely at an affordable cost, anytime and anywhere.
              </p>
            </div>
            <div className="bg-card shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Cost Optimization</h3>
              <p className="text-card-foreground">
                Find cost-effective treatment options and the nearest affordable healthcare services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-foreground py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-card">
            Ready to Take Control of Your Health?
          </h2>
          <p className="mb-6 text-card-foreground">
            Join thousands of users in making healthcare more accessible and affordable.
          </p>
          <Link
            href="/symptom-checker"
            className="bg-card text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
