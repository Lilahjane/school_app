// In a separate JavaScript file (e.g., assignments.js)

function readAssignments() {
    const fs = require('fs');
    try {
      const data = fs.readFileSync('assignments.json', 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return []; // Handle potential errors (e.g., file not found) by returning an empty array
    }
  }
  
  function writeAssignments(assignments) {
    const fs = require('fs');
    const jsonData = JSON.stringify(assignments, null, 2); // Format JSON for readability
    fs.writeFileSync('assignments.json', jsonData);
  }
  
  function updateAssignments(assignments) {
    const fs = require('fs');
    const jsonData = JSON.stringify(assignments, null, 2);
    fs.writeFileSync('assignments.json', jsonData);
  }
  
  
  function deleteAssignment(assignment) {
    const assignments = readAssignments();
    const filteredAssignments = assignments.filter(assignment => assignment.id !== id);
    writeAssignments(filteredAssignments);
  }
  