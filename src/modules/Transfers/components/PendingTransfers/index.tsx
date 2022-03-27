import * as React from 'react'
import { useIntl } from 'react-intl'
import { observer } from 'mobx-react-lite'

import { Section, Title } from '@/components/common/Section'
import { Pagination } from '@/components/common/Pagination'
import { useTransfersContext } from '@/modules/Transfers/providers'
import { TransfersTable } from '@/modules/Transfers/components/TransfersTable'
import { usePagination, useTableOrder, useTextParam } from '@/hooks'
import { TransfersOrdering } from '@/modules/Transfers/types'
import { useTokensAssets } from '@/stores/TokensAssetsService'
import { error } from '@/utils'

function PendingTransfersInner(): JSX.Element {
    const intl = useIntl()
    const transfers = useTransfersContext()
    const tokensAssets = useTokensAssets()
    const pagination = usePagination(transfers.totalCount)
    const tableOrder = useTableOrder<TransfersOrdering>('createdatdescending')

    const [userAddress] = useTextParam('user')

    const fetchPending = React.useCallback(async () => {
        if (!tokensAssets.isReady) {
            return
        }
        try {
            await transfers.fetch({
                status: 'pending',
                userAddress,
                limit: pagination.limit,
                offset: pagination.offset,
                ordering: tableOrder.order,
            })
        }
        catch (e) {
            error(e)
        }
    }, [tokensAssets.isReady])

    React.useEffect(() => {
        fetchPending()
    }, [
        userAddress,
        pagination.limit,
        pagination.offset,
        tableOrder.order,
        tokensAssets.isReady,
    ])

    return (
        <>
            {transfers.totalCount !== undefined && transfers.totalCount > 0 && (
                <Section>
                    <Title>
                        {intl.formatMessage({
                            id: 'TRANSFERS_PENDING_TITLE',
                        })}
                    </Title>

                    <div className="card card--flat card--small">
                        <TransfersTable
                            loading={transfers.loading}
                            items={transfers.items}
                            order={tableOrder.order}
                            onSort={tableOrder.onSort}
                        />

                        {pagination.totalPages > 1 && (
                            <Pagination
                                page={pagination.page}
                                totalPages={pagination.totalPages}
                                totalCount={pagination.totalCount}
                                onSubmit={pagination.submit}
                            />
                        )}
                    </div>
                </Section>
            )}
        </>
    )
}

export const PendingTransfers = observer(PendingTransfersInner)
