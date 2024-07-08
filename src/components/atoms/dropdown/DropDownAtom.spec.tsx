import { MouseEvent } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DropDownAtom from "./DropDownAtom";
import { MenuItem } from "@mui/material";

describe('DropDownAtom', () => {
  test('renders correctly and handles click events', () => {
    let num = 0;

    render(
      <DropDownAtom
        onClick={(event: MouseEvent<HTMLDivElement>): void => {
          if (event != null) {
            num = num + 1;
          }
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
      </DropDownAtom>
    );

    // 드롭다운 열기
    const dropdownElement = screen.getByRole('combobox');
    fireEvent.mouseDown(dropdownElement);

    // MenuItem이 렌더링되었는지 확인
    const menuItemElement = screen.getByText('Ten');
    expect(document.body.contains(menuItemElement)).toBeTruthy();

    // 클릭 이벤트 테스트
    fireEvent.click(menuItemElement);
    expect(num).toBe(1);

    // 다시 클릭하여 num이 증가하는지 테스트
    fireEvent.mouseDown(dropdownElement);
    fireEvent.click(menuItemElement);
    expect(num).toBe(2);
  });
});
