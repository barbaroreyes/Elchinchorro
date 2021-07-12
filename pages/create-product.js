import React from 'react';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'
const CreateProduct = () => {
  return (
    <div>
      <h1>Hello</h1>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator (CreateProduct);
