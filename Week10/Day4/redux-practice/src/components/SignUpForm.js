import React from 'react';

export default function SignUpForm() {
    return (
        <div>
           <form>
               <input type="text" placeholder="First Name" />
               <input type="text" placeholder="Last Name" />
               <input type="text" placeholder="Email" />
               <input type="password" placeholder="Password" />
               <input type="submit" />
           </form>
        </div>
    )
}
