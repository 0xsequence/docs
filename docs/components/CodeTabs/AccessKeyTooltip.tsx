import React, { useState } from 'react';
import { Tooltip } from '@0xsequence/design-system'

const AccessKeyTooltip = ({ children }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (

    <Tooltip message="Google">
        sk_test_4eC39HqLyjWDarjtT1zdp7dc
        </Tooltip>
  );
};

export default AccessKeyTooltip;