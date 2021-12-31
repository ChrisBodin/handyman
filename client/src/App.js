import { Route, Routes } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Workers from './components/workers/Workers';
import Navbar from './components/shared/Navbar';
import WorkerShow from './components/workers/WorkerShow';
import Services from './components/services/Services';
import ServiceShow from './components/services/ServiceShow';
import Comments from './components/comments/Comments';
import CommentShow from './components/comments/CommentShow';


const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/home' element={<Home />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/workers' element={<Workers />} />
      <Route exact path='/workers/:workerId' element={<WorkerShow />} />
      <Route path='*' element={<NoMatch />} />
      <Route exact path='/services' element={<Services />} />
      <Route exact path='/services/:ServiceId' element={<ServiceShow />} />
      <Route exact path='/comments' element={<Comments />} />
      <Route exact path='/comments/:CommentId' element={<CommentShow />} />
    </Routes>
  </>
)

export default App;