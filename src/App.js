import React, { useState } from "react";
// import SetTimeout from "./JsMethods/SetTimeout";
// import Todos from "./questions/Todos";
// import Dropdown from './questions/Dropdown.js'
import {CheckBox} from './questions/CheckBox.js'
import Test from './questions/Test.js'
import {PrintWhenInputStop} from './questions/PrintWhenInputStop.js'
// import {RenderStringAsHtml} from './questions/RenderStringAsHtml.js'
import {Pagination} from './questions/Pagination.js'
import { UseCallback } from "./questions/Hooks/React memo/UseCallback";
import Loader from './questions/LazyLoading/Loader'
// import { GoogleMap } from "./questions/G-Map/GoogleMap";
// import { Navbar } from "./questions/HOC/Navbar";
// import Page1 from "./questions/HOC/Page1";
// import {Calculate} from './questions/Calculator/Calculate'
import UseRef from "./questions/Hooks/UseRef Hook/UseRef.js";
import CalculatingWidth from "./questions/Hooks/UseRef Hook/CalculatingWidth.js";
import LanguageInputs from "./questions/LanguageInputs";
// import Main from "./questions/Hooks/Context API/Main";
import Main from "./questions/Navigation/Main.js";
import GetPreviousCount from "./questions/Hooks/UseRef Hook/GetPreviousCount.js";
import DataFromFile from "./questions/API calling/DataFromFile.js";
import UseMemo from "./questions/Hooks/UseMemo/UseMemo.js";
import Debouncing from "./questions/Custom Hooks/Debouncing.js";
import Throttling from "./questions/Custom Hooks/Throttling.js";
import Accordion from "./UI question/accordion/Accordion.js";

const App = () => {
  return (
  //<Question/>
    // <Main/>
  //<Test/>
  // <DataFromFile/>
  //  <SetTimeout/>
  // <LanguageInputs/>
  // <Todos/>
  // <Dropdown/>
  // <CheckBox/>
  // <PrintWhenInputStop/>
  // <RenderStringAsHtml/>
  // <Pagination/>
  // <UseCallback/>
  // <Loader/>
  // <GoogleMap/>
  // <Page1/> //HOC
  // <Calculate/>
  // <UseRef/>
  // <GetPreviousCount/>
    // <CalculatingWidth/>
    // <Main/>
    // <UseMemo data={[1,2,9]}/>
  //<Debouncing/>
  //<Throttling/>
  <Accordion />
  );
};

export default App;