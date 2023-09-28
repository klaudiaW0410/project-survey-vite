/* eslint-disable react/prop-types */
export const Favoriteperson = ({ user, handleInputChange }) => {

     return (
     <div className="question-container">
         <label
           htmlFor="favPerson"
           className="question">Who do you take on a trip??
         </label>
         <input
  type="text"
  id="favPerson"
  name="favPerson" 
  placeholder="Enter name here"
  value={user.favPerson}
           onChange={handleInputChange}
           autoComplete="name" // Added autocomplete attribute
           maxLength={30}
          required
/>
          </div>
   )
 }
  
