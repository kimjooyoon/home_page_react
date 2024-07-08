import { MouseEvent } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonAtom from "./ButtonAtom";

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

    // 버튼이 올바르게 렌더링되는지 확인 (방법 1)
    const buttonElement = screen.getByText('ButtonAtom');
    expect(document.body.contains(buttonElement)).toBeTruthy();

    // 클릭 이벤트가 올바르게 동작하는지 확인
    fireEvent.click(buttonElement);
    expect(num).toBe(1);

    // 다시 클릭하여 증가하는지 확인
    fireEvent.click(buttonElement);
    expect(num).toBe(2);
  });
});
