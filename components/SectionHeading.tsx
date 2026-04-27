
import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  rightSlot?: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ kicker, title, rightSlot }) => (
  <div className="flex items-end justify-between mb-10 pb-5 border-b border-paper-line">
    <div>
      {kicker && (
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[2px] w-8 bg-brand-blue" />
          <span className="text-[10px] font-bold uppercase tracking-kicker text-brand-blue">
            {kicker}
          </span>
        </div>
      )}
      <h2 className="serif-title text-display-md font-bold text-ink">
        {title}
      </h2>
    </div>
    {rightSlot && <div className="hidden md:block">{rightSlot}</div>}
  </div>
);

export default SectionHeading;
