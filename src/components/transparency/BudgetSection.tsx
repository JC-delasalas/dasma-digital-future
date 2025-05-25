
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BudgetVisualization from './BudgetVisualization';

interface BudgetSectionProps {
  isSeniorMode: boolean;
}

const BudgetSection: React.FC<BudgetSectionProps> = ({ isSeniorMode }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`font-bold text-gov-green mb-4 ${isSeniorMode ? 'text-4xl' : 'text-3xl'}`}>
            City Budget and Spending
          </h2>
          <p className={`text-gov-neutrals-gray600 max-w-2xl mx-auto ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Explore how the city allocates and spends its funds. Our interactive visualizations 
            make complex budget data easy to understand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <BudgetVisualization isSeniorMode={isSeniorMode} />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gov-neutrals-gray200">
            <h3 className={`font-semibold text-gov-neutrals-gray900 mb-4 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
              Financial Transparency Tools
            </h3>
            <ul className="space-y-4">
              <li className="border-b border-gov-neutrals-gray200 pb-4">
                <h4 className={`font-medium text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                  Budget Explorer
                </h4>
                <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                  Interactive tool to examine budget allocations and spending trends over time.
                </p>
                <Link to="/transparency/budget" className="text-gov-green hover:text-gov-green-700 font-medium flex items-center">
                  <span>Explore</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </li>
              
              <li className="border-b border-gov-neutrals-gray200 pb-4">
                <h4 className={`font-medium text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                  Procurement Tracker
                </h4>
                <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                  Track all city procurement activities, bids, and contract awards.
                </p>
                <Link to="/transparency/procurement" className="text-gov-green hover:text-gov-green-700 font-medium flex items-center">
                  <span>Track</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </li>
              
              <li>
                <h4 className={`font-medium text-gov-neutrals-gray900 mb-1 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
                  Financial Report Archives
                </h4>
                <p className={`text-gov-neutrals-gray600 mb-2 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                  Access past financial reports, audits, and statements.
                </p>
                <Link to="/transparency/reports" className="text-gov-green hover:text-gov-green-700 font-medium flex items-center">
                  <span>View Archives</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;
