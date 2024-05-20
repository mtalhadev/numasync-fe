import { FC, useMemo } from 'react';

// Icons
import { More } from 'iconsax-react';

// Types
import { ActionDropdownProps } from 'src/types/actionDropdownTypes';
import { dropDownMenus } from 'src/types/dropDownTypes';

// Components
import CustomDropdown from '../../atoms/Dropdown';

const ActionDropdown: FC<ActionDropdownProps> = ({
  onView,
  onEdit,
  onDelete,
  customActionMenu,
  data,
}) => {
  const dropDownMenus: dropDownMenus[] = [];

  if (onView) {
    dropDownMenus.push({
      title: 'View',
      key: 'view',
      onClick: () => {
        onView(data);
      },
    });
  }

  if (onEdit) {
    dropDownMenus.push({
      title: 'Edit',
      key: 'edit',
      onClick: () => {
        onEdit(data);
      },
    });
  }

  if (onDelete) {
    dropDownMenus.push({
      title: 'Delete',
      key: 'delete',
      className: 'text-danger',
      color: 'danger',
      onClick: () => {
        onDelete(data);
      },
    });
  }

  useMemo(() => {
    if (customActionMenu) {
      customActionMenu.forEach((menu: dropDownMenus) => {
        dropDownMenus.push({
          title: menu.title,
          key: menu.key,
          className: menu.className,
          color: menu.color,
          onClick: () => menu.onClick?.(data),
        });
      });
    }
  }, [customActionMenu, data]);

  return (
    <CustomDropdown
      dropDownButton={
        <More size="24" className="ml-auto flex text-default-400" />
      }
      dropDownMenus={dropDownMenus as dropDownMenus[]}
    />
  );
};

export default ActionDropdown;
