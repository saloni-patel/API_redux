import React, { useState } from "react";
import { createItem, deleteItem, updateItem, createSingleItem, viewItem } from "../actions";
// import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Modal} from "react-bootstrap";
import { connect } from "react-redux";

const Display = (props) => {
  const [updateUsers, setupdateUsers] = useState({}); 
  const [showData, setshowData] = useState(false);
  
  
  const data = props.data;

  const updateItems = (users) => {
    console.log("update the data",users);
    setshowData(true);
    setupdateUsers(users);
  }

  const datas = () => {
    console.log("oo",data);
    return data.map((users, id) => {
        
      return (
          <>
        <Card style={{ width: "10rem" }} key={id}>
          <Card.Img variant="top" src={users.avatar} />
          <Card.Body>
            <Card.Title>
              {users.first_name} {users.last_name}
            </Card.Title>
            <Card.Text>{users.email}</Card.Text>
            <Button
            variant="secondary" style={{margin : "0.4rem"}} onClick={() => updateItems(users)}>
              Update
            </Button>
            <Button
              variant="secondary" style={{margin : "0.8rem"}} onClick={() => props.deleteItem(users.id)}>
              Delete
            </Button>
            <Button
              variant="secondary" onClick={() => props.viewItem(users)}>
              View User
            </Button>
          </Card.Body>
        </Card>
        </>
      );
    });
  };
  
  return (
    <>
    <div>
      <div>
      <Button variant="secondary" onClick={props.createItem} style={{margin:'1rem'}}>All Users</Button>&nbsp;
      <Button variant="secondary" onClick={props.createSingleItem}>Single User</Button>
        <div><h4>Hello ReqRes users!</h4></div>
      </div>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6,1fr)",
          gridGap: "10px",
        }}
      >
        {datas()}
      </div>
    </div>

    {
      <Modal show={showData}>
      <Modal.Header>
        <Modal.Title>update</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <label>First Name:</label>
        <input type="text" className="form-control"  value={updateUsers.first_name} onChange={(e) => setupdateUsers({...updateUsers, first_name:e.target.value})} /><br />
        <label>Last Name:</label>
        <input type="text" className="form-control"  value={updateUsers.last_name} onChange={(e) => setupdateUsers({...updateUsers, last_name:e.target.value})} /><br />
        <label>Email:</label>
        <input type="text" className="form-control" value={updateUsers.email} onChange={(e) => setupdateUsers({...updateUsers, email:e.target.value})} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setshowData(false)}>Close</Button>
        <Button variant="secondary" onClick={() => {props.updateItem(updateUsers);setshowData(false)}}>Save Changes</Button>
      </Modal.Footer>
      </Modal>
    }
    </>
  )};

const mapStateToProps = (state) => {
  return {
    data: state.displayReducer,
    //reducer
  };
};

const mapDispatchToProps = {
  createItem,
  createSingleItem,
  deleteItem,
  updateItem,
  viewItem
  //action
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
