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

import ManagedItServices from './components/solutions/managed-it-services.jsx';
import Industries from './components/solutions/industries.jsx';
import BusinessSolution from './components/solutions/business-solution.jsx';

import CaseStudies from './components/case-studies/case-studies.jsx';
import CaseStudyDetails from './components/case-studies/case-study-details.jsx';

import Blogs from './components/blogs/blogs.jsx';
import BlogDetails from './components/blogs/blog-details.jsx';

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
