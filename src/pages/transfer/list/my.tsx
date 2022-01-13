// @ts-nocheck

import * as React from 'react'
import { useIntl } from 'react-intl'
import { observer } from 'mobx-react-lite'

import { Transfers } from '@/modules/Transfers'
import { WalletConnector } from '@/modules/TonWalletConnector/Panel'
import { useTonWallet } from '@/stores/TonWalletService'

function PageInner(): JSX.Element {
    const intl = useIntl()
    const tonWallet = useTonWallet()

    return (
        <div className="container container--large">
            <WalletConnector
                message={intl.formatMessage({
                    id: 'WALLET_CONNECT_MSG',
                })}
            >
                {tonWallet.address && (
                    <Transfers />
                )}
            </WalletConnector>
        </div>
    )
}

const Page = observer(PageInner)

export default Page
