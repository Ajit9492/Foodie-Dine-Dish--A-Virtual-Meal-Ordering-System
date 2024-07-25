// import React, { useState } from 'react'
// import '../styles/BookingForm.css'

// export default function BookingForm() {
//  const [values,  SetValues]=useState(null)
//   const data= ()=>{

//   }

//   return (
//     <>
//     <h2>Place Your Order</h2>
//      <form action='' >
//      <label for="name">First Name:</label>
//     <input type="text" id="firstname" name="firstname" required />

//         <label for="lastName">Last Name:</label>
//         <input type="text" id="lastName" name="lastName" required />

//         <label for="mobileNumber">Mobile Number:</label>
//         <input type="tel" id="mobileNumber" name="mobileNumber" pattern="[0-9]{10}" required />

//         <label for="bookingDate">Select Date:</label>
//         <input type="date" id="bookingDate" name="bookingDate" required />

//         <label for="guests">Number of Guests:</label>
//         <select id="guests" name="guests" required>
//             <option value="">Select number of guests</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
           
//             <option value="3">3</option>
         
//             <option value="20">20</option>
//         </select>

//         <label for="mealOrder">Order Meal:</label>
//         <textarea id="mealOrder" name="mealOrder" placeholder="Specify any meal preferences"></textarea>

//         <button type="submit" value="submit"  >Book a Table</button>
//     </form>

//     </>
//   )
// }









































// import React, { useState } from 'react';
// import '../styles/BookingForm.css';

// export default function BookingForm() {
//     const [values, setValues] = useState({
//         firstname: '',
//         lastName: '',
//         mobileNumber: '',
//         bookingDate: '',
//         guests: '',
//         mealOrder: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', values);
//         // You can use 'values' here as needed (e.g., pass to another function, API call, etc.)
//     };

//     return (
//         <>
//             <h2>Place Your Order</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstname">First Name:</label>
//                 <input
//                     type="text"
//                     id="firstname"
//                     name="firstname"
//                     value={values.firstname}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="lastName">Last Name:</label>
//                 <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={values.lastName}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="mobileNumber">Mobile Number:</label>
//                 <input
//                     type="tel"
//                     id="mobileNumber"
//                     name="mobileNumber"
//                     pattern="[0-9]{10}"
//                     value={values.mobileNumber}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="bookingDate">Select Date:</label>
//                 <input
//                     type="date"
//                     id="bookingDate"
//                     name="bookingDate"
//                     value={values.bookingDate}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="guests">Number of Guests:</label>
//                 <select
//                     id="guests"
//                     name="guests"
//                     value={values.guests}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="">Select number of guests</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="20">20</option>
//                 </select>

//                 <label htmlFor="mealOrder">Order Meal:</label>
//                 <textarea
//                     id="mealOrder"
//                     name="mealOrder"
//                     value={values.mealOrder}
//                     onChange={handleChange}
//                     placeholder="Specify any meal preferences"
//                 ></textarea>

//                 <button type="submit">Book a Table</button>
//             </form>
//         </>
//     );
// }







// // BookingForm.js

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setFormData } from '../actions/formDataActions';

// export default function BookingForm() {
//     const dispatch = useDispatch();
//     const [values, setValues] = useState({
//         firstname: '',
//         lastName: '',
//         mobileNumber: '',
//         bookingDate: '',
//         guests: '',
//         mealOrder: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(setFormData(values)); // Dispatch form data to Redux
//         console.log('Form submitted:', values);
//         // You can use 'values' here as needed (e.g., pass to another function, API call, etc.)
//     };

//     return (
//         <>
//             <h2>Place Your Order</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstname">First Name:</label>
//                 <input
//                     type="text"
//                     id="firstname"
//                     name="firstname"
//                     value={values.firstname}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="lastName">Last Name:</label>
//                 <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={values.lastName}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="mobileNumber">Mobile Number:</label>
//                 <input
//                     type="tel"
//                     id="mobileNumber"
//                     name="mobileNumber"
//                     pattern="[0-9]{10}"
//                     value={values.mobileNumber}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="bookingDate">Select Date:</label>
//                 <input
//                     type="date"
//                     id="bookingDate"
//                     name="bookingDate"
//                     value={values.bookingDate}
//                     onChange={handleChange}
//                     required
//                 />

//                 <label htmlFor="guests">Number of Guests:</label>
//                 <select
//                     id="guests"
//                     name="guests"
//                     value={values.guests}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="">Select number of guests</option>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="20">20</option>
//                 </select>

//                 <label htmlFor="mealOrder">Order Meal:</label>
//                 <textarea
//                     id="mealOrder"
//                     name="mealOrder"
//                     value={values.mealOrder}
//                     onChange={handleChange}
//                     placeholder="Specify any meal preferences"
//                 ></textarea>

//                 <button type="submit">Book a Table</button>
//             </form>
//         </>
//     );
// }
























































import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormData } from '../actions/formDataActions';
import '../styles/BookingForm.css'
import { addFormData } from '../actions/formDataActions';

export default function BookingForm() {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        firstname: '',
        lastName: '',
        mobileNumber: '',
        bookingDate: '',
        guests: '',
        mealOrder: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(setFormData(values)); // Dispatch form data to Redux
    //     console.log('Form submitted:', values);
    //     // You can use 'values' here as needed (e.g., pass to another function, API call, etc.)
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addFormData(values)); // Dispatch form data to Redux
        console.log('Form submitted:', values);
        // You can use 'values' here as needed (e.g., pass to another function, API call, etc.)
      };

    return (
        <div className='form-cont'>
        
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit}>
                 {/* <label htmlFor="firstname">First Name:</label> */}
               <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={values.firstname}
                    onChange={handleChange}
                    placeholder='firstname'
                    required
                />

                {/* <label htmlFor="lastName">Last Name:</label> */}
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    placeholder='lastname'
                    required
                />

                <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    pattern="[0-9]{10}"
                    value={values.mobileNumber}
                    onChange={handleChange}
                    placeholder='mobile_no'
                    required
                />

                {/* <label htmlFor="bookingDate">Select Date:</label> */}
                <input
                    type="date"
                    id="bookingDate"
                    name="bookingDate"
                    value={values.bookingDate}
                    onChange={handleChange}
                    placeholder='select date'
                    required
                />

               
                <select
                    id="guests"
                    name="guests"
                    value={values.guests}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select number of guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="20">20</option>
                </select>

                <textarea
                    id="mealOrder"
                    name="mealOrder"
                    value={values.mealOrder}
                    onChange={handleChange}
                    placeholder="Order any meal for available the menucard"
                ></textarea>

                <button type="submit">Book a Table</button>
            </form>
        </div>
    );
}
