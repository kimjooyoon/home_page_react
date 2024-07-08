import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'; // extend-expect를 생략합니다.
import TextFormCardMolecule from "./TextFormCardMolecule.tsx";


describe('TextFormCardMolecule', () => {
  test('it renders correctly', () => {
    const givenName = 'Teddy Kim'
    const givenEmail = 'asketeddy@gmail.com'
    const givenCompany = 'stargaser'
    const givenPhone = '010-2851-3738'
    const givenPosition = 'front-end'
    const givenDescription = 'develop react, flutter.'

    render(<TextFormCardMolecule
      name={givenName}
      email={givenEmail}
      company={givenCompany}
      phone={givenPhone}
      position={givenPosition}
      description={givenDescription}
    />)

    const name = screen.getByText(givenName)
    // const email = screen.getByText(givenEmail)
    // const company = screen.getByText(givenCompany)
    // const phone = screen.getByText(givenPhone)
    // const position = screen.getByText(givenPosition)
    // const description = screen.getByText(givenDescription)

    expect(name).toHaveTextContent(givenName)
    // expect(email).toHaveTextContent(givenEmail)
    // expect(company).toHaveTextContent(givenCompany)
    // expect(phone).toHaveTextContent(givenPhone)
    // expect(position).toHaveTextContent(givenPosition)
    // expect(description).toHaveTextContent(givenDescription)
  });
})