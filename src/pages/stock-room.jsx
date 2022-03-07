import SelectOptions from "components/atoms/form/SelectOptions";
import SearchBar from "components/atoms/searchbar/SearchBar";
import Footer from "components/molecules/footer/Footer";
import Header from "components/molecules/header/Header";
import SubHeader from "components/molecules/header/SubHeader";
import SideBar from "components/molecules/sidebar/SideBar";
import StepBar from "components/stepbar/StepBar";
import Detail from "components/StockItem/Detail";
import WithPrivateRoute from "hoc/WithPrivateRoute";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useHistory} from 'react-router-dom';
import StockItem from '../components/StockItem';
function StockRoom () {
    const [step, setStep] = useState(0)
    const componentState = {
        0: <StockItem addItem={setStep} />,
        1: <Detail addItem={setStep}/>
    }

    return(
        <>
            <Header/>
            <div className="flex w-100% bg-backgroundColor">
                <div className="w-20%">
                    <SideBar routBack={(step == 0) ? false : true}/>
                </div>     
                {componentState[step]}
            </div>

            <Footer/>
        </>
    );
}

// export default WithPrivateRoute(StockRoom)
export default StockRoom