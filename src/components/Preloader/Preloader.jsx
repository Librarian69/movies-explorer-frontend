import React from 'react'
import ContentLoader from 'react-content-loader'

export default function Preloader() {
    return (
        <ContentLoader
            speed={2}
            width={270}
            height={236}
            viewBox="0 0 270 236"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="3" y="3" rx="3" ry="3" width="270" height="151" />
            <rect x="3" y="155" rx="3" ry="3" width="270" height="63" />

        </ContentLoader>
    )
}
