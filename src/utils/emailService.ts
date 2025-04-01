
import { toast } from '@/components/ui/use-toast';
import { generatePDF } from './pdfGenerator';

interface EmailData {
  email: string;
  dealsWon: number;
  totalDeals: number;
  totalRevenue: number;
  averageSalesCycle: number;
  results: {
    winRate: number;
    totalRevenue: number;
    avgDealSize: number;
    avgDealValue: number;
    lostOpportunitiesValue: number;
  };
}

export const sendEmail = async (data: EmailData) => {
  // In a real implementation, this would send the data to a backend API
  // which would then generate and send the email with the PDF attachment
  
  try {
    // Generate PDF for attachment
    await generatePDF({
      dealsWon: data.dealsWon,
      totalDeals: data.totalDeals,
      totalRevenue: data.totalRevenue,
      averageSalesCycle: data.averageSalesCycle,
      results: data.results
    });
    
    // For this demo, we'll just show a toast that the email was "sent"
    // In a production app, you would make an API call to your backend
    
    console.log('Email data:', data);
    
    toast({
      title: "Email Sent Successfully",
      description: `Your win rate report has been sent to ${data.email}`,
    });
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    
    toast({
      title: "Email Failed",
      description: "There was an error sending your report. Please try again.",
      variant: "destructive"
    });
    
    return false;
  }
};
