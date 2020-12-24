import React from "react";
import Card from "./Card";
import Collapse from "./Collapse";

function CardComponent() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col-md-4">
            <Collapse href={"CollapseExample1"}>
              <Card
                cardTitle={"Card Title I"}
                cardText={"Lorem ipsum dolar amet I."}
                updatedTime={"10min ago"}
                cardImage={"https://picsum.photos/id/1/200/200"}
              />
            </Collapse>
          </div>
          <div className="col-md-4">
            <Collapse href={"CollapseExample2"}>
              <Card
                cardTitle={"Card Title II"}
                cardText={"Lorem ipsum dolar amet II."}
                updatedTime={"20min ago"}
                cardImage={"https://picsum.photos/id/10/200/200"}
              />
            </Collapse>
          </div>
          <div className="col-md-4">
            <Collapse href={"CollapseExample3"}>
              <Card
                cardTitle={"Card Title III"}
                cardText={"Lorem ipsum dolar amet III."}
                updatedTime={"30min ago"}
                cardImage={"https://picsum.photos/id/11/200/200"}
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
