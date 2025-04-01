
import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Mail, 
  Download, 
  BarChart2, 
  Percent, 
  TrendingUp,
  DollarSign,
  Calendar
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { toast } from '@/components/ui/use-toast';
import { WinRateChart } from './WinRateChart';
import { WinRateDonut } from './WinRateDonut';
import { generatePDF } from '../utils/pdfGenerator';
import { sendEmail } from '../utils/emailService';

interface CalculatorResults {
  winRate: number;
  totalRevenue: number;
  avgDealSize: number;
  avgDealValue: number;
  lostOpportunitiesValue: number;
}

const INITIAL_RESULTS: CalculatorResults = {
  winRate: 0,
  totalRevenue: 0,
  avgDealSize: 0,
  avgDealValue: 0,
  lostOpportunitiesValue: 0
};

const WinRateCalculator = () => {
  const [dealsWon, setDealsWon] = useState<number | ''>('');
  const [totalDeals, setTotalDeals] = useState<number | ''>('');
  const [totalRevenue, setTotalRevenue] = useState<number | ''>('');
  const [averageSalesCycle, setAverageSalesCycle] = useState<number | ''>('');
  const [email, setEmail] = useState<string>('');
  const [results, setResults] = useState<CalculatorResults>(INITIAL_RESULTS);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);
  const [isValidInput, setIsValidInput] = useState<boolean>(false);

  // Check if all required inputs are valid
  useEffect(() => {
    const validDealsWon = typeof dealsWon === 'number' && dealsWon >= 0;
    const validTotalDeals = typeof totalDeals === 'number' && totalDeals > 0;
    const validRevenue = typeof totalRevenue === 'number' && totalRevenue >= 0;
    
    setIsValidInput(validDealsWon && validTotalDeals && validRevenue && (totalDeals >= dealsWon));
  }, [dealsWon, totalDeals, totalRevenue]);

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleCalculate = () => {
    if (!isValidInput) {
      toast({
        title: "Invalid input",
        description: "Please ensure all fields are filled correctly.",
        variant: "destructive"
      });
      return;
    }

    if (typeof dealsWon === 'number' && typeof totalDeals === 'number' && typeof totalRevenue === 'number') {
      // Calculate win rate
      const winRate = (dealsWon / totalDeals) * 100;
      
      // Calculate average deal value
      const avgDealValue = dealsWon > 0 ? totalRevenue / dealsWon : 0;
      
      // Calculate average deal size (considering all opportunities)
      const avgDealSize = totalDeals > 0 ? totalRevenue / totalDeals : 0;
      
      // Calculate value of lost opportunities
      const lostDeals = totalDeals - dealsWon;
      const lostOpportunitiesValue = lostDeals * avgDealValue;

      setResults({
        winRate,
        totalRevenue,
        avgDealSize,
        avgDealValue,
        lostOpportunitiesValue
      });
      
      setHasCalculated(true);
      
      toast({
        title: "Calculation complete",
        description: "Your sales win rate metrics have been calculated.",
      });
    }
  };

  const handleReset = () => {
    setDealsWon('');
    setTotalDeals('');
    setTotalRevenue('');
    setAverageSalesCycle('');
    setEmail('');
    setResults(INITIAL_RESULTS);
    setHasCalculated(false);
  };

  const handleDownload = () => {
    if (!hasCalculated) {
      toast({
        title: "No data to download",
        description: "Please calculate your win rate first.",
        variant: "destructive"
      });
      return;
    }
    
    generatePDF({
      dealsWon: typeof dealsWon === 'number' ? dealsWon : 0,
      totalDeals: typeof totalDeals === 'number' ? totalDeals : 0,
      totalRevenue: typeof totalRevenue === 'number' ? totalRevenue : 0,
      averageSalesCycle: typeof averageSalesCycle === 'number' ? averageSalesCycle : 0,
      results
    });
    
    toast({
      title: "Download started",
      description: "Your PDF report is being generated.",
    });
  };

  const handleEmailSend = () => {
    if (!hasCalculated) {
      toast({
        title: "No data to send",
        description: "Please calculate your win rate first.",
        variant: "destructive"
      });
      return;
    }
    
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    sendEmail({
      email,
      dealsWon: typeof dealsWon === 'number' ? dealsWon : 0,
      totalDeals: typeof totalDeals === 'number' ? totalDeals : 0,
      totalRevenue: typeof totalRevenue === 'number' ? totalRevenue : 0,
      averageSalesCycle: typeof averageSalesCycle === 'number' ? averageSalesCycle : 0,
      results
    });
    
    toast({
      title: "Email sent",
      description: `Your report has been sent to ${email}`,
    });
  };

  return (
    <section id="calculator" className="py-16 calculator-bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-secondary/20 rounded-full mb-4">
            <Calculator className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">B2B Sales Win Rate Calculator</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Calculate, analyze, and improve your sales performance metrics with our professional Win Rate Calculator.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <Card className="calculator-card">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="dealsWon" className="text-base font-medium">
                    Number of Deals Won
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="dealsWon"
                      type="number"
                      placeholder="Enter deals won"
                      className="h-12"
                      value={dealsWon}
                      onChange={(e) => setDealsWon(e.target.value === '' ? '' : Number(e.target.value))}
                      min="0"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="totalDeals" className="text-base font-medium">
                    Total Deals Closed (Won + Lost)
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="totalDeals"
                      type="number"
                      placeholder="Enter total deals"
                      className="h-12"
                      value={totalDeals}
                      onChange={(e) => setTotalDeals(e.target.value === '' ? '' : Number(e.target.value))}
                      min="0"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="totalRevenue" className="text-base font-medium">
                    Total Revenue Generated (₹)
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="totalRevenue"
                      type="number"
                      placeholder="Enter revenue in INR"
                      className="h-12"
                      value={totalRevenue}
                      onChange={(e) => setTotalRevenue(e.target.value === '' ? '' : Number(e.target.value))}
                      min="0"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="salesCycle" className="text-base font-medium">
                    Average Sales Cycle (Days) - Optional
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="salesCycle"
                      type="number"
                      placeholder="Enter average days to close"
                      className="h-12"
                      value={averageSalesCycle}
                      onChange={(e) => setAverageSalesCycle(e.target.value === '' ? '' : Number(e.target.value))}
                      min="0"
                    />
                  </div>
                </div>
                
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 h-12 flex-1"
                    onClick={handleCalculate}
                    disabled={!isValidInput}
                  >
                    Calculate Win Rate
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-12 flex-1"
                    onClick={handleReset}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </Card>
            
            {hasCalculated && (
              <Card className="calculator-card mt-6">
                <h3 className="text-xl font-semibold mb-4">Share Results</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="flex mt-2">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 mr-2"
                      />
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="secondary" className="h-12" onClick={handleEmailSend}>
                              <Mail className="h-5 w-5" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Send results to email</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-12"
                    onClick={handleDownload}
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF Report
                  </Button>
                </div>
              </Card>
            )}
          </div>
          
          <div className="lg:col-span-7">
            {!hasCalculated ? (
              <div className="bg-white rounded-xl shadow-lg p-10 h-full flex flex-col items-center justify-center text-center">
                <div className="text-primary opacity-20 mb-6">
                  <BarChart2 size={80} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Your Results Will Appear Here</h3>
                <p className="text-gray-500 max-w-md">
                  Fill in the calculator fields on the left and click "Calculate Win Rate" to see your sales performance metrics.
                </p>
              </div>
            ) : (
              <Card className="calculator-card h-full">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
                  Your Sales Performance Metrics
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Percent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Win Rate</p>
                      <p className="text-xl font-bold text-primary">{results.winRate.toFixed(2)}%</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Average Deal Value</p>
                      <p className="text-xl font-bold text-primary">{formatCurrency(results.avgDealValue)}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Total Revenue</p>
                      <p className="text-xl font-bold text-primary">{formatCurrency(results.totalRevenue)}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <BarChart2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Lost Opportunities Value</p>
                      <p className="text-xl font-bold text-primary">{formatCurrency(results.lostOpportunitiesValue)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="font-semibold text-gray-700 mb-3">Win/Loss Rate</h4>
                    <div className="h-64">
                      <WinRateDonut 
                        winRate={results.winRate} 
                        lossRate={100 - results.winRate} 
                      />
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <h4 className="font-semibold text-gray-700 mb-3">Deals Breakdown</h4>
                    <div className="h-64">
                      <WinRateChart 
                        dealsWon={typeof dealsWon === 'number' ? dealsWon : 0} 
                        dealsLost={typeof totalDeals === 'number' && typeof dealsWon === 'number' ? totalDeals - dealsWon : 0}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-700 mb-3">Win Rate Analysis</h4>
                  <p className="text-gray-600 mb-4">
                    {results.winRate < 20 ? 
                      "Your win rate is below industry standards. Focus on improving lead qualification and sales process efficiency." :
                      results.winRate < 40 ? 
                      "Your win rate is approaching industry averages. Consider sales training and refining your value proposition." :
                      results.winRate < 60 ? 
                      "Your win rate is solid. To improve further, analyze your most successful deals and replicate those strategies." :
                      "Your win rate is excellent! Maintain your high performance by continuously refining your sales approach and team skills."
                    }
                  </p>
                  <p className="text-gray-600">
                    {results.lostOpportunitiesValue > results.totalRevenue ?
                      "The value of lost opportunities exceeds your current revenue. Improving your win rate would significantly impact your bottom line." :
                      "Continue to focus on increasing deal size and qualification to maximize revenue growth."
                    }
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinRateCalculator;
