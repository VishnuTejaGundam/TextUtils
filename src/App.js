
// import './App.css';

// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// export default class App extends Component {
// //render is life cycle method, which renders the html on the screen

//   render() {
//     return (
//       <div>
//         <Router>
//           <NavBar/>
//           <Switch>
//           <Route path='/'><News  pageSize={this.pagesize} country="in" category='general'/></Route>
//           <Route path='/business'><News  pageSize={this.pagesize} country="in" category='business'/></Route>
//           <Route path='/entertainment'><News  pageSize={this.pagesize} country="in" category='entertainment'/></Route>
//           <Route path='/general'><News  pageSize={this.pagesize} country="in" category='general'/></Route>
//           <Route path='/health'><News  pageSize={this.pagesize} country="in" category='health'/></Route>
//           <Route path='/science'><News  pageSize={this.pagesize} country="in" category='science'/></Route>
//           <Route path='/sports'><News  pageSize={this.pagesize} country="in" category='sports'/></Route>
//           <Route path='/technology'><News  pageSize={this.pagesize} country="in" category='technology'/></Route>
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }
import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15;
// state ={
//   progress: 0
// }
//   setProgress(progress){
//     this.setState({
//       progress: progress
//     })
//   }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          {/* <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      /> */}
          <Routes>
            <Route exact path="/" element={<News  key={"general"} pageSize={this.pagesize} country="in" category="general" />} />
            <Route exact path="/business" element={<News  key={"business"} pageSize={this.pagesize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News  key={"entertainment"} pageSize={this.pagesize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News  key={"general"} pageSize={this.pagesize} country="in" category="general" />} />
            <Route exact path="/health" element={<News  key={"health"} pageSize={this.pagesize} country="in" category="health" />} />
            <Route exact path="/science" element={<News  key={"science"} pageSize={this.pagesize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News  key={"sports"} pageSize={this.pagesize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News  key={"technology"} pageSize={this.pagesize} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
