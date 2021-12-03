import Button from 'components/atoms/buttons/Button';
import SearchBar from 'components/atoms/searchbar/SearchBar';
import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { ReactComponent as Cart } from '../../../assets/images/cartIcon.svg';

function Header({ login = true }) {
    const [active, setActive] = useState(0);
    const tabs = ["about", "galleries", "browse artwork"];
    const loginTabs = ["my gallery", "store", "get started", "profile"];
    const handleClick = (index) => setActive(index);
    return (
        <div className="max-screen flex flex-row p-30 items-center">
            <div>
                <Logo className="w-130 h-32 mr-72" />
            </div>
            {(login) ?
                <div className="w-200"></div> :
                <>
                    <div className={`flex flex-row`}>
                        {tabs.map((e, i) => <div className={`font-bold mt-6 ${(active == i) ? "text-primary" : "text-secondary"} text-sm uppercase mr-47 hover:text-primary`} onClick={() => handleClick(i)}>{e}</div>)}
                    </div>
                    <div className="w-153"></div>
                </>

            }
            <div>
                <SearchBar className="" placeholder="search for an artist" bgColor='bg-white' />
            </div>

            {(login)
                ? <>
                    <div className="w-50"></div>
                    <div className="flex flex-row">
                        {loginTabs.map((e, i) => <div className={`font-bold mt-6 ${(active == i) ? "text-primary" : "text-secondary"} text-sm uppercase mr-73 hover:text-primary`} onClick={() => handleClick(i)}>{e}</div>)}
                    </div>
                </>
                :
                <div className="flex flex-row items-center">
                    <Button className="w-87 h-33 mr-33">Create</Button>
                    <div className="text-secondary-black font-reg text-base mr-20">Sign in</div>
                    <Cart className="w-20 h-18" />
                </div>
            }
        </div>
    )
}

export default Header
