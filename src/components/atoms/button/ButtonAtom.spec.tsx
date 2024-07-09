import { MouseEvent } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonAtom, { ButtonAtomSaveIcon } from "./ButtonAtom";

describe('ButtonAtom', () => {
  test('renders correctly', () => {
    let num = 0;

    render(
      <ButtonAtom
        onClick={(event: MouseEvent<HTMLButtonElement>): void => {
          if (event != null) {
            num = num + 1;
          }
        }}
      >
        ButtonAtom
      </ButtonAtom>
    );

    const buttonElement = screen.getByText('ButtonAtom');
    expect(document.body.contains(buttonElement)).toBeTruthy();

    fireEvent.click(buttonElement);
    expect(num).toBe(1);

    fireEvent.click(buttonElement);
    expect(num).toBe(2);
  });
});

describe('ButtonAtomSaveIcon', () => {
  test('renders correctly with icon', () => {
    let num = 0;

    render(
      <ButtonAtomSaveIcon
        onClick={(event: MouseEvent<HTMLButtonElement>): void => {
          if (event != null) {
            num = num + 1;
          }
        }}
      >
        Save Button
      </ButtonAtomSaveIcon>
    );

    const buttonElement = screen.getByText('Save Button');
    const iconElement = screen.getByTestId('SaveIcon');

    expect(document.body.contains(buttonElement)).toBeTruthy();
    expect(document.body.contains(iconElement)).toBeTruthy();

    fireEvent.click(buttonElement);
    expect(num).toBe(1);

    fireEvent.click(buttonElement);
    expect(num).toBe(2);
  });
});
