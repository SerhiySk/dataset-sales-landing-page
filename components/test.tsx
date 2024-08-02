import { analytics } from "lib/segment";
import { NextPage } from "next";
import { useState } from "react";
const AssignPackageForm = ({ onAssign }) => {
  const [userId, setUserId] = useState("");
  const [packageName, setPackageName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onAssign({ userId, packageName, amount });
    setUserId("");
    setPackageName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="packageName">Package Name:</label>
        <input
          type="text"
          id="packageName"
          value={packageName}
          onChange={e => setPackageName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Amount ($):</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ backgroundColor: "blue" }}>
        Assign Package
      </button>
    </form>
  );
};
function Test({ onCreate }) {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onCreate({ userId, name, email });
    setUserId("");
    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userId">User ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={e => setUserId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ backgroundColor: "blue" }}>
        Create User
      </button>
    </form>
  );
}
function Forms() {
  const handleCreateUser = userData => {
    // Handle user creation logic here
    console.log("User Created:", userData);
    analytics.identify({
      ...userData,
    });
    // Example: Call an API to create the user or save to a database
  };

  const handleAssignPackage = packageData => {
    // Handle package assignment logic here
    analytics.identify(packageData.userId, {
      package: packageData.packageName,
      amount: packageData.amount,
      packageType: packageData.amount ? "paid" : "free",
    });
    console.log("Package Assigned:", packageData);
    // Example: Call an API to assign the package to the user
  };
  return (
    <>
      <Test onCreate={handleCreateUser} />
      <AssignPackageForm onAssign={handleAssignPackage} />
    </>
  );
}
export default Forms;
