import styled from 'styled-components'

export const ImgBackground = styled.img`
  width: 100vw;
  height: 296px;
  position: relative;
`

export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin-top: -360px;
`

export const Container = styled.main`
  position: absolute;
  width: 864px;
  height: 212px;
  left: calc(50% - 864px / 2);
  top: 208px;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 148px;
    height: 148px;
    left: 40px;
    top: calc(50% - 148px / 2);
    border-radius: 80px;
    position: absolute;
  }
`

export const Body = styled.body`
  background: transparent;
  display: flex;
  flex-direction: column;
  padding-left: 225px;
  padding-top: 32px;
  padding-bottom: 32px;

  p {
    margin-top: 24px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: ${(props) => props.theme['base-text']};
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 16px;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};

  h2 {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 160%;

    text-transform: uppercase;

    color: ${(props) => props.theme.blue};

    a {
      color: ${(props) => props.theme.blue};
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 32px;
  margin-top: 40px;

  div {
    display: flex;
    align-items: baseline;
    gap: 8px;

    a {
      text-decoration: none;
      color: ${(props) => props.theme['base-subtitle']};
    }

    a:hover {
      text-decoration: underline;
    }
  }
`
