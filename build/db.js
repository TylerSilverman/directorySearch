// let db;
// const request = indexedDB.open("directory", 1);

// request.onupgradeneeded = function(event) {
//   const db = event.target.result;
//   db.createObjectStore("pending", { autoIncrement: true });
// };

// request.onsuccess = function(event) {
//   db = event.target.result;
//   if (navigator.onLine) {
//       console.log("App is Online and Running");
//     checkDatabase();
//   }
// };

// request.onerror = function(event) {
//   console.log("Error " + event.target.errorCode);
// };

// function saveRecord(record) {
//     console.log("Your currently Offline, but The record is Saved:" + record);
//   // create a directory on the pending db with readwrite access
//   const directory = db.directory(["pending"], "readwrite");

//   // access your pending object store
//   const store = directory.objectStore("pending");
//   store.add(record);
// }

// function checkDatabase() {
//   // open a directory on your pending db
//   const directory = db.directory(["pending"], "readwrite");
//   // access your pending object store
//   const store = directory.objectStore("pending");
//   // get all records from store and set to a variable
//   const getAll = store.getAll();

//   getAll.onsuccess = function() {
//     if (getAll.result.length > 0) {
//       fetch("/api/directory", {
//         method: "POST",
//         body: JSON.stringify(getAll.result),
//         headers: {
//           Accept: "application/json, text/plain, */*",
//           "Content-Type": "application/json"
//         }
//       })
//       .then(response => response.json())
//       .then(() => {
//         console.log("directory successfully saved from offline");
//         const directory = db.directory(["pending"], "readwrite");

//         const store = directory.objectStore("pending");
//         store.clear();
//       });
//     }
//   };
// }



// window.addEventListener("online", checkDatabase);
