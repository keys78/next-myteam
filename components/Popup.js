// import React, { useState } from "react";
// import { ReactSortable, Sortable, MultiDrag, Swap } from "react-sortablejs";

// // mount whatever plugins you'd like to. These are the only current options.
// // Sortable.mount(new MultiDrag(), new Swap());

// const Popup = () => {
//   const [state, setState] = useState([
//     { id: 1, name: "shrek" },
//     { id: 2, name: "fiona" },
//   ]);

//   return (
//     <ReactSortable
//       multiDrag // enables mutidrag
//       // OR
//       swap // enables swap
//     >
//       {state.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </ReactSortable>
//   );
// };

// export default Popup;