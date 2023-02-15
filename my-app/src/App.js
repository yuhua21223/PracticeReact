import React, { useState } from 'react';
import Button from "./Components/Button";
import Card from "./Components/Card";
import Input from "./Components/Input";


function App() {

  const [name, setName] = useState('');
  
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    
    <div>

      <div>
        <p>First Div Box</p>
      </div>

      <div>
      <Input label="Name" value={name} onChange={handleChange} />
    </div>

      <div>
      <p>Second Div Box</p>
      <Button onClick={() => alert('Button clicked!')}>Click me</Button>
      <Card title="My Card" description={"This is a card "}>
        <p>Card Item</p>
      </Card>
      </div>
    </div>
  );
}



// const App = () => (
// <div>
//   <Button onClick={() => alert('Button clicked!')}>Click me</Button>
//   <Card title="My Card" description="This is a card">
//     <p>Some content inside the card</p>
//   </Card>
//   <form>
//     <Input label="Name" type="text" value={name} onChange={handleNameChange} />
//     <Input label="Email" type="email" value={email} onChange={handleEmailChange} />
//     <Button onClick={handleSubmit}>Submit</Button>
//   </form>
// </div>
// );

export default App;
