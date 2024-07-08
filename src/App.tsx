import {BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom';
import {AppBar, Toolbar, Typography, CssBaseline, Tabs, Tab, Box} from '@mui/material';
import HomePage from './components/pages/HomePage';
import ProjectPage from './components/pages/ProjectPage';
import NotFoundPage from './components/pages/NotFoundPage';

interface LinkTabProps {
  label: string;
  value: string;
  to: string;
}

function LinkTab({label, to, value}: LinkTabProps) {
  return (
    <Tab
      label={label}
      value={value}
      component={Link}
      to={to}
    />
  );
}

function NavTabs() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Tabs value={path}>
      <LinkTab label="회사 소개" value="/" to="/"/>
      <LinkTab label="프로젝트" value="/projects" to="/projects"/>
      <LinkTab label="관리자와 대화" value="/admin-chat" to="/admin-chat"/>
      <LinkTab label="일정" value="/schedule" to="/schedule"/>
      <LinkTab label="프로필" value="/profile" to="/profile"/>
    </Tabs>
  );
}

const App = () => {
  return (
    <Router>
      <CssBaseline/>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{flexGrow: 1}}>
            STARGAZER
          </Typography>
        </Toolbar>
        <NavTabs/>
      </AppBar>
      <Toolbar/>
      <Box component="main" sx={{flexGrow: 1, p: 3, mt: 2}}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path="/admin-chat" element={<div>Admin Chat Page</div>}/>
          <Route path="/schedule" element={<div>Schedule Page</div>}/>
          <Route path="/profile" element={<div>Profile Page</div>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
