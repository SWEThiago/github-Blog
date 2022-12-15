import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  width: 864px;
  margin: auto;
  margin-top: 24px;

  input {
    flex: 1;
    border: solid 1px ${(props) => props.theme['base-border']};
    border-radius: 6px;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-border']};
    }
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 864px;
  margin: auto;
  margin-top: 200px;

  span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};

    p {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;

      text-align: right;

      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const Card = styled.div`
  width: 416px;
  height: 260px;

  padding: 2rem;

  margin: auto;
  margin-top: 32px;

  border-radius: 10px;

  background: ${(props) => props.theme['base-post']};

  div {
    display: grid;
    grid-template-columns: 1fr 80px;
    margin-bottom: 32px;

    h1 {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      margin-left: 20px;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const Description = styled.div`
  max-width: 40ch;
  max-height: 10ch;
  overflow: hidden;

  white-space: nowrap;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${(props) => props.theme['base-text']};
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 32px;

  width: 864px;
  margin: auto;

  a {
    text-decoration: none;
  }
`
