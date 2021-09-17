import * as React from 'react'

function getSize(height: number, width: number, ratio: number = 1) {
    return {
        height: height * ratio,
        width: width * ratio,
    }
}

export const defaultProps = {
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
}

/* eslint-disable */
const library: Record<string, React.ElementType> = {
    tonWalletIcon: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 14 14" {...getSize(14, 14, ratio)}><path d="M0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M4.26013 3.82371C4.35008 3.71128 4.48625 3.64583 4.63023 3.64583H9.36981C9.51379 3.64583 9.64997 3.71128 9.73991 3.82371L11.6357 6.1935C11.7866 6.38208 11.7716 6.65395 11.6008 6.82472L7.33516 11.0903C7.15007 11.2754 6.84998 11.2754 6.66488 11.0903L2.39926 6.82472C2.22849 6.65395 2.21343 6.38208 2.3643 6.1935L4.26013 3.82371ZM4.49224 5.05098L4.8781 6.01562H3.72053L4.49224 5.05098ZM3.87864 6.96354L5.91549 9.00039L5.23654 6.96354H3.87864ZM6.23573 6.96354L7.00002 9.25641L7.76432 6.96354H6.23573ZM8.76351 6.96354L8.08456 9.00039L10.1214 6.96354H8.76351ZM10.2795 6.01562H9.12195L9.50781 5.05098L10.2795 6.01562ZM8.66976 4.59374H7.83712L8.33671 5.42638L8.66976 4.59374ZM7.5848 6.01562L7.00002 5.041L6.41525 6.01562H7.5848ZM5.66334 5.42638L6.16292 4.59374H5.33028L5.66334 5.42638Z" fill="#33A9FB"/><path d="M5.57812 6.48958H2.73438L7 10.7552L5.57812 6.48958Z" fill="#51C0FB"/><path d="M4.63021 4.1198L2.73438 6.48959H5.57812L4.63021 4.1198Z" fill="#79D0FE"/><path d="M8.42188 6.48958H11.2656L7 10.7552L8.42188 6.48958Z" fill="#33A9FB"/><path d="M8.42188 6.48958H5.57812L7 10.7552L8.42188 6.48958Z" fill="#78D9FF"/><path d="M7 4.1198L5.57812 6.48959H8.42188L7 4.1198Z" fill="#51AEF4"/><path d="M9.36979 4.1198L8.42188 6.48959H11.2656L9.36979 4.1198Z" fill="#79C6FE"/><path d="M9.36979 4.1198H7L8.42187 6.48959L9.36979 4.1198Z" fill="#6BBCF9"/><path d="M6.99998 4.1198H4.63019L5.5781 6.48959L6.99998 4.1198Z" fill="#C4E9FF"/></svg>,
    ethWalletIcon: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 16 16" {...getSize(16, 16, ratio)}><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#627EEA"/><path d="M8 2V6.435L11.7485 8.11L8 2Z" fill="white" fillOpacity="0.602"/><path d="M8.249 2L4.5 8.11L8.249 6.435V2Z" fill="white"/><path d="M8 11.176V14.1895L11.751 9L8 11.176Z" fill="white" fillOpacity="0.602"/><path d="M8.249 14.1895V11.1755L4.5 9L8.249 14.1895Z" fill="white"/><path d="M8 10.3505L11.7485 8.174L8 6.5V10.3505Z" fill="white" fillOpacity="0.2"/><path d="M4.5 8.174L8.249 10.3505V6.5L4.5 8.174Z" fill="white" fillOpacity="0.602"/></svg>,

    arrowDown: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path d="M10 12.5L5 7.5H15L10 12.5Z"/></svg>,
    externalLink: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 512 512" {...getSize(20, 20, ratio)}><path d="M511.5,0.9v255.5h-34.4V63.2L159.4,381l-24.2-24.2L457.6,34.4H256V0h255.5V0.9z M374.9,477.6H34.8V137.5 h223.9v-34.4H0.5V512h408.9V249h-34.4V477.6z" fill="currentColor" strokeWidth={1.6}/></svg>,
    close: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 40 40" {...getSize(40, 40, ratio)}><path d="M14 14L20 20M20 20L14 26M20 20L26 14M20 20L26 26" stroke="currentColor" strokeWidth={2}/></svg>,
    config: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 24 24" {...getSize(24, 24, ratio)}><path d="M17.0458 20.2491C17.8104 19.764 18.503 19.1724 19.1031 18.4941L21.2666 19.7627L23.2365 16.298L21.0774 15.0321C21.3519 14.181 21.5134 13.2783 21.5436 12.3426L24 11.9028L23.3156 7.9629L20.8597 8.40269C20.5203 7.54852 20.0649 6.75427 19.5127 6.04049L21.1181 4.09798L18.0999 1.52657L16.4959 3.46742C15.7124 3.04112 14.864 2.72245 13.9698 2.53122V0L10.03 0V2.53122C9.13573 2.72245 8.2873 3.04112 7.50375 3.46742L5.89979 1.52657L2.88162 4.09807L4.48685 6.04058C3.93473 6.75436 3.47938 7.54871 3.13997 8.40279L0.684057 7.96299L0 11.9029L2.45601 12.3427C2.48628 13.2785 2.64785 14.181 2.92238 15.0324L0.763035 16.2982L2.73306 19.7628L4.89665 18.4946C5.49658 19.1725 6.18913 19.7643 6.95388 20.2494L6.09985 22.6317L9.80225 23.9998L10.6551 21.6207C11.0946 21.6839 11.5435 21.7174 11.9999 21.7174C12.4563 21.7174 12.9053 21.684 13.3448 21.6207L14.1976 24L17.8998 22.6315L17.0458 20.2491ZM11.9997 18C8.6861 17.9999 6 15.3136 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3138 15.3135 18.0002 11.9997 18Z"/></svg>,
    info: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM10.75 9V14H9.25V9H10.75ZM10.75 7V5.5H9.25V7H10.75Z"/></svg>,
    link: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fill="none" stroke="currentColor" strokeWidth={1.1} d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="currentColor" strokeWidth={1.1} d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="currentColor" strokeWidth={1.1} d="M7.925,11.875 L11.925,7.975"/></svg>,
    loader: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 22 22" {...getSize(22, 22, ratio)}><path d="M11 22C17.0959 22 22 17.0959 22 11C22 7.12134 20.0146 3.72514 17 1.76773L16 3.45543C18.4345 5.04268 20 7.78975 20 11C20 16.0799 16.0799 20 11 20C5.92011 20 2 16.0799 2 11C2 5.92011 5.92011 2 11 2V0C4.90413 0 0 4.90413 0 11C0 17.0959 4.90413 22 11 22Z" fill="currentColor"/></svg>,
    logout: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 32 32" {...getSize(32, 32, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M18.4753 18.2903H19.295H20.1146V21.5162V23.9355H15.1966L15.1967 27L13.0492 26.2799L8.11633 24.662C7.4459 24.433 7 24.2782 7 24.2782V7H8.63938C8.66196 7 8.68378 7.00459 8.70558 7.00919C8.72248 7.01275 8.73936 7.0163 8.75659 7.01772C8.76929 7.01605 8.78125 7.01267 8.79315 7.00931C8.80968 7.00464 8.8261 7 8.84424 7H17.6556H20.1146V11.8387H19.295H18.4753L18.4754 8.61267L17.6556 8.61281H13.8376H11.918L15.1966 9.41936V22.3226H18.4753V21.5162V18.2903ZM23.153 11.2686L27 15.0644C27 15.0644 26.7522 15.3194 26.4318 15.6346L23.153 18.8605L21.7541 20.2257L21.7539 15.8709H17.6556V15.0645V14.2581H21.7539L21.7541 9.90301L23.153 11.2686Z"/></svg>,
    plus: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 36 36" {...getSize(36, 36, ratio)}><path d="M18 27V9" stroke="currentColor" strokeWidth={2}/><path d="M9 18L27 18" stroke="currentColor" strokeWidth={2}/></svg>,
    pull: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 22 21" {...getSize(21, 22, ratio)}><path d="M11 0V13.3333M11 13.3333L16 8.33333M11 13.3333L6 8.33333" stroke="currentColor" strokeWidth={2}/><path d="M1.83334 12.5V19.1667H20.1667V12.5" stroke="currentColor" strokeWidth={2}/></svg>,
    push: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 22 21" {...getSize(21, 22, ratio)}><path d="M11 14.334L11 2.00065M11 2.00065L6 7.00065M11 2.00065L16 7.00065" stroke="currentColor" strokeWidth={2}/><path d="M1.83334 12.5V19.1667H20.1667V12.5" stroke="currentColor" strokeWidth={2}/></svg>,
    remove: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 14 14" {...getSize(14, 14, ratio)}><path d="M1 1L7 7M7 7L1 13M7 7L13 1M7 7L13 13" stroke="currentColor" strokeWidth={2}/></svg>,
    reverse: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 36 36" {...getSize(36, 36, ratio)}><path d="M16 24L12 28M12 28L8 24M12 28C12 28 12 20.6863 12 16C12 13.6667 16 12 16 12" strokeWidth={1.4}/><path d="M20 12L24 8M24 8L28 12M24 8C24 8 24 15.3137 24 20C24 22.3333 20 24 20 24" strokeWidth={1.4}/></svg>,
    reverseHorizontal: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 24 24" {...getSize(24, 24, ratio)}><path d="M15.6001 13.2002L18.0001 15.6002M18.0001 15.6002L15.6001 18.0002M18.0001 15.6002C18.0001 15.6002 13.6119 15.6002 10.8001 15.6002C9.40015 15.6002 8.40015 13.2002 8.40015 13.2002" strokeWidth={1.4}/><path d="M8.39985 10.7998L5.99985 8.3998M5.99985 8.3998L8.39985 5.9998M5.99985 8.3998C5.99985 8.3998 10.3881 8.3998 13.1999 8.3998C14.5999 8.3998 15.5999 10.7998 15.5999 10.7998" strokeWidth={1.4}/></svg>,
    star: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 24 24" {...getSize(24, 24, ratio)}><path d="M14.6258 8.82306L14.7857 9.24051L15.2317 9.27097L22.2779 9.7522L16.8465 14.5363L16.5284 14.8165L16.6294 15.2283L18.3978 22.4392L12.3794 18.4874L11.9952 18.2351L11.611 18.4874L5.59272 22.4392L7.36114 15.2283L7.46204 14.8168L7.14433 14.5366L1.72029 9.7522L8.75876 9.27096L9.20473 9.24047L9.36467 8.82306L11.9952 1.95785L14.6258 8.82306Z" stroke="currentColor" strokeWidth={1.4}/></svg>,
    copy: ({ ratio, ...props }) => <svg {...defaultProps} {...props} viewBox="0 0 20 20" {...getSize(20, 20, ratio)}><path fillRule="evenodd" clipRule="evenodd" d="M8.33335 1.6665H16.6667C17.6269 1.6665 18.3334 2.37293 18.3334 3.33317V11.6665C18.3334 12.6267 17.6269 13.3332 16.6667 13.3332H13.3334V16.6665C13.3334 17.6267 12.6269 18.3332 11.6667 18.3332H3.33335C2.37312 18.3332 1.66669 17.6267 1.66669 16.6665V8.33317C1.66669 7.37293 2.37312 6.6665 3.33335 6.6665H6.66669V3.33317C6.66669 2.37293 7.37312 1.6665 8.33335 1.6665ZM6.66669 8.33317H3.33335V16.6665H11.6667V13.3332H8.33335C7.37312 13.3332 6.66669 12.6267 6.66669 11.6665V8.33317ZM8.33335 3.33317V11.6665H16.6667V3.33317H8.33335Z" fill="#C5E4F3" fillOpacity="0.56"/></svg>,

}


export default library
