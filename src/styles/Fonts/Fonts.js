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
        font-family: 'Lato Sans KR Bold';
        src: url(${LatoBold}) format('woff');
    }
    @font-face {
        font-family: 'Lato Sans KR Light';
        src: url(${LatoLight}) format('woff');
    }
    @font-face {
        font-family: 'Lato Sans KR Medium';
        src: url(${LatoRegular}) format('woff');
    }
    @font-face {
        font-family: 'SpoqaHan Sans Neo Bold';
        src: url(${SpoqaHanSansNeoBold}) format('woff');
    }
    @font-face {
        font-family: 'SpoqaHan Sans Neo Light';
        src: url(${SpoqaHanSansNeoLight}) format('woff');
    }
    @font-face {
        font-family: 'SpoqaHan Sans Neo Medium';
        src: url(${SpoqaHanSansNeoMedium}) format('woff');
    }
    @font-face {
        font-family: 'SpoqaHan Sans Neo Regular';
        src: url(${SpoqaHanSansNeoRegular}) format('woff');
    }
`;
