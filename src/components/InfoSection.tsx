
import React from 'react';
import { 
  Award, 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Target,
  Users
} from 'lucide-react';

const InfoSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-cream-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Understanding Win Rate in B2B Sales</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Win rate is a crucial metric that helps sales teams evaluate their performance and identify areas for improvement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">What is Win Rate?</h3>
            </div>
            <p className="text-gray-600">
              Win rate is the percentage of deals won out of the total number of deals closed within a specific time period. It's a key performance indicator (KPI) for sales effectiveness.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Why It Matters</h3>
            </div>
            <p className="text-gray-600">
              A higher win rate indicates more effective sales strategies, better lead qualification, and stronger value propositions. It directly impacts revenue and forecasting accuracy.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Improving Win Rate</h3>
            </div>
            <p className="text-gray-600">
              To improve win rate, focus on lead qualification, sales training, understanding customer needs, and refining your value proposition to address specific pain points.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary mb-6">Key Factors Affecting Win Rate</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-secondary/20 p-3 rounded-lg mr-4 mt-1">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Lead Qualification</h4>
                <p className="text-gray-600">
                  Properly qualifying leads ensures you're pursuing opportunities that align with your ideal customer profile, increasing the likelihood of a successful sale.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary/20 p-3 rounded-lg mr-4 mt-1">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Sales Cycle Length</h4>
                <p className="text-gray-600">
                  The duration of your sales cycle can impact win rates. Shorter cycles often indicate efficient processes, while too-quick closures might suggest insufficient qualification.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary/20 p-3 rounded-lg mr-4 mt-1">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Sales Team Skills</h4>
                <p className="text-gray-600">
                  The expertise, training, and effectiveness of your sales representatives directly influence your overall win rate and revenue generation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-secondary/20 p-3 rounded-lg mr-4 mt-1">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Market Conditions</h4>
                <p className="text-gray-600">
                  External factors such as market trends, competition, economic climate, and industry shifts can significantly impact your win rate over time.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">How to Use Our Win Rate Calculator</h3>
          <p className="text-gray-600 mb-6">
            Our Win Rate Calculator helps B2B sales teams analyze their performance metrics and identify areas for improvement. Follow these steps to get meaningful insights:
          </p>
          
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li className="pl-2">Enter the number of deals won during your selected time period</li>
            <li className="pl-2">Input the total number of deals closed (both won and lost)</li>
            <li className="pl-2">Add the total revenue generated from won deals</li>
            <li className="pl-2">Include your average sales cycle length (optional)</li>
            <li className="pl-2">Review the calculated metrics and visual representations</li>
            <li className="pl-2">Download or email the results for team review and planning</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
