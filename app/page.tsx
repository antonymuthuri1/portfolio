
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Supercharge Your Business with AI & Automation</h1>
        <p className="mt-4 text-lg md:text-xl">We help businesses optimize operations, automate processes, and drive revenue.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="#contact" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold">Get a Free Consultation</a>
          <a href="#solutions" className="bg-indigo-800 text-white px-6 py-3 rounded-lg font-semibold">See Our Solutions</a>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <p className="text-gray-700 mb-8">We provide AI-driven solutions to enhance efficiency, automate workflows, and increase revenue.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">AI-Powered CRM</h3>
            <p className="text-gray-600">Automate customer engagement, lead nurturing & sales tracking.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Smart Inventory Management</h3>
            <p className="text-gray-600">Use AI to prevent overstocking & optimize supply chain logistics.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Financial Automation</h3>
            <p className="text-gray-600">Automate invoicing, fraud detection & real-time financial tracking.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">AI-Powered Marketing</h3>
            <p className="text-gray-600">Leverage AI for personalized marketing campaigns & customer insights.</p>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Solutions We’ve Built</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">AI-Powered Lead Management</h3>
            <p className="text-gray-600 mt-2"><strong>Challenge:</strong> Sales teams struggled with lead follow-ups.</p>
            <p className="text-gray-600 mt-1"><strong>Solution:</strong> Automated AI-driven lead tracking & email nurturing.</p>
            <p className="text-gray-600 mt-1"><strong>Results:</strong> Increased lead conversion rate by 40%.</p>
            <div className="mt-4">
              <a href="/case-study-ai-crm" className="text-indigo-500">Read More →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Swifniq Solutions?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">AI & Automation Experts</h3>
            <p className="text-gray-600">We build cutting-edge AI solutions that drive efficiency.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Customized for Your Business</h3>
            <p className="text-gray-600">Our solutions are tailored to your unique challenges.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Fast & Scalable</h3>
            <p className="text-gray-600">We implement AI quickly, ensuring immediate impact.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something Great</h2>
        <p className="text-lg mb-6">Schedule a free consultation and see how AI can transform your business.</p>
        <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">Get a Free Consultation</a>
      </section>




    </div>
  );
}
