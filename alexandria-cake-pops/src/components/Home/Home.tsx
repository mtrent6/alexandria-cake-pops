import React from 'react'
import './Home.css'
import '../../common/styles/common.css'
import Gallery from 'react-photo-gallery'
import cake_pops from '../../assets/cake_pops.webp'
import cakepop2 from '../../assets/cakepop2.webp'
import third from "../../assets/third.webp"

const Home = () => {

    const data = [
        {
          image: "https://upload.wikimedia.o rg/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
          caption: "Scotland"
        },
        {
          image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
          caption: "Scotland"
        },
        {
          image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
          caption: "San Francisco"
        },
        {
          image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
          caption: "Scotland"
        },
        {
          image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
          caption: "Darjeeling"
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }


    const photos = [
        {
            src: cake_pops,
            width: 4,
            height: 2
        },
        {
            src: cakepop2,
            width: 2,
            height: 2
        },
        {
            src: cake_pops,
            width: 4,
            height: 2
        },
        {
            src: third,
            width: 4,
            height: 2
        },
        {
            src: cakepop2,
            width: 2,
            height: 2
        },
        {
            src: cakepop2,
            width: 2,
            height: 2
        },
        {
            src: third,
            width: 4,
            height: 2
        },
        {
            src: cake_pops,
            width: 4,
            height: 2
        },
        {
            src: cakepop2,
            width: 2,
            height: 2
        },
        {
            src: third,
            width: 2,
            height: 2
        },
        {
            src: cakepop2,
            width: 2,
            height: 2
        },
        {
            src: cake_pops,
            width: 4,
            height: 2
        },
        {
            src: third,
            width: 4,
            height: 2
        }
    ];

    return (
        <div className="wrapper">
            <div className="centerBox">
                <div className="headerText">Alexandria Cake Pops</div>
                <div className="innerText">
                    Hi! Welcome to alexandria cake pops
                    <li style={{ paddingTop: 10 }}>
                        Lorum Ipsum
                        Lorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum IpsumLorum Ipsum
                    </li>
                    <li>Lorum IpsumLorum IpsumLorum IpsumLorum Ipsum</li>
                    <li>Lorum IpsumLorum IpsumLorum IpsumLorum Ipsum Lorum Ipsum</li>
                    <div className="imageWrapper">
                        {/* <img style={{ width: 300 }} src={third}></img>
                        <img style={{ width: 400 }} src={cake_pops}></img>
                        <img style={{ width: 200 }} src={cakepop2}></img> */}

                    </div>
                </div>
            </div>
            <div className="homeButtonRow">
                <div className="homeButton">CREATE YOUR OWN</div>
                <div className="homeButton">VIEW GALLERY</div>
            </div>
        </div>
    )

    //think i want this
    // https://reactjsexample.com/3d-cover-flow-in-react/
}

export default Home