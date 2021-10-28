import Home from "../components/Home/Home"
import Order from "../components/Order/Order"
import { Gallery } from "../components/Gallery/Gallery"
import { NavLink } from 'react-router-dom';
import { ColorButton } from '../common/ColorButton'
import './routes.css'
import logo from "../assets/logo.jpg"

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
interface IRoute {
    name: string;
    displayName: string;
    content?: JSX.Element;
}
export const routes: IRoute[] = [
    {
        name: "home",
        displayName: "HOME",
        content: <Home />,
    },
    {
        name: "order",
        displayName: "ORDER",
        content: <Order />,
    },
    {
        name: 'gallery',
        displayName: "GALLERY",
        content: <Gallery/>,

    },
    {
        name: "social-media",
        displayName: "SOCIAL MEDIA",
    },
    {
        name: "our-story",
        displayName: "OUR STORY",
    },
    {
        name: "contact",
        displayName: "CONTACT",
    }
]

const getNavigation = () => {
    return (
        <div className="buttonRow">
            {routes.map((r, i) => {
                return (
                    r.name === 'home' ? <NavLink key={"unique"} to={`/${r.name}`}>
                        <div className="logoWrapper">
                            <img style={{ borderRadius: 10 }} src={logo} height="80" width="150" />
                        </div>

                    </NavLink> :
                        <NavLink key={i} to={`/${r.name}`}>
                            <div className="navButtons">
                                {r.displayName}
                            </div>
                            {/* <ColorButton variant="text">{r.displayName}</ColorButton> */}
                        </NavLink>
                )
            })}
        </div>
    )
}

export const Router = () => {
    return (<BrowserRouter>
        {getNavigation()}
        <Switch>
            {routes.map((r, i) => {
                return <Route path={`/${r.name}`}>{r.content}</Route>;
            })}
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

