import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'; // extend-expect를 생략합니다.
import TextFormAtom from './TextFormAtom.tsx';
import {ChangeEvent} from 'react';

describe('TextFormAtom Component', () => {
  test('should render correctly', () => {
    const value = 'value test';
    const placeHolder = 'Type here...';

    render(<TextFormAtom
      value={value}
      onChange={function (_: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      }}
      placeholder={placeHolder}
    />);

    const inputElement = screen.getByPlaceholderText(placeHolder);
    const text = screen.getByDisplayValue(value);

    expect(inputElement).toHaveProperty('type', 'text');
    expect(text).toHaveValue(value);
  });
});
