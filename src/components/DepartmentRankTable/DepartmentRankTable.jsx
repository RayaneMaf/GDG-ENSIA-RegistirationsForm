// import React, { useState } from "react";
// import styles from "./DepartmentRankTable.module.css";

// export default function DepartmentRankTable() {
//   const departments = [
//     { id: "dept-1", name: "IT" },
//     { id: "dept-2", name: "Relex" },
//     { id: "dept-3", name: "Design" },
//     { id: "dept-4", name: "HR" },
//     { id: "dept-5", name: "Event" },
//     { id: "dept-6", name: "Marketing" },
//   ];

//   const ranks = [
//     { id: "rank-1", label: "1" },
//     { id: "rank-2", label: "2" },
//     { id: "rank-3", label: "3" },
//     { id: "rank-4", label: "4" },
//     { id: "rank-5", label: "5" },
//     { id: "rank-6", label: "6" },
//   ];

//   const [selections, setSelections] = useState({});

//   function handleSelect(deptId, rankId) {
//     setSelections((prev) => {
//       const copy = { ...prev };
//       for (const dId in copy) {
//         if (copy[dId] === rankId && dId !== deptId) {
//           delete copy[dId];
//           break;
//         }
//       }
//       copy[deptId] = rankId;
//       return copy;
//     });
//   }

//   return (
//     <div className={styles.main}>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <th className={styles.ldummy}></th>
//             {ranks.map((rank) => (
//               <th key={rank.id} className={styles.rankContainer}>
//                 #{rank.label}
//               </th>
//             ))}
//             <th className={styles.rdummy}></th>
//           </tr>
//         </thead>
//         <tbody>
//           {departments.map((dept) => (
//             <tr key={dept.id} className={styles.kk}>
//               <td
//                 className={`${styles.depContainer} ${styles.depContainerDummy}`}
//               >
//                 <div>{dept.name}</div>
//               </td>
//               {ranks.map((rank) => {
//                 const isSelectedHere = selections[dept.id] === rank.id;
//                 return (
//                   <td key={rank.id} className={styles.checkContainer}>
//                     <label>
//                       <input
//                         type="radio"
//                         name={`row-${dept.id}`}
//                         checked={isSelectedHere}
//                         onChange={() => handleSelect(dept.id, rank.id)}
//                       />
//                     </label>
//                   </td>
//                 );
//               })}
//               <td className={styles.rightDummy}></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

function MyPersistentInput() {
  const [inputValue, setInputValue] = useState(() => {
    // Initialize state from localStorage or an empty string
    const savedValue = localStorage.getItem("myInput");
    return savedValue ? JSON.parse(savedValue) : "";
  });

  useEffect(() => {
    // Save to localStorage whenever inputValue changes
    localStorage.setItem("myInput", JSON.stringify(inputValue));
  }, [inputValue]); // Dependency array ensures effect runs only when inputValue changes

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleChange} />;
}

export default MyPersistentInput;
