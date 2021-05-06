import styled,{keyframes} from "styled-components";
import {fadeIn} from 'react-animations'

const fadeAnimation = keyframes`${fadeIn}`

export const Title =styled.h1`
    color: #fff;
    animation: 3s ${fadeAnimation}

`;
