import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Academy from './pages/Academy';
import AIMentor from './pages/AIMentor';
import DemoAccount from './pages/DemoAccount';
import LiveChart from './pages/LiveChart';
import Partners from './pages/Partners';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="academy" element={<Academy />} />
          <Route path="ai-mentor" element={<AIMentor />} />
          <Route path="demo-account" element={<DemoAccount />} />
          <Route path="live-chart" element={<LiveChart />} />
          <Route path="partners" element={<Partners />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
