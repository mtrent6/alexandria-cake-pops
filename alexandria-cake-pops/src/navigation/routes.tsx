import Home from "../components/Home/Home"
import Order from "../components/Order/Order"
import { CakePopGallery } from "../components/Gallery/Gallery"
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
    route?
}
export const routes: IRoute[] = [
    {
        name: "home",
        displayName: "HOME",
        route: <Route path={`/home`} render={(props) => <Home/>}></Route>,
    },
    {
        name: "order",
        displayName: "ORDER",
        route: <Route path={`/order`} render={(props) => <Order {...props}/>}></Route>,

    },
    {
        name: 'gallery',
        displayName: "GALLERY",
        route: <Route path={`/gallery`} render={(props) => <CakePopGallery/>}></Route>,

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
                return r.route;
            })}
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
    </BrowserRouter>
    )
}

