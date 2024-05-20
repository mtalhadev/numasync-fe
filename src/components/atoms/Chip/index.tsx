import { Chip as NextUiChip } from '@nextui-org/react';

const Chip = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
  return (
    <NextUiChip
      onClose={onClose}
      classNames={{
        closeButton: '!text-success-foreground',
        base: 'bg-content2 rounded-xl',
        content: 'text-success-foreground',
      }}
      size='md'
    >
      {children}
    </NextUiChip>
  );
};

export default Chip;
