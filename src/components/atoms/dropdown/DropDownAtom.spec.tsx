import { render, screen, fireEvent } from "@testing-library/react";
import DropDownAtom from "./DropDownAtom";
import {  SelectChangeEvent } from "@mui/material";

describe('DropDownAtom', () => {
  test('renders correctly and handles change events', () => {
    let selectedValue = '';

    const handleChange = (event: SelectChangeEvent<unknown>) => {
      selectedValue = event.target.value as string;
    };

    render(
      <DropDownAtom
        label="Test Dropdown"
        value={selectedValue}
        options={['Ten', 'Twenty', 'Thirty']}
        onChange={handleChange}
      />
    );

    // 드롭다운 열기
    const dropdownElement = screen.getByRole('combobox');
    fireEvent.mouseDown(dropdownElement);

    // MenuItem이 렌더링되었는지 확인
    const menuItemElement = screen.getByText('Ten');
    expect(document.body.contains(menuItemElement)).toBeTruthy();

    // 클릭 이벤트 테스트
    fireEvent.click(menuItemElement);
    expect(selectedValue).toBe('Ten');

    // 다른 값을 선택하여 selectedValue가 변경되는지 테스트
    fireEvent.mouseDown(dropdownElement);
    const anotherMenuItemElement = screen.getByText('Twenty');
    fireEvent.click(anotherMenuItemElement);
    expect(selectedValue).toBe('Twenty');
  });
});
