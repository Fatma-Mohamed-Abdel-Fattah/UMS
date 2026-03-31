import axios from 'axios';
import { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
interface User{
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  phone: string;
  birthDate: string;
  image: string;
}
export default function UsersList() {
  let navigate=useNavigate();
  let moveToAddUser=()=> {
    navigate('/dashbord/add-user')
  }
  const [users,setUser]=useState<User[]>([]);
  const getUser=async()=>{
    try {
      const response=await axios.get('https://dummyjson.com/users')
      localStorage.setItem('userToken',response.data.users)
      setUser(response?.data?.users || null)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getUser()
  },[])
  // modal
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [userId,setUserId]= useState<number>(0);
  const [userName,setUserName]=useState<string>('')
  const handleShow = (user:User) =>{
     setUserId(user.id);
     setUserName(`${user.firstName} ${user.lastName}`)
     handleClose()
     setShow(true);
  }
  // end modal
  
  // delete user
  const deletUser=async()=>{
    try { 
      const response=await axios.delete(`https://dummyjson.com/users/${userId}`)
      console.log(response)
      handleClose()
      toast.success('user deleted successfully')
      
    } catch (error) {
      console.log(error)
      toast.error('something went wrong')
      
    }
  }
  // update
  let goToUpdatePage=(user:User)=>{
    navigate("/dashbord/add-user",{state:user})
  }
  return (
    <>
    <div>
    <div className="d-flex justify-content-between mx-3">
      <h4>User List</h4>
      <button className='bg-warning text-white border-0' onClick={moveToAddUser}>Add New User</button>
    </div>
    <hr/>
  
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Birth Data</th>
        </tr>
      </thead>
      <tbody>
      {users.map((user:User)=>(
        <tr key={user?.id}>
          <td>{user?.id}</td>
          <td><img src={user?.image} className='w-25' alt="userImg"/></td>
          <td>{user?.firstName}</td>
          <td>{user?.lastName}</td>
          <td>{user?.email}</td>
          <td>{user?.phone}</td>
          <td>{user?.birthDate}</td>
          <td><FaEdit  className='text-warning' onClick={()=>goToUpdatePage(user)} size={25}/></td>
          <td><FaTrashAlt onClick={()=>handleShow(user)} className='text-danger' size={25}/></td>
        </tr>)
      )}
      </tbody>
    </Table>
 {/* modal */}
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>confirm delete {userName} !!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you went continue!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deletUser}>
          Delete
          </Button>
          <Button variant="success" onClick={handleClose}>
             Close
          </Button>
        </Modal.Footer>
      </Modal>
</div>
    </>
  )
}
