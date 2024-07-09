import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toolbar, CssBaseline, Box} from '@mui/material';
import HomePage from './components/pages/HomePage';
import ProjectPage from './components/pages/ProjectPage';
import NotFoundPage from './components/pages/NotFoundPage';
import NavigationBarMolecule from "./components/molecules/navigationbar/NavigationBarMolecule.tsx";

const App = () => {
  return (
    <Router>
      <CssBaseline/>
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
      <NavigationBarMolecule mode={'light'} toggleColorMode={() => {
      }}/>
    </Router>
  );
};

export default App;
