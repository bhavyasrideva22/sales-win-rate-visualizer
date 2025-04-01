
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFData {
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

export const generatePDF = async (data: PDFData) => {
  const { dealsWon, totalDeals, totalRevenue, averageSalesCycle, results } = data;

  // Create a new PDF document
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  
  // Add company logo and header
  pdf.setFillColor(36, 94, 79); // #245e4f - Primary color
  pdf.rect(0, 0, pageWidth, 40, 'F');
  
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(20);
  pdf.text('B2B Sales Win Rate Report', pageWidth / 2, 20, { align: 'center' });
  
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, 30, { align: 'center' });
  
  // Add input data section
  pdf.setTextColor(36, 94, 79);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(16);
  pdf.text('Sales Performance Inputs', 15, 55);
  
  pdf.setTextColor(51, 51, 51);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(12);
  
  pdf.setDrawColor(220, 220, 220);
  pdf.line(15, 60, pageWidth - 15, 60);
  
  pdf.text(`Deals Won: ${dealsWon}`, 15, 70);
  pdf.text(`Total Deals Closed: ${totalDeals}`, 15, 80);
  pdf.text(`Total Revenue: ₹${totalRevenue.toLocaleString('en-IN')}`, 15, 90);
  
  if (averageSalesCycle) {
    pdf.text(`Average Sales Cycle: ${averageSalesCycle} days`, 15, 100);
  }
  
  // Add results section
  pdf.setTextColor(36, 94, 79);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(16);
  pdf.text('Win Rate Analysis Results', 15, 120);
  
  pdf.setTextColor(51, 51, 51);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(12);
  
  pdf.setDrawColor(220, 220, 220);
  pdf.line(15, 125, pageWidth - 15, 125);
  
  // Create a formatted table for results
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  // Add results in table-like format
  const metrics = [
    ['Win Rate', `${results.winRate.toFixed(2)}%`],
    ['Average Deal Value', formatCurrency(results.avgDealValue)],
    ['Total Revenue', formatCurrency(results.totalRevenue)],
    ['Lost Opportunities Value', formatCurrency(results.lostOpportunitiesValue)]
  ];
  
  let yPosition = 135;
  pdf.setDrawColor(220, 220, 220);
  
  metrics.forEach((row, index) => {
    const isAlternate = index % 2 === 1;
    
    if (isAlternate) {
      pdf.setFillColor(248, 248, 248);
      pdf.rect(15, yPosition - 5, pageWidth - 30, 10, 'F');
    }
    
    pdf.setFont('helvetica', 'normal');
    pdf.text(row[0], 20, yPosition);
    
    pdf.setFont('helvetica', 'bold');
    pdf.text(row[1], pageWidth - 20, yPosition, { align: 'right' });
    
    yPosition += 15;
  });
  
  // Add analysis and recommendations
  pdf.setTextColor(36, 94, 79);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(16);
  pdf.text('Analysis & Recommendations', 15, 190);
  
  pdf.setTextColor(51, 51, 51);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(12);
  
  pdf.setDrawColor(220, 220, 220);
  pdf.line(15, 195, pageWidth - 15, 195);
  
  let analysis = '';
  if (results.winRate < 20) {
    analysis = 'Your win rate is below industry standards. Focus on improving lead qualification and sales process efficiency. Consider reviewing your value proposition and competitive positioning.';
  } else if (results.winRate < 40) {
    analysis = 'Your win rate is approaching industry averages. Consider sales training and refining your value proposition. Analyze top-performing deals to identify success patterns.';
  } else if (results.winRate < 60) {
    analysis = 'Your win rate is solid. To improve further, analyze your most successful deals and replicate those strategies. Focus on increasing deal values and shortening sales cycles.';
  } else {
    analysis = 'Your win rate is excellent! Maintain your high performance by continuously refining your sales approach and team skills. Consider scaling your successful methods across the organization.';
  }
  
  const splitAnalysis = pdf.splitTextToSize(analysis, pageWidth - 40);
  pdf.text(splitAnalysis, 15, 210);
  
  // Add a note about lost opportunity value
  let opportunityNote = '';
  if (results.lostOpportunitiesValue > results.totalRevenue) {
    opportunityNote = 'The value of lost opportunities exceeds your current revenue. Improving your win rate would significantly impact your bottom line. Focus on understanding why deals are being lost and address those factors.';
  } else {
    opportunityNote = 'Continue to focus on increasing deal size and qualification to maximize revenue growth. Even small improvements in win rate can yield significant revenue gains.';
  }
  
  const splitNote = pdf.splitTextToSize(opportunityNote, pageWidth - 40);
  pdf.text(splitNote, 15, 230);
  
  // Add footer
  pdf.setDrawColor(220, 220, 220);
  pdf.line(15, pageHeight - 20, pageWidth - 15, pageHeight - 20);
  
  pdf.setFontSize(10);
  pdf.setTextColor(128, 128, 128);
  pdf.text('B2B Sales Win Rate Calculator | Confidential Business Report', pageWidth / 2, pageHeight - 10, { align: 'center' });
  
  // Save the PDF
  pdf.save('B2B_Sales_Win_Rate_Report.pdf');
};
