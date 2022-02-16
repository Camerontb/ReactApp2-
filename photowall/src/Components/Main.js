import React, {Component} from "react";

import List from "./List";
import Title from "./Title";

class Main extends Component{
    render(){
        return (
            <div>
                <Title Title = "Indoor Chores"/>

                <List tasks= {['shave the hole','Shave my legs']}/>
                
                <Title Title = "Outside Chores"/>

                <List tasks= {["clean the car","Mow the Lawns"]}/>
            </div>
        )
    }

}

export default Main