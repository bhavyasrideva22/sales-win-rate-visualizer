
import React from 'react';
import { 
  BarChart4, 
  CreditCard, 
  LineChart, 
  CheckCircle, 
  X, 
  Users 
} from 'lucide-react';

const SEOContent = () => {
  return (
    <section id="insights" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Win Rate Insights for B2B Sales Teams</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understanding your win rate metrics is crucial for optimizing your B2B sales strategy and driving revenue growth.
          </p>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <h3 className="text-2xl font-bold text-primary mb-4">What Is Win Rate and Why Is It Important?</h3>
          
          <p>
            Win rate, sometimes called close rate, is a critical sales performance metric that measures the percentage of opportunities or deals that convert into actual sales within a given period. For B2B companies, especially those with longer sales cycles and higher-value transactions, win rate serves as a fundamental indicator of sales effectiveness and overall business health.
          </p>
          
          <p>
            The formula for calculating win rate is straightforward: divide the number of won deals by the total number of closed deals (both won and lost), then multiply by 100 to get a percentage. For example, if your sales team closed 50 deals in a quarter, winning 20 of them, your win rate would be 40%.
          </p>
          
          <div className="bg-cream-white p-6 rounded-lg my-8 border-l-4 border-primary">
            <h4 className="text-xl font-semibold mb-2">Win Rate Formula:</h4>
            <p className="text-lg font-medium">
              Win Rate = (Number of Won Deals ÷ Total Number of Closed Deals) × 100%
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-primary mb-4">Industry Benchmarks: What's a Good Win Rate?</h3>
          
          <p>
            Win rates vary significantly across industries, products, sales methodologies, and company sizes. While it's tempting to seek a universal benchmark, the most valuable comparison is tracking your own win rate over time and understanding the contexts that affect it.
          </p>
          
          <p>
            That said, here are some general B2B win rate benchmarks to provide context:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-3">
                <CreditCard className="h-5 w-5 text-primary mr-2" />
                <h4 className="text-lg font-semibold">SaaS / Tech</h4>
              </div>
              <p className="text-3xl font-bold text-primary mb-2">20-25%</p>
              <p className="text-sm text-gray-600">
                Technology and SaaS companies typically see lower win rates due to competitive markets and complex buying processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-3">
                <BarChart4 className="h-5 w-5 text-primary mr-2" />
                <h4 className="text-lg font-semibold">Professional Services</h4>
              </div>
              <p className="text-3xl font-bold text-primary mb-2">30-35%</p>
              <p className="text-sm text-gray-600">
                Consulting and professional services firms often achieve higher win rates due to relationship-based selling.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-3">
                <LineChart className="h-5 w-5 text-primary mr-2" />
                <h4 className="text-lg font-semibold">Manufacturing</h4>
              </div>
              <p className="text-3xl font-bold text-primary mb-2">15-25%</p>
              <p className="text-sm text-gray-600">
                Manufacturing companies typically see varied win rates based on product specialization and market position.
              </p>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-primary mb-4">How to Improve Your B2B Sales Win Rate</h3>
          
          <p>
            Improving your win rate requires a strategic approach to your entire sales process. Here are proven strategies to help B2B sales teams increase their win rates:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-secondary">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Strengthen Lead Qualification</h4>
                <p>
                  Implement a robust lead scoring system to ensure your team focuses on prospects with the highest likelihood of conversion. Better qualification leads to higher win rates by eliminating poor-fit opportunities early.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-secondary">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Develop a Value-Based Selling Approach</h4>
                <p>
                  Move beyond features to articulate clear, measurable value propositions aligned with each prospect's specific business challenges and objectives.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-secondary">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Invest in Sales Enablement</h4>
                <p>
                  Equip your team with the right content, tools, and training to effectively communicate value and address objections throughout the sales process.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-secondary">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Implement Competitive Analysis</h4>
                <p>
                  Understand and articulate your unique advantages over competitors. Track win/loss patterns against specific competitors to refine your positioning.
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-primary mb-4">Win Rate vs. Conversion Rate: Understanding the Difference</h3>
          
          <p>
            While often used interchangeably, win rate and conversion rate measure different aspects of your sales process:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
              <h4 className="font-semibold text-lg mb-2">Win Rate</h4>
              <p>
                Measures the percentage of deals won out of all closed deals (both won and lost). It focuses specifically on the final stage of your sales process.
              </p>
              <div className="mt-4 text-gray-700">
                <p className="font-medium">Example:</p>
                <p>20 won deals ÷ 40 closed deals = 50% win rate</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary">
              <h4 className="font-semibold text-lg mb-2">Conversion Rate</h4>
              <p>
                Measures transitions between any two stages of your sales funnel. It can apply to multiple points in your process, from lead to opportunity to closed deal.
              </p>
              <div className="mt-4 text-gray-700">
                <p className="font-medium">Example:</p>
                <p>50 opportunities from 200 leads = 25% lead-to-opportunity conversion rate</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-primary mb-4">Common Factors That Affect B2B Sales Win Rates</h3>
          
          <p>
            Understanding the variables that influence your win rate can help you identify improvement opportunities:
          </p>
          
          <div className="space-y-4 my-6">
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Sales Team Expertise and Training</h4>
                <p>
                  The knowledge, skills, and experience of your sales representatives significantly impact win rates. Regular training and coaching are essential.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-primary">
                <X className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Competitive Landscape</h4>
                <p>
                  Market saturation, competitor pricing strategies, and alternative solutions all affect how challenging it is to win deals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 text-primary">
                <LineChart className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Pricing Strategy</h4>
                <p>
                  Your pricing approach relative to perceived value and competitive offerings directly impacts win rate. Value-based pricing can improve win rates even at premium price points.
                </p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-primary mb-4">Conclusion: Win Rate as a Strategic Growth Lever</h3>
          
          <p>
            Your win rate is more than just a sales performance metric—it's a strategic lever for business growth. By consistently measuring, analyzing, and improving your win rate, you can optimize sales processes, focus resources on the right opportunities, and significantly increase revenue.
          </p>
          
          <p>
            Use our B2B Sales Win Rate Calculator to establish your baseline, set improvement targets, and track your progress over time. Remember that even small improvements in win rate can translate to substantial revenue gains when applied across your entire pipeline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
