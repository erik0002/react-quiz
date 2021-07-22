import React, {Component} from "react";
import s from './Drawer.module.css'
import BackDrop from "../../UI/BackDrop/BackDrop";

const links = [
    1, 2, 3
]

class Drawer extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return  (
                <li key={index}>
                    <a>Link {link} </a>
                </li>
            )
        })
    }
    render(){
        const cls = [s.Drawer]

        if(!this.props.isOpen){
            cls.push(s.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null }
            </React.Fragment>
        )
    }
}

export default Drawer;