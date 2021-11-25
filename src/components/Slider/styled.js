import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

export const ContainerInner = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DataImg = styled.img`
  width: 460px;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: white;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #95CBE7;
  text-align: center;
`;

export const Dots = styled.ul`
  width: auto;
  padding: 0;
  display: flex;
`;

export const Dot = styled.li`
  width: 5px;
  height: 5px;
  background: #95CBE7;
  list-style: none;
  border-radius: 5px;
  margin: 0 5px;
  background: ${props => (props.active ? '#FD6721' : '#95CBE7')};
`;