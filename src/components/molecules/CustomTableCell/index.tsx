import { FC, PropsWithChildren } from 'react';

// Utils
import { CUSTOM_CELL_TYPE } from 'src/utils/enums';

// Components
import Badge from '../../atoms/Badge';
import Text from '../../atoms/Text';
import ActionDropdown from '../ActionDropdown';

// Types
import { CustomTableCellProps } from 'src/types/tableTypes';

// Icons
import { Eye, Trash } from 'iconsax-react';

const CustomTableCell: FC<PropsWithChildren<CustomTableCellProps>> = ({
  children,
  type,
  variant,
  onView,
  onEdit,
  onDelete,
  customActionMenu,
  data,
  TrashIcon,
  showActionDropdown,
}) => {
  switch (type) {
    case CUSTOM_CELL_TYPE.TEXT:
      return <div>{children}</div>;

    case CUSTOM_CELL_TYPE.BADGE:
      return <Badge variant={variant}>{children}</Badge>;

    case CUSTOM_CELL_TYPE.ACTION:
      return (
        <div className="flex items-center justify-center">
          {TrashIcon && (
            <Trash
              size="24"
              onClick={onDelete}
              className="cursor-pointer text-danger-500 hover:text-danger-600 hover:scale-105 duration-200"
            />
          )}
          {showActionDropdown && (
            <ActionDropdown
              onView={onView}
              onEdit={onEdit}
              onDelete={onDelete}
              customActionMenu={customActionMenu}
              data={data}
            />
          )}
        </div>
      );

    case CUSTOM_CELL_TYPE.LINK:
      return (
        <Text containerTag="p" className="text-sm text-primary-500 underline">
          {children}
        </Text>
      );

    case CUSTOM_CELL_TYPE.DATE:
      return <div>{children}</div>;

    case CUSTOM_CELL_TYPE.EYE:
      return (
        <div className="flex justify-center">
          <Eye size="24" className="text-default-400" />
        </div>
      );

    case CUSTOM_CELL_TYPE.DESCRIPTOR:
      return (
        <div>
          <Text containerTag="p">{children}</Text>
        </div>
      );

    default:
      return <div>{children}</div>;
  }
};

export default CustomTableCell;
