import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Home from './components/home.jsx';

import ContactUs from './components/company/contact-us.jsx';
import AboutUs from './components/company/about-us.jsx';
import WhyChooseUs from './components/company/why-choose-us.jsx';
import OurHistory from './components/company/our-history.jsx';
import Careers from './components/company/careers.jsx';

import ItServices from './components/solutions/services/it-services.jsx';
import ItServiceDetails from './components/solutions/services/it-service-details.jsx';

import CaseStudies from './components/case-studies/case-studies.jsx';
import CaseStudyDetails from './components/case-studies/case-study-details.jsx';

import Blogs from './components/blogs/blogs.jsx';
import BlogDetails from './components/blogs/blog-details.jsx';

import ManagedItServices from './components/solutions/services/managed-it-services.jsx';
import BusinessSolution from './components/solutions/services/business-solution.jsx';
import Industries from './components/solutions/services/industries.jsx';

import AIAndMLServices from './components/solutions/ai-ml-solutions.jsx';
import AnalyticsAndBIServices from './components/solutions/analytics-bi-solutions.jsx';
import CloudServices from './components/solutions/cloud-solutions.jsx';
import DataQualityAndGovernanceServices from './components/solutions/data-quality-governance-solution.jsx';
import FinancialTechnologyServices from './components/solutions/financial-technology-solutions.jsx';
import ReconciliationPlatformsServices from './components/solutions/reconciliation-platforms-solutions.jsx';
import RegulatoryAndComplianceServices from './components/solutions/regulatory-compliance-solutions.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/company-contact-us" element={<ContactUs />} />
          <Route path="/company-about-us" element={<AboutUs />} />
          <Route path="/company-why-choose-us" element={<WhyChooseUs />} />
          <Route path="/company-our-history" element={<OurHistory />} />
          <Route path="/company-careers" element={<Careers />} />

          <Route path="/solutions-it-services" element={<ItServices />} />
          <Route path="/solutions-it-service-details" element={<ItServiceDetails />} />

          <Route path="/solutions-managed-it-services" element={<ManagedItServices />} />
          <Route path="/solutions-industries" element={<Industries />} />
          <Route path="/solutions-business-solution" element={<BusinessSolution />} />

          <Route path="/solutions-AI-ML" element={<AIAndMLServices />} />
          <Route path="/solutions-analytics-BI" element={<AnalyticsAndBIServices />} />
          <Route path="/solutions-cloud" element={<CloudServices />} />
          <Route path="/solutions-data-quality-and-governance" element={<DataQualityAndGovernanceServices />} />
          <Route path="/solutions-financial-technology" element={<FinancialTechnologyServices />} />
          <Route path="/solutions-reconciliation-platforms" element={<ReconciliationPlatformsServices />} />
          <Route path="/solutions-regulatory-and-compliance" element={<RegulatoryAndComplianceServices />} />

          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study-details" element={<CaseStudyDetails />} />

          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog-details" element={<BlogDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
