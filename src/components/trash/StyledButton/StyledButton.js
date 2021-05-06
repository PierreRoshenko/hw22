import styled from 'styled-components'

export const StyledButton = styled.button`
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: ${props=> props.variant ==='primery'?'#fff':'#000'};
    background-color: ${props=> props.variant ==='primery'?'#23ae77':'#fff'};;
    border: none;
    border-radius: 45px;
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    :hover {
    background-color: #447de7;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}
`;