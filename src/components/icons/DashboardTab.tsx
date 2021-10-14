import * as React from "react";

type Props = {
  color?: string;
};

const DashboardTab: React.FC<Props> = ({ color }) => {
  return (
    <svg width={16} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="prefix__a" fill="#fff">
        <rect x={9} width={7} height={6.995} rx={1} />
      </mask>
      <rect
        x={9}
        width={7}
        height={6.995}
        rx={1}
        stroke={color}
        strokeWidth={3}
        mask="url(#prefix__a)"
      />
      <mask id="prefix__b" fill="#fff">
        <rect x={9} y={7.994} width={7} height={6.995} rx={1} />
      </mask>
      <rect
        x={9}
        y={7.994}
        width={7}
        height={6.995}
        rx={1}
        stroke={color}
        strokeWidth={3}
        mask="url(#prefix__b)"
      />
      <mask id="prefix__c" fill="#fff">
        <rect y={7.994} width={7} height={6.995} rx={1} />
      </mask>
      <rect
        y={7.994}
        width={7}
        height={6.995}
        rx={1}
        stroke={color}
        strokeWidth={3}
        mask="url(#prefix__c)"
      />
      <mask id="prefix__d" fill="#fff">
        <rect width={7} height={6.995} rx={1} />
      </mask>
      <rect
        width={7}
        height={6.995}
        rx={1}
        stroke={color}
        strokeWidth={3}
        mask="url(#prefix__d)"
      />
    </svg>
  );
};

export default DashboardTab;
