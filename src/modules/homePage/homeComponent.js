import React from 'react';
import HeaderNav from "./header";
import Banner from "./banner";
import AfterBanner from "./afterBanner";
import ThirdComp from "./thirdCopm";
import ForthComp from "./fourthComp";
import FifthComp from "./fifthComp";
import SixthComp from "./sixthComp";
import Seventh from "./seventh"
import EighthComp from './EighthComp';
import Footer from './footer';
const homeComponent = () => {
  return (
<>
    <HeaderNav />
    <Banner />
    <AfterBanner />
    <ThirdComp />
    <ForthComp />
    <FifthComp />
    <SixthComp />
    <Seventh />
    <EighthComp />
    <Footer />

</>  )
}

export default homeComponent