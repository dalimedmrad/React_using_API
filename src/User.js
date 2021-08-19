import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function User({user}) {
    console.log(user)
  return (
    <div >
      <Card  className="crd"   style={{ width: "18rem", margin:'1.5rem'}}>
        <ListGroup >
          <ListGroup.Item><b>Name :</b> {user.name}</ListGroup.Item>
          <ListGroup.Item><b>Username :</b> {user.username}</ListGroup.Item>
          <ListGroup.Item><b>Phone :</b> {user.phone}</ListGroup.Item>
          <ListGroup.Item><b>Website :</b> {user.website}</ListGroup.Item>
          <ListGroup.Item><b>Company :</b> {user.company.bs} <br/>
          <span>CatchPhrase :</span> {user.company.catchPhrase} <br/>
          <span>Name :</span> {user.company.name}
          </ListGroup.Item>
          <ListGroup.Item><b>Adress :</b> {user.address.city} <br/>
          <span>Street :</span> {user.address.street}<br/>
          <span>Suite :</span> {user.address.suite}<br/>
          <span>Zipcode :</span> {user.address.zipcode}
          
          </ListGroup.Item>

        </ListGroup>
      </Card>
    </div>
  );
}

export default User;
