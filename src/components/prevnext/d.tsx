// import React, { Component } from "react";

// const steps = [
//   {
//     label: `1 x`,
//     value: `1`,
//   },
//   {
//     label: `2 x`,
//     value: `2`,
//   },
//   {
//     label: `3 x`,
//     value: `3`,
//   },
//   {
//     label: `4 x`,
//     value: `4`,
//   },
//   {
//     label: `5 x`,
//     value: `5`,
//   },
// ];

// class Main extends Component {
//   constructor(props: {} | Readonly<{}>) {
//     super(props);
//     this.state = {
//       currentStep: steps[0].value,
//     };
//   }

//   handleChange = (event: { target: { value: any } }) => {
//     this.setState({ currentStep: event.target.value });
//   };

//   handlePrevNext = (direction: string) => {
//     const currentIndex = steps.findIndex(
//       (step) => step.value === this.state.currentStep
//     );

//     direction === "next"
//       ? currentIndex < steps.length - 1 &&
//         this.setState({ currentStep: steps[currentIndex + 1].value })
//       : currentIndex > 0 &&
//         this.setState({ currentStep: steps[currentIndex - 1].value });
//   };

//   render() {
//     const { currentStep } = this.state;

//     return (
//       <>
//         <select value={currentStep} onChange={this.handleChange}>
//           {steps.map((step) => (
//             <option key={step.value} value={step.value}>
//               {step.label}
//             </option>
//           ))}
//         </select>

//         <button onClick={() => this.handlePrevNext("next")}>Next</button>
//         <button onClick={() => this.handlePrevNext("prev")}>Previous</button>

//         <h3>Current step: {currentStep}</h3>
//       </>
//     );
//   }
// }

// export default Main;

export default function App() {
  return <div>have</div>;
}
