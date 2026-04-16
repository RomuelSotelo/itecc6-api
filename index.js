 const express = require('express') 
   const app = express() 
   const PORT = 3000 
 
   // Middleware to parse JSON request bodies 
   app.use(express.json()) 
 
   // Route 1: GET / - Welcome message 
   app.get('/', (req, res) => { 
      res.json({ 
         message: 'Hello from Express.js!', 
         timestamp: new Date().toISOString() 
      }) 
   }) 
 
  
   const students = [ 
{ id: 1, name: 'Juan dela Cruz', course: 'BSIT' }, 
{ id: 2, name: 'Maria Santos', course: 'BSIT' }, 
] 
// Route 2: GET /api/students - Returns a list of students 
app.get('/api/students', (req, res) => { 

res.json({ data: students, count: students.length }) 
}) 

//route 3: POST /api/students - Add a new student
app.post('/api/students', (req, res) => {
const student = {
    id: 3,
    name: 'Romuel Sotelo',
    course: 'BSIT'}

students.push(student)
res.json({message:'student added successfully', data: students, count: students.length }) 
})



// Start server 
app.listen(PORT, () => { 
console.log(`Server running at http://localhost:${PORT}`) 
}) 




