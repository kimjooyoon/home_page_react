import {Meta, StoryObj} from '@storybook/react';

import MessageAtom from '../../../../../src/components/atoms/message/MessageAtom';
import TypographyAtom from '../../../../../src/components/atoms/typography/TypographyAtom';

const meta: Meta<typeof MessageAtom> = {
  component: MessageAtom,
};

export default meta;

type Story = StoryObj<typeof MessageAtom>;

export const Basic: Story = {
    args: {
      children: (<>
          <TypographyAtom variant="body2" color="textSecondary">
            2024.07.24 17:30 - 미팅 기록이 추가되었습니다
          </TypographyAtom>
          <TypographyAtom variant="body2" color="textSecondary">
            2024.07.24 17:30 - 미팅 기록이 추가되었습니다
          </TypographyAtom>
        </>
      ),
    }
  }
;
