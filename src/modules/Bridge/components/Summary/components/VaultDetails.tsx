import * as React from 'react'
import { Observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'

import { formattedAmount } from '@/utils'
import { useSummary } from '@/modules/Bridge/stores'


export function VaultDetails(): JSX.Element {
    const intl = useIntl()
    const summary = useSummary()

    return (
        <Observer>
            {() => (
                <>
                    {((
                        summary.isEvmToEverscale
                        || summary.isEverscaleToEvm
                    ) && !summary.isEverscaleBasedToken && summary.vaultBalance !== undefined) && (
                        <li key="vault-balance">
                            <div className="text-muted">
                                {intl.formatMessage({
                                    id: 'CROSSCHAIN_TRANSFER_SUMMARY_VAULT_BALANCE',
                                }, {
                                    symbol: summary.token?.symbol || '',
                                })}
                            </div>
                            <div className="text-truncate">
                                {formattedAmount(
                                    summary.vaultBalance,
                                    summary.evmTokenDecimals,
                                    { target: 'token' },
                                )}
                            </div>
                        </li>
                    )}
                </>
            )}
        </Observer>
    )
}