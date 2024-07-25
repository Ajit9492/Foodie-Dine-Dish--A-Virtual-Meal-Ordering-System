


// import React from 'react';
// import { useSelector, useDispatch  } from 'react-redux';
// import NavbarSec from './NavbarSec';
// import { deleteFormData } from '../actions/formDataActions';
// import '../styles/specific_rest.css'

// export default function Specific_Rest() {
//     const formData = useSelector(state => state.formData.formData);
//     const dispatch = useDispatch();
//     const [activeContent, setActiveContent] = useState(null);

//     const handleNavClick = (content) => {
//       setActiveContent(content);
//     };

//     const handleDelete = (index) => {
//         dispatch(deleteFormData(index));
//       };

//     return (
//         <>
//             {/* <NavbarSec /> */}
//             <div className='main-cont'>
//                 <img src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//                 ></img>
//             <div className="specific-rest-content">
//                 {/* Display form data */}
//                 <nav>
//             <a href="#" onClick={() => handleNavClick('Booking Details')}>Overview</a>
//           </nav>
//           <hr />
//                 {formData.map((formData, index) => (
//                 <div key={index} className="form-submission">
//                 <p>First Name: {formData.firstname}</p>
//                 <p>Last Name: {formData.lastName}</p>
//                 <p>Mobile Number: {formData.mobileNumber}</p>
//                 <p>Booking Date: {formData.bookingDate}</p>
//                 <p>Number of Guests: {formData.guests}</p>
//                 <p>Meal Order: {formData.mealOrder}</p>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//             </div>
//             ))}
//             </div>
//             </div>
//         </>
//     );
// }



import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavbarSec from './NavbarSec';
import { deleteFormData } from '../actions/formDataActions';
import '../styles/specific_rest.css';

export default function Specific_Rest() {
    const formData = useSelector(state => state.formData.formData);
    const dispatch = useDispatch();
    const [activeContent, setActiveContent] = useState(null);

    const handleNavClick = (content) => {
        setActiveContent(content);
    };

    const handleDelete = (index) => {
        dispatch(deleteFormData(index));
    };

    return (
        <>
            {/* <NavbarSec /> */}
            <div className='main-cont'>
                <img src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt="Restaurant" />
                <div className="specific-rest-content">
                    {/* Display form data */}
                    <nav>
                        <a href="#" onClick={() => handleNavClick('Booking Details')}>Overview</a>
                    </nav>
                    <hr />
                    {activeContent === 'Booking Details' && (
                        <div className="booking-details">
                            {/* <h2>Booking Details</h2> */}
                            <ul>
                                {formData.map((formData, index) => (
                                    <li key={index} className="form-submission">
                                        <p>First Name: {formData.firstname}</p>
                                        <p>Last Name: {formData.lastName}</p>
                                        <p>Mobile Number: {formData.mobileNumber}</p>
                                        <p>Booking Date: {formData.bookingDate}</p>
                                        <p>Number of Guests: {formData.guests}</p>
                                        <p>Meal Order: {formData.mealOrder}</p>
                                        <button onClick={() => handleDelete(index)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                
            </div>
        </>
    );
}

