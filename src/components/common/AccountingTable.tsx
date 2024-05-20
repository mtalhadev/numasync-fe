import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Button as ButtonIcon,
  Checkbox,
} from '@nextui-org/react';
import { More } from 'iconsax-react';
import { AccountingDataIF } from 'src/types/accountingData';

const columnHelper = createColumnHelper<AccountingDataIF>();

const columns = [
  columnHelper.accessor(row => row.firmName, {
    id: 'firmName',
    cell: info => (
      <p>
        <Checkbox
          classNames={{
            base: 'items-start gap-1',
            wrapper: 'mt-1',
            label: 'text-lg text-n-dark font-medium',
          }}
        />
        <span className="text-sm text-foreground">{info.getValue()}</span>
      </p>
    ),
    header: () => (
      <div className="flex h-10 items-center rounded-s-lg bg-primary p-3 text-left text-xs font-semibold text-white">
        <Checkbox
          classNames={{
            base: 'items-start gap-1',
            wrapper: 'before:border-white',
          }}
        />
        <span>Accounting Firm Name</span>
      </div>
    ),
  }),
  columnHelper.accessor(row => row.owner, {
    id: 'owner',
    cell: info => (
      <p className="text-sm text-primary underline underline-offset-[3px]">
        {info.getValue()}
      </p>
    ),
    header: () => (
      <div className="h-10 bg-primary p-3 text-left text-xs font-semibold text-white">
        Owner
      </div>
    ),
  }),
  columnHelper.accessor(row => row.noTeamMembers, {
    id: 'noTeamMembers',
    cell: info => <p className="text-sm text-foreground">{info.getValue()}</p>,
    header: () => (
      <div className="h-10 bg-primary p-3 text-left text-xs font-semibold text-white">
        # of Team Members
      </div>
    ),
  }),
  columnHelper.accessor(row => row.action, {
    id: 'action',
    cell: info => (
      <div>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <ButtonIcon
              isIconOnly
              variant="light"
              size="sm"
              className="ml-auto flex text-default-400"
            >
              {info.getValue()}
              <More size="24" />
            </ButtonIcon>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="view">View</DropdownItem>
            <DropdownItem key="edit">Edit</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    ),
    header: () => (
      <div className="h-10 rounded-e-lg bg-primary p-3 text-right text-xs font-semibold text-white">
        Action
      </div>
    ),
  }),
];

const AccountingTable = ({ data }: { data: AccountingDataIF[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="shadow-table overflow-auto rounded-xl border border-default-200 p-4">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="p-0 pb-1"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-b border-default-100 ">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountingTable;
