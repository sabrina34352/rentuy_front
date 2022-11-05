import React from 'react';
import { SvgXml } from 'react-native-svg';
export default function LikedSvg() {
  const svgMarkup = `<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6734 5.41664C21.525 4.26528 20.0027 3.56256 18.3816 3.43541C16.7604 3.30826 15.1472 3.76506 13.8334 4.72331C12.455 3.69808 10.7393 3.2332 9.03194 3.42227C7.32453 3.61134 5.75217 4.44032 4.6315 5.74228C3.51082 7.04423 2.92508 8.72246 2.99223 10.439C3.05937 12.1555 3.77441 13.7829 4.99336 14.9933L11.7209 21.7316C12.2842 22.2861 13.0429 22.5968 13.8334 22.5968C14.6238 22.5968 15.3825 22.2861 15.9459 21.7316L22.6734 14.9933C23.9382 13.7207 24.6482 11.9993 24.6482 10.205C24.6482 8.41068 23.9382 6.68927 22.6734 5.41664ZM21.1459 13.4983L14.4184 20.2258C14.3418 20.3031 14.2507 20.3645 14.1503 20.4063C14.0499 20.4482 13.9422 20.4698 13.8334 20.4698C13.7246 20.4698 13.6168 20.4482 13.5164 20.4063C13.416 20.3645 13.3249 20.3031 13.2484 20.2258L6.52086 13.4658C5.67126 12.5973 5.19552 11.4307 5.19552 10.2158C5.19552 9.00089 5.67126 7.83427 6.52086 6.96581C7.38661 6.11105 8.55424 5.63176 9.77086 5.63176C10.9875 5.63176 12.1551 6.11105 13.0209 6.96581C13.1216 7.06735 13.2414 7.14794 13.3734 7.20294C13.5054 7.25794 13.647 7.28626 13.79 7.28626C13.933 7.28626 14.0746 7.25794 14.2066 7.20294C14.3387 7.14794 14.4585 7.06735 14.5592 6.96581C15.4249 6.11105 16.5926 5.63176 17.8092 5.63176C19.0258 5.63176 20.1934 6.11105 21.0592 6.96581C21.9205 7.82289 22.4118 8.98318 22.428 10.1981C22.4442 11.4131 21.984 12.5861 21.1459 13.4658V13.4983Z" fill="#959595"/>
</svg>
`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width='301px' />;

  return <SvgImage />;
}