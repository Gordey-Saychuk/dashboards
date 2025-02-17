import React from 'react';
import { useTable } from 'react-table';
import { useTransition, animated } from 'react-spring';
import styles from './FullScreenTable.module.css'; 
import Pagination from '../Pagination/Pagination';

const FullScreenTable = ({ rowData, columnDefs }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns: columnDefs,
    data: rowData,
  });

  const transitions = useTransition(rows, {
    keys: (row) => row.id,
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
  });

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableContainer}>
        {/* Обычная таблица для всех экранов с горизонтальной прокруткой на мобильных */}
        <table {...getTableProps()} className={styles.table}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {transitions((style, row) => {
              prepareRow(row);
              return (
                <animated.tr style={style} {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  ))}
                </animated.tr>
              );
            })}
          </tbody>
        </table>
      
      </div>
    </div>
  );
};

export default FullScreenTable;
