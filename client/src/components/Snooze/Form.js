import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }
   
   function Form() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
  
    const handleSubmit = event => {
      event.preventDefault();
      setSubmitting(true);
  
      setTimeout(() => {
        setSubmitting(false);
      }, 3000);
    }
  
    const handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox';
    if(isCheckbox===true){
      setFormData({
        name: event.target.name,
        value: isCheckbox ? "Yes" : "No",
      });
    }
    else{
        setFormData({
            name: event.target.name,
            value: event.target.value,
          });
    }
    }
  
    return(
        <div className="Form">
        <h1 className='Formm'>Please fill in today's sleep time</h1>
        {submitting &&
         <div>
           You are submitting the following:
           <ul>
             {Object.entries(formData).map(([name, value]) => (
               <li key={name}><strong>{name}</strong>:{value.toString()}</li>
             ))}
           </ul>
         </div>
        }
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="Name" onChange={handleChange}/>
            </label>
          </fieldset>
          <fieldset>
         <label>
           <p>Sleep Time</p>
           <select name="Time" onChange={handleChange}>
               <option value="">--Please choose an option--</option>
               <option value="Day">Day</option>
               <option value="Night">Night</option>
           </select>
         </label>
         <label>
           <p>Hours</p>
           <input type="number" name="Hours" onChange={handleChange} step="1"/>
         </label>
         <label>
           <p>Did you feel refreshed after this sleep</p>
           <input type="checkbox" name="Felt Refreshed" onChange={handleChange} />
         </label>
       </fieldset>
          <button type="Submit">Submit</button>
        </form>

      </div>
    )
  }

export default Form;
