import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import HomePage from './components/pages/HomePage';
import ProjectPage from './components/pages/ProjectPage';
import NotFoundPage from './components/pages/NotFoundPage';
import NavigationBarMolecule from "./components/molecules/navigationbar/NavigationBarMolecule";
import SchedulePage from "./components/pages/SchedulePage.tsx";

const App = () => {
  return (

    <Router>
      <Box component="main"
           sx={{
             display: 'flex',
             flexDirection: 'column',
             flexGrow: 1,
             justifyContent: 'center',
             alignItems: 'center',
             textAlign: 'center',
             width: '100%',
           }}>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path="/admin-chat" element={<div>Admin Chat Page</div>}/>
          <Route path="/schedule" element={<SchedulePage/>}/>
          <Route path="/profile" element={<div>Profile Page</div>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <NavigationBarMolecule mode={'light'} toggleColorMode={() => {}}/>
      </Box>
    </Router>
  );
};

export default App;
