import React, {useState} from 'react'
import store from "./store"


const Provider = ({ children }) => {
    let [hidNavs, setHidNavs] = React.useState(false)
    const [loader, setLoader] = React.useState('none')
    const images = [
        { img: 'https://images.pexels.com/photos/541670/pexels-photo-541670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { img: 'https://images.pexels.com/photos/27301121/pexels-photo-27301121/free-photo-of-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { img: 'https://images.pexels.com/photos/20480148/pexels-photo-20480148/free-photo-of-narrow-street-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { img: 'https://images.pexels.com/photos/24017562/pexels-photo-24017562/free-photo-of-purple-blossoms-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { img: 'https://images.pexels.com/photos/27101110/pexels-photo-27101110/free-photo-of-a-door-is-open-to-a-small-courtyard.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { img: 'https://images.pexels.com/photos/27425072/pexels-photo-27425072/free-photo-of-faded-dream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { img: 'https://images.pexels.com/photos/20656448/pexels-photo-20656448/free-photo-of-landscape-of-the-rocks-on-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { img: 'https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/gallery/gallery-6.jpg' },
        { img: 'https://images.pexels.com/photos/27238377/pexels-photo-27238377/free-photo-of-cabin-on-the-mountain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { img: 'https://images.pexels.com/photos/27376082/pexels-photo-27376082/free-photo-of-thailand-travel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { img: 'https://images.pexels.com/photos/21622427/pexels-photo-21622427/free-photo-of-woman-in-hat-standing-on-rural-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ]

    const setHiddNavs = (e) => {
        if (e.target.className === 'fixSvg') {
            setHidNavs(!hidNavs);
        } else {
            setHidNavs(false)
        }
    }

    function settingloader(){
        setLoader('block');
        setTimeout(()=>setLoader('none'), 900);
    }

    let [zIn, setZIn] = useState(false)

    return (
        <store.Provider value={{ hidNavs, setHiddNavs, images, loader, settingloader, zIn, setZIn }}>
            {children}
        </store.Provider>
    )
}

export default Provider 