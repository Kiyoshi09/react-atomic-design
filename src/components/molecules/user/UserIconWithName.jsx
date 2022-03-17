import styled from "styled-components"

export const UserIconWidthName = (props) => {
  const { image, name } = props

  return (
    <SContainer>
      <SImg alt={name} height={160} width={160} src={image}/>
      <SName>{name}</SName>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
const SImg = styled.img`
  border-radius: 50%;
`

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`