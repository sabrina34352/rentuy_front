import React from 'react';
import { SvgXml } from 'react-native-svg';
export default function Pfp() {
  const svgMarkup = `<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 2.16669C11.3989 2.17068 9.34422 2.78561 7.58634 3.93657C5.82847 5.08753 4.44323 6.72486 3.59937 8.6491C2.7555 10.5734 2.48942 12.7015 2.83354 14.7743C3.17766 16.847 4.11713 18.775 5.53751 20.3234C6.55197 21.423 7.7832 22.3006 9.15361 22.9008C10.524 23.5011 12.0039 23.811 13.5 23.811C14.9961 23.811 16.476 23.5011 17.8464 22.9008C19.2168 22.3006 20.4481 21.423 21.4625 20.3234C22.8829 18.775 23.8224 16.847 24.1665 14.7743C24.5106 12.7015 24.2445 10.5734 23.4007 8.6491C22.5568 6.72486 21.1716 5.08753 19.4137 3.93657C17.6558 2.78561 15.6012 2.17068 13.5 2.16669ZM13.5 21.6667C11.2558 21.6633 9.1005 20.7895 7.48751 19.2292C7.97723 18.037 8.8103 17.0173 9.88087 16.2997C10.9514 15.5821 12.2112 15.199 13.5 15.199C14.7888 15.199 16.0486 15.5821 17.1192 16.2997C18.1897 17.0173 19.0228 18.037 19.5125 19.2292C17.8995 20.7895 15.7442 21.6633 13.5 21.6667ZM11.3333 10.8334C11.3333 10.4048 11.4604 9.98593 11.6985 9.62962C11.9366 9.27331 12.275 8.9956 12.6709 8.83161C13.0668 8.66762 13.5024 8.62472 13.9227 8.70832C14.343 8.79192 14.7291 8.99828 15.0321 9.30129C15.3351 9.6043 15.5414 9.99037 15.625 10.4107C15.7086 10.831 15.6657 11.2666 15.5017 11.6625C15.3378 12.0584 15.0601 12.3968 14.7037 12.6349C14.3474 12.8729 13.9285 13 13.5 13C12.9254 13 12.3743 12.7717 11.9679 12.3654C11.5616 11.9591 11.3333 11.408 11.3333 10.8334ZM20.9858 17.3334C20.0179 15.6778 18.5282 14.39 16.75 13.6717C17.3016 13.0462 17.661 12.2749 17.7851 11.4502C17.9092 10.6256 17.7927 9.78264 17.4496 9.02256C17.1065 8.26248 16.5513 7.61754 15.8507 7.16515C15.1502 6.71276 14.334 6.47212 13.5 6.47212C12.6661 6.47212 11.8498 6.71276 11.1493 7.16515C10.4487 7.61754 9.89356 8.26248 9.55045 9.02256C9.20733 9.78264 9.09083 10.6256 9.21492 11.4502C9.33901 12.2749 9.69841 13.0462 10.25 13.6717C8.47183 14.39 6.9821 15.6778 6.01418 17.3334C5.24278 16.0194 4.83521 14.5237 4.83335 13C4.83335 10.7015 5.74644 8.49708 7.37175 6.87176C8.99707 5.24645 11.2015 4.33335 13.5 4.33335C15.7986 4.33335 18.003 5.24645 19.6283 6.87176C21.2536 8.49708 22.1667 10.7015 22.1667 13C22.1648 14.5237 21.7572 16.0194 20.9858 17.3334Z" fill="#959595"/>
</svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width='301px' />;

  return <SvgImage />;
}
