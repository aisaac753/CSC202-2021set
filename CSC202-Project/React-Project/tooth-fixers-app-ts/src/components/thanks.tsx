import { Link } from 'react-router-dom';
import '../thanks.css';

const Thanks = () => {
  return (
    <div className="thanks-container">
      <h1 className="thanks-title">Thank You!</h1>
      <p className="thanks-message">Thank you for filling out the form. 
      You will be contacted about the information you have provided by our staff</p>
      <nav className='thanks-nav'>
      <button
        style={{
          width: '200px',
          height: '40px',
          border: '0px',
          borderRadius: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4CAF50',
        }}
      >
        <Link to={"/readpatient"} className="thanks-link">View all Patients Records</Link>
        </button>
        <button
        style={{
          width: '200px',
          height: '40px',
          border: '0px',
          borderRadius: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4CAF50',
        }}
      >
        <Link to={"/readclinical"} className="thanks-link">View all Clinical records</Link>
        </button>
      </nav>
    </div>
  );
}

export default Thanks;
