import React from "react";
import MainContent from "../landing/MainContent";

import patchy from "../../imgs/Exclude.png";
import "../landing/MainContent.scss";

jest.mock("../landing/MainContent", () => () => "MainContent");
