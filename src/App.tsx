import { useState } from "react";
import "./App.css";
import { Role } from "./api/CustomerClient";
import RadioButtonsGroup from "./components/RadioButtonsGroup/RadioButtonsGroup";

function App() {
  const [selectedRole, setSelectedRole] = useState<Role>(Role.ADMIN);

  const handleChange = (value: string) => {
    setSelectedRole(value as Role);
  };

  const userTypes = Object.entries(Role).map(([key, value]) => ({
    value,
    label: value,
  }));
  return (
    <div className="App">
      <RadioButtonsGroup
        label="User Types"
        labelId="radioGroupLabel"
        value={selectedRole}
        defaultValue={selectedRole}
        options={userTypes}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
