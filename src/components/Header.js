import styled from "styled-components";

export default function Header({logo}) {
  return (
    <Logo>
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
    </Logo>
  );
}

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img{
        width: 52px;
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`