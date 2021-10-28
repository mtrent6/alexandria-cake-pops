import React from 'react'
import '../../common/styles/common.css'
import cake_pops from '../../assets/cake_pops.webp'
import cakepop2 from '../../assets/cakepop2.webp'
import third from "../../assets/third.webp"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

const imageList = [{
    src: cakepop2,
    width: 320,
    height: 320,
    alt: '',
}, {
    src: cake_pops,
    width: 320,
    height: 167,
    alt: '',
}, {
    src: third,
    width: 320,
    height: 240,
    alt: ''
}, {
    src: third,
    width: 320,
    height: 400,
    alt: ''
}];

const Item = (props: any) => {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}




export const Gallery = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <div className="wrapper">
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )

}