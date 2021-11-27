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

export const Top = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const BackIcon = styled.img`
  cursor: pointer;
  display: inline-block;
  width: 20px;
  margin-right: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 4rem;
  flex-direction: column;
  margin-bottom: 160px;
`;

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: calc(100% - 100px);
`;

export const Title = styled.h1`
  font-size: 18px;
  color: #290F75;
  display: block;
  font-weight: 500;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.primary ? '#290F75' : '#95CBE7')};
  width: 170px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Table = styled.div`
  position: relative;
`;

export const TableHead = styled.div`
  font-size: 14px;
  display: grid;
  border-bottom: 1px solid #DDF4FF;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
`;

export const TableBody = styled.div`
  font-size: 14px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: .8rem 0;
`;

export const Button = styled.button`
  font-size: 14px;
  color: white;
  width: 100px;
  height: 35px;
  outline: none;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  margin: auto;
  text-align: center;
  background: rgb(77,24,226);
  border: none;
  background: linear-gradient(90deg, rgba(77,24,226,1) 0%, rgba(255,104,31,1) 100%);
`;

export const Loading = styled.img`
  width: 60px;
  margin: auto;
`;
