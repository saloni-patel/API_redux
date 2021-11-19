// import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { viewItem } from "../actions";
import { connect } from "react-redux";

function View(props) {
console.log(props.data)
    // const data = useSelector(state => state.displayReducer);
    // console.log("fetch", data);


    // const viewItem = (userss) => {
    //     console.log("view userss",userss);
        
    //   }

  const data = props.data;

    return data.map((userss,id) => {
    return (
        <div key={id}>
        <h4 style={{marginTop:"2rem"}}><b>{userss.first_name}'s Profile</b></h4>
        <center>
        <Card style={{ width: "10rem" }}>
          <Card.Img variant="top" src={userss.avatar} />
          <Card.Body>
            <Card.Title>
              {userss.first_name} {userss.last_name}
            </Card.Title>
            <Card.Text>{userss.email}</Card.Text>
            </Card.Body>
        </Card>
        </center>
        </div>
    );
});
}

const mapStateToProps = (state) => {
    return {
      data: state.singleDisplay,
    
    };
  };
  
  const mapDispatchToProps = {
 
    viewItem
    
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(View);
