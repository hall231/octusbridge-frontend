import * as React from 'react'
import { Observer } from 'mobx-react-lite'
import { useIntl } from 'react-intl'

import { TonscanAccountLink } from '@/components/common/TonscanAccountLink'
import { useBridge } from '@/modules/Bridge/providers'


export function TransitDetails(): JSX.Element {
    const intl = useIntl()
    const { summary } = useBridge()

    return (
        <Observer>
            {() => (
                <>
                    {(summary.isEvmToEvm && summary.everscaleAddress !== undefined) && (
                        <li key="everscale-address">
                            <div className="text-muted">
                                {intl.formatMessage({
                                    id: 'CROSSCHAIN_TRANSFER_SUMMARY_EVERSCALE_ADDRESS',
                                })}
                            </div>
                            <div className="text-truncate">
                                <TonscanAccountLink
                                    key="everscale-address"
                                    address={summary.everscaleAddress}
                                    copy
                                />
                            </div>
                        </li>
                    )}
                </>
            )}
        </Observer>
    )
}
