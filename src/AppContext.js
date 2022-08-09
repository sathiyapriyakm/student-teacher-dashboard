import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AppContext = createContext()

const Appstate = (props) => {
  const navigate = useNavigate()
const [numOfTeacher,setNumOfTeacher]=useState(null);
const [numOfStudent,setNumOfStudent]=useState(null);
const [studentList, setStudentList] = useState([]);
const [student,setStudent]=useState(null);
const [teacherstList, setTeachersList] = useState([]);
const [teacher,setTeacher]=useState(null);

const getTeacher=(teacherId)=>{
    fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/teachers/${teacherId}`,{
      method:"GET",
    }
    )
    .then((data)=>(data.json()))
    .then((mv)=>setTeacher(mv));
    }   

const handleDeleteTeacher=(deletionId)=>{
    fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/teachers/${deletionId}`,{
    method:"DELETE",
  }).then(()=>getTeacherDetails());
  }
const getTeacherDetails=()=>{
    fetch("https://62aa7f0d371180affbd633f8.mockapi.io/teachers",{
      method:"GET",
    }
    )
    .then((data)=>(data.json()))
    .then((mvs)=>setTeachersList(mvs));
    }   
const getStudent=(studentId)=>{
    fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/students/${studentId}`,{
      method:"GET",
    }
    )
    .then((data)=>(data.json()))
    .then((mv)=>setStudent(mv));
    }   
const getTeachers=()=>{
    fetch("https://62aa7f0d371180affbd633f8.mockapi.io/teachers",{
      method:"GET",
    }
    )
    .then((data)=>(data.json()))
    .then((mvs)=> {setNumOfTeacher(mvs.length)}
    );
    }   
    const getStudents=()=>{
        fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/students/`,{
          method:"GET",
        }
        )
        .then((data)=>(data.json()))
        .then((mv)=>setNumOfStudent(mv.length));
        } 

  const addStudent =(newStudent) => {
    fetch("https://62aa7f0d371180affbd633f8.mockapi.io/students", {
    method: "POST",
    body: JSON.stringify(newStudent),
    headers: {
      "Content-Type" : "application/json",
    },
  }).then(() => navigate("/StudentDetails"));
  };

  const addTeacher =(newTeacher) => {
    fetch("https://62aa7f0d371180affbd633f8.mockapi.io/teachers", {
    method: "POST",
    body: JSON.stringify(newTeacher),
    headers: {
      "Content-Type" : "application/json",
    },
  }).then(() => navigate("/TeacherDetails"));
  };
  const getStudentDetails=()=>{
    fetch("https://62aa7f0d371180affbd633f8.mockapi.io/students",{
      method:"GET",
    }
    )
    .then((data)=>(data.json()))
    .then((mvs)=>setStudentList(mvs));
    } 
    const handleDeleteStudent=(deletionId)=>{
        fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/students/${deletionId}`,{
        method:"DELETE",
      }).then(()=>getStudentDetails());
      }  

//   const getBooks = async () => {
//     try {
//       const resp = await axios.get(
//         'https://61ea3e657bc0550017bc6651.mockapi.io/viewbooks',
//       )
//       setBooks(resp.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const addBook = async (values) => {
//     try {
//       const response = await axios.post(
//         'https://61ea3e657bc0550017bc6651.mockapi.io/viewbooks',
//         values,
//       )
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const deleteBook = async (id) => {
//     try {
//       const response = await axios.delete(
//         `https://61ea3e657bc0550017bc6651.mockapi.io/viewbooks/${id}`,
//       )

//       setBooks(books.filter((book) => book.id !== id))
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const issueBook = async (values) => {
//     try {
//       const response = await axios.post(
//         'https://61ea3e657bc0550017bc6651.mockapi.io/issuedBooks',
//         values,
//       )
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const getIssuedBooks = async () => {
//     try {
//       const resp = await axios.get(
//         'https://61ea3e657bc0550017bc6651.mockapi.io/issuedBooks',
//       )

//       setIssuedBooks(resp.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const updateIssuedBooks = async (values) => {
//     try {
//       const resp = await axios.put(
//         `https://61ea3e657bc0550017bc6651.mockapi.io/issuedBooks/${existingIssue.id}`,
//         values,
//       )
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const deleteIssuedBooks = async (id) => {
//     try {
//       const response = await axios.delete(
//         `https://61ea3e657bc0550017bc6651.mockapi.io/issuedBooks/${id}`,
//       )
//       setIssuedBooks(issuedBooks.filter((book) => book.id !== id))
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const handleSelected = (id) => {
//     const selectedData = books.filter((book) => book.id === id)[0]

//     setNewBookIssue(selectedData)
//     navigate('/issue')
//   }

//   const selectedIssuedBook = (id) => {
//     const selectedData = issuedBooks.filter((book) => book.id === id)[0]

//     setNewBookIssue(undefined)
//     setExistingIssue(selectedData)
//     navigate('/issue')
//   }

  return (
    <AppContext.Provider
      value={{
        addStudent,
        addTeacher,
        getTeachers,
        getStudents,
        numOfTeacher,
        numOfStudent,
        studentList,
        getStudentDetails,
        handleDeleteStudent,
        getStudent,
        student,
        teacherstList,
        handleDeleteTeacher,
        getTeacherDetails,
        getTeacher,
        teacher,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export  {Appstate,AppContext};

