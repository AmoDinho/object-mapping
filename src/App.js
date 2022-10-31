import React from 'react';
import './style.css';

const org = {
  corp_name: 'Space Twitter X',
  employees: {
    '12urer-45-656565': {
      name: 'Patrick Bumble',
      title: 'Chief Pixel Officer',
    },
    'gfgf-45-t6767567': {
      name: 'Tiger Z',
      title: 'Chief Floor Officer',
    },
    'vcvcv-45-cvdfe454': {
      name: 'Mbakuku Airbus',
      title: 'Chief Keyword Person',
    },
    'w345085-45-c934': {
      name: 'Diary Diaby',
      title: 'Chief Traveller Person',
    },
  },
};

const RenderEmployees = ({ payload }) => {

  return (
    <>
      {Object.keys(payload).map((employeeKey, employeeKeyIndex) => {
        const employeeObject = payload[employeeKey];

        return (
          <div key={employeeKeyIndex}>
            <p>Name: {employeeObject.name}</p>

            <p>Job Title:{employeeObject.title} </p>
          </div>
        );
      })}
    </>
  );
};
export default function App() {
  const { employees } = org;
  return (
    <div>
      <h1>Here are our employees:</h1>
      <RenderEmployees payload={employees} />
    </div>
  );
}
