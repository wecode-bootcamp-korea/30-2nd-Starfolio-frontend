import { createGlobalStyle } from 'styled-components';
import AbelRegular from './AbelRegular.woff';
import LatoBold from './LatoBold.woff';
import LatoLight from './LatoLight.woff';
import LatoRegular from './LatoRegular.woff';
import SpoqaHanSansNeoBold from './SpoqaHanSansNeoBold.woff';
import SpoqaHanSansNeoLight from './SpoqaHanSansNeoLight.woff';
import SpoqaHanSansNeoMedium from './SpoqaHanSansNeoMedium.woff';
import SpoqaHanSansNeoRegular from './SpoqaHanSansNeoRegular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Abel Regular';
        src: url(${AbelRegular}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Bold';
        src: url(${LatoBold}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Light';
        src: url(${LatoLight}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Medium';
        src: url(${LatoRegular}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Regular';
        src: url(${SpoqaHanSansNeoBold}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Thin';
        src: url(${SpoqaHanSansNeoLight}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Thin';
        src: url(${SpoqaHanSansNeoMedium}) format('woff');
    }
    @font-face {
        font-family: 'Noto Sans KR Thin';
        src: url(${SpoqaHanSansNeoRegular}) format('woff');
    }
`;
