import React, {Component} from "react";
import s from './Drawer.module.css'
import BackDrop from "../../UI/BackDrop/BackDrop";
import {NavLink} from "react-router-dom"

const links = [
    {to: '/', label: 'Lists', exact: true},
    {to: '/auth', label: 'Authorization', exact: false},
    {to: '/quiz-creator', label: 'Create list', exact: false}
]

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }
    renderLinks() {
        return links.map((link, index) => {
            return  (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={s.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
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
