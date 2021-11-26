import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

export const Logo = styled.img``;


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 265px;
  flex-direction: column;
  margin-bottom: 160px;
`;

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #290F75;
  display: block;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #95CBE7;
  margin-top: 10px;
  margin-bottom: 3rem;
`;

export const Input = styled.input`
  font-size: 14px;
  color: #95CBE7;
  border: 1px solid #DDF4FF;
  height: 50px;
  outline: none;
  border-radius: 4px;
  padding-left: 15px;
  margin-bottom: 1.5rem;
  &::placeholder {
    color: #95CBE7;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  color: white;
  width: 100%;
  height: 50px;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  background: rgb(77,24,226);
  border: none;
  background: linear-gradient(90deg, rgba(77,24,226,1) 0%, rgba(255,104,31,1) 100%);
`;