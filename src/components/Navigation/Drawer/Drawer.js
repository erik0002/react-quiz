import React, {Component} from "react";
import s from './Drawer.module.css'
import BackDrop from "../../UI/BackDrop/BackDrop";
import {NavLink} from "react-router-dom"

class Drawer extends Component {

    clickHandler = () => {
        this.props.onClose()
    }
    renderLinks(links) {
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

        const links = [
            {to: '/', label: 'Lists', exact: true}
        ]

        console.log('AUTH', this.props.isAuthenticated)

        if(this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Create list', exact: false})
            links.push({to: '/logout', label: 'Log out', exact: false})
        } else {
            links.push({to: '/auth', label: 'Authorization', exact: false})
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null }
            </React.Fragment>
        )
    }
}

export default Drawer;
