import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextFormAtom from './TextFormAtom';
import { TextFieldAtomMultiline } from './TextFormAtom';

describe('TextFormAtom Component', () => {
  test('should render correctly', () => {
    const value = 'value test';
    const placeHolder = 'Type here...';

    render(
      <TextFormAtom
        value={value}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        placeholder={placeHolder}
      />
    );

    const inputElement = screen.getByPlaceholderText(placeHolder);
    const text = screen.getByDisplayValue(value);

    expect(inputElement).toHaveProperty('type', 'text');
    expect(text).toHaveValue(value);
  });
});

describe('TextFieldMultilineAtom Component', () => {
  test('should render correctly', () => {
    const value = 'multiline value test';
    const placeHolder = 'Type your text...';

    render(
      <TextFieldAtomMultiline
        value={value}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
        placeholder={placeHolder}
      />
    );

    const textAreaElement = screen.getByPlaceholderText(placeHolder);
    const text = screen.getByDisplayValue(value);

    expect(textAreaElement).toHaveProperty('tagName', 'TEXTAREA');
    expect(text).toHaveValue(value);
  });
});
