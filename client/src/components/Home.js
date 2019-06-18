import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';


class Home extends React.Component {
	render() {
		return(
			<>
      <div className='columns is-vcentered'>
				<div className="column home-bg-split-left parent">
          <div className='child'>
            <div className='flex'>
              <i className="fas fa-search home-icons"></i>
              <p className='home-text-left'>Create your organization.</p>
            </div>
            <div className='flex'>
              <i className="fas fa-users home-icons"></i>
              <p className='home-text-left'>Add teams and invite teammates.</p>
            </div>
            <div className='flex'>
              <i className="fas fa-crosshairs home-icons"></i>
              <p className='home-text-left'>Keep track of your team's progress.</p>
            </div>
          </div>
        </div>

        <div className="column parent">
          <div className='column is-half child'>
            <p className='has-text-weight-semibold home-text-right'>See what's happenning in your organization right now</p>
            <p className='has-text-weight-bold home-text-right join'>Join Altify today.</p>
            <Link to="/users/login" className="button">Login</Link>
            <Link to="/users/register" className="button bg-primary">Sign up</Link>
          </div>
        </div>
      </div>
			</>
		)
	}
}

export default Home;