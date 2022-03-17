import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organism/user/UserCard"

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/VBmRbvMrb7A",
    name: `プジ - ${val}`,
    email: "pujitaro@puji.com",
    phone: "123-456-7890",
    company: {
      name: "ぷー株"
    },
    website: "https://www.google.com" 
    }
})


export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
      {
        users.map((user) => {
          return (
            <UserCard key={user.id} user={user} />
          )
        })
      }
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`