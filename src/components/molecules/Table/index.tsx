import { useMemo, useState } from 'react';

// NextUI
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react';

// Components
import CustomPagination from 'src/components/molecules/Pagination';
import CustomTableCell from 'src/components/molecules/CustomTableCell';
import CustomSkeleton from 'src/components/atoms/Skeleton';
import Empty from 'src/components/atoms/Empty';

// Utils
import { CUSTOM_CELL_TYPE, SKELETON_VARIANT, STATUS } from 'src/utils/enums';
import { statusVariant } from 'src/utils/constants';
import { removeWhiteSpaces, sortArray } from 'src/utils/helper';

// Assets
import { Sort } from 'src/assets/svg';

// Types
import { CustomTableProps, TableColumnTypes } from 'src/types/tableTypes';
import { TableSortTypes } from 'src/types/commonTypes';

const CustomTable = ({
  selectionMode = 'none',
  columns,
  rows,
  showPagination = true,
  isLoading = false,
  isEmpty = false,
  onRowClick,
  customActionMenu,
  onDelete,
  onView,
  onEdit,
  TrashIcon,
  showActionDropdown = true,
}: CustomTableProps) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sort, setSort] = useState<TableSortTypes>({
    field: '',
    type: '',
    count: -1,
  });

  const pages = Math.ceil(rows?.length / rowsPerPage);

  const setSortOption = (column: TableColumnTypes) => {
    if (column.type !== CUSTOM_CELL_TYPE.ACTION) {
      setSort(prev => {
        if (prev.field === column.key && prev.count === 1) {
          return { field: '', type: '', count: -1 };
        } else if (prev.field !== column.key && prev.count >= 0) {
          return {
            field: column.key,
            type: column.type,
            count: 0,
          } as TableSortTypes;
        }
        return {
          field: column.key,
          type: column.type,
          count: prev.count + 1,
        } as TableSortTypes;
      });
    }
  };

  const items = useMemo(() => {
    if (rows) {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;

      // TODO: Convert sorting logic on the basis of asc and desc order
      if (sort.field && sort.count >= 0) {
        if (sort.type === CUSTOM_CELL_TYPE.DATE) {
          return sortArray(
            rows.slice(start, end),
            sort.field,
            sort.count === 0 ? 'asc' : 'desc',
            'date'
          );
          // return rows.slice(start, end).sort((a, b) => (new Date(b[sort.field]) > new Date(a[sort.field]) ? 1 : -1));
        }

        return sortArray(
          rows.slice(start, end),
          sort.field,
          sort.count === 0 ? 'asc' : 'desc',
          'date'
        );
        // return rows.slice(start, end).sort((a, b) => (b[sort.field] > a[sort.field] ? 1 : -1));
      }

      return rows.slice(start, end);
    }
  }, [page, rows, rowsPerPage, sort]);

  const classNames = useMemo(
    () => ({
      wrapper: [''],
      th: [
        'bg-primary-500',
        'text-white',
        'text-xs',
        'font-semibold',
        selectionMode === 'multiple' && 'first-of-type:!w-1',
      ],
      td: ['text-foreground', 'text-sm', 'py-[18px]'],
      tr: [onRowClick && 'cursor-pointer', 'border-b', 'border-b-default-100'],
    }),
    [selectionMode, onRowClick]
  );

  const columnsMap = useMemo(
    () => new Map(columns.map(col => [col.key, col.type])),
    [columns]
  );

  if (isLoading) return <CustomSkeleton variant={SKELETON_VARIANT.TABLE} />;

  if (isEmpty) return <Empty />;

  return (
    <>
      <Table
        aria-label="Table"
        selectionMode={selectionMode}
        classNames={classNames}
        color="primary"
        checkboxesProps={{
          classNames: {
            wrapper: 'before:border-content3',
          },
        }}
      >
        <TableHeader columns={columns}>
          {column => (
            <TableColumn key={column.key}>
              <button
                className={`flex cursor-pointer items-center gap-1 ${
                  column.type === CUSTOM_CELL_TYPE.ACTION &&
                  'flex w-full items-center justify-end'
                }`}
                onClick={() => setSortOption(column)}
              >
                {column.label}
                {column.type !== CUSTOM_CELL_TYPE.ACTION &&
                  column.type !== CUSTOM_CELL_TYPE.EYE && (
                    <span>
                      <img src={Sort} alt="Sort" className="h-3 w-2" />
                    </span>
                  )}
              </button>
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={items}>
          {item => (
            <TableRow
              key={item.key}
              onClick={() => onRowClick && onRowClick(item)}
              className="last:border-none"
            >
              {columnKey => {
                const currentCellType =
                  columnsMap.get(columnKey.toString()) ?? CUSTOM_CELL_TYPE.TEXT;

                let currentCellBadgeVariant;
                if (currentCellType === CUSTOM_CELL_TYPE.BADGE) {
                  currentCellBadgeVariant =
                    statusVariant[
                      removeWhiteSpaces(
                        getKeyValue(item, columnKey),
                        true
                      ).toUpperCase() as STATUS
                    ];
                }

                return (
                  <TableCell>
                    <CustomTableCell
                      type={currentCellType}
                      variant={currentCellBadgeVariant}
                      customActionMenu={customActionMenu}
                      onDelete={onDelete}
                      onView={onView}
                      onEdit={onEdit}
                      data={item}
                      TrashIcon={TrashIcon}
                      showActionDropdown={showActionDropdown}
                    >
                      {getKeyValue(item, columnKey)}
                    </CustomTableCell>
                  </TableCell>
                );
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>

      {showPagination && (
        <div className="mt-8">
          <CustomPagination
            totalPages={pages}
            currentPage={page}
            setCurrentPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
        </div>
      )}
    </>
  );
};

export default CustomTable;
