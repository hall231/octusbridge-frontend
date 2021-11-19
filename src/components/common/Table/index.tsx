import * as React from 'react'
import classNames from 'classnames'
import { useIntl } from 'react-intl'

import { Row } from '@/components/common/Table/row'
import { Align, Cell } from '@/components/common/Table/cell'

import './index.scss'

type Col<O> = {
    name?: string;
    align?: Align;
    ascending?: O;
    descending?: O;
}

type Cell = string | React.ReactNode

type Row = {
    link?: string;
    cells: Cell[];
};

type Props<O> = {
    cols: Col<O>[];
    rows: Row[];
    order?: O;
    className?: string;
    onSort?: (order: O) => void;
}

export function Table<O>({
    cols,
    rows,
    order,
    className,
    onSort,
}: Props<O>): JSX.Element {
    const intl = useIntl()

    return (
        <div className={classNames('list table', className)}>
            <div className="list__header">
                {cols.map((col, index) => (
                    /* eslint-disable react/no-array-index-key */
                    <Cell<O>
                        key={index}
                        align={col.align}
                        ascending={col.ascending}
                        descending={col.descending}
                        order={order}
                        onSort={onSort}
                    >
                        {col.name}
                    </Cell>
                ))}
            </div>

            {rows.length === 0 ? (
                <div className="table__empty">
                    {intl.formatMessage({
                        id: 'EMPTY_LIST',
                    })}
                </div>
            ) : (
                rows.map((row, i) => (
                    /* eslint-disable react/no-array-index-key */
                    <Row key={i} link={row.link}>
                        {row.cells.map((cell, j) => (
                            <Cell align={cols[j].align} key={j}>
                                {cell}
                            </Cell>
                        ))}
                    </Row>
                ))
            )}
        </div>
    )
}
