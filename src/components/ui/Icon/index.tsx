import { memo } from 'react';
import style from './Icon.module.css';

type IconProps = {
  iconType: string;
  onClick?: () => void;
  isActive?: boolean;
};

const renderIcon = (iconType: string, isActive: boolean) => {
  const fillColor = isActive ? '#3434ff' : '#000000'; // 활성화된 경우 색상 변경
  switch (iconType) {
    case 'logo':
      return (
        <svg
          className={`${style.icon} ${style.logo}`}
          xmlns='http://www.w3.org/2000/svg'
          width='54'
          height='22'
          viewBox='0 0 54 22'
          fill={fillColor}
        >
          <g clip-path='url(#clip0_1_6396)'>
            <path
              d='M4.10055 8.85559H0V19.1298H2.16824V10.6252H3.71484C5.0068 10.6106 5.63218 11.309 5.6172 12.3364C5.63218 13.3528 5.0068 14.0622 3.71484 14.0768H2.87975V15.7879H4.07434C6.48225 15.7879 7.87906 14.3656 7.87906 12.3364C7.87906 10.3071 6.51221 8.86656 4.1043 8.85559H4.10055Z'
              fill='#3434FF'
            />
            <path
              d='M19.4915 12.7752H19.4016V11.4406H17.3232V19.1298H19.4615V14.7496C19.4765 13.8062 20.1918 13.1518 21.1542 13.1518C21.465 13.1518 21.8844 13.1956 22.0754 13.2688V11.3821C21.8807 11.3529 21.6148 11.3236 21.3901 11.3236C20.4988 11.3236 19.7686 11.8172 19.4877 12.7752H19.4915Z'
              fill='#3434FF'
            />
            <path
              d='M34.6135 17.532C34.1829 17.532 33.8721 17.3711 33.8721 16.7788V13.0055H35.3587V11.4369H33.8721V9.57953H31.7338V11.4369H30.6328V13.0055H31.7338V17.0384C31.7188 18.5484 32.7748 19.2285 34.3477 19.2431C34.8532 19.2285 35.2389 19.1846 35.4786 19.1554V17.4991C35.2127 17.5137 34.8382 17.543 34.6173 17.5283L34.6135 17.532Z'
              fill='#3434FF'
            />
            <path
              d='M38.8675 12.7752H38.7776V11.4406H36.6992V19.1298H38.8375V14.7496C38.8525 13.8062 39.5677 13.1518 40.5301 13.1518C40.841 13.1518 41.2604 13.1956 41.4514 13.2688V11.3821C41.2566 11.3529 40.9908 11.3236 40.7661 11.3236C39.8748 11.3236 39.1446 11.8172 38.8637 12.7752H38.8675Z'
              fill='#3434FF'
            />
            <path
              d='M44.6344 11.437H42.4961V19.1262H44.6344V11.437Z'
              fill='#3434FF'
            />
            <path
              d='M50.7872 11.3236C49.4653 11.3382 48.8399 12.1061 48.559 12.7167H48.4392V11.4406H46.3271V22.0037H48.4654V17.9123H48.5553C48.8511 18.5375 49.5065 19.2615 50.7835 19.2468C52.5959 19.2615 53.9927 17.8684 53.9927 15.3017C53.9927 12.7349 52.536 11.3419 50.7835 11.3273L50.7872 11.3236ZM50.1057 17.5905C49.0496 17.5759 48.443 16.6618 48.443 15.2688C48.443 13.8757 49.0384 13.0055 50.1057 13.0055C51.1729 13.0055 51.7983 13.9342 51.7983 15.2688C51.7983 16.6033 51.2029 17.5759 50.1057 17.5905Z'
              fill='#3434FF'
            />
            <path
              d='M12.3537 11.3236C10.2566 11.3382 9.0545 12.3839 8.93467 13.7331H10.9868C11.0917 13.1956 11.5523 12.8775 12.2938 12.8629C13.0802 12.8775 13.5408 13.2395 13.5408 13.9086V13.9306V16.1536V16.373C13.5557 17.1847 12.8742 17.8245 11.8781 17.8245C11.2078 17.8245 10.7172 17.5064 10.7172 16.9251C10.7172 16.3437 11.1928 15.9817 11.9342 15.9086C12.129 15.894 12.4885 15.8721 12.8293 15.8574V14.5485L11.5785 14.6033C10.0768 14.7057 8.66504 15.2578 8.66504 16.9836C8.66504 18.5083 9.78099 19.2761 11.2789 19.2761C12.4548 19.2761 13.1962 18.7825 13.567 18.0585H13.6569V19.1335H15.679V13.9379C15.679 12.0951 14.0575 11.3419 12.3499 11.3273L12.3537 11.3236Z'
              fill='#3434FF'
            />
            <path
              d='M26.2287 11.3236C24.1316 11.3382 22.9295 12.3839 22.8097 13.7331H24.8618C24.9667 13.1956 25.4273 12.8775 26.1687 12.8629C26.9552 12.8775 27.4158 13.2395 27.4158 13.9086V13.9306V16.1536V16.373C27.4307 17.1847 26.7492 17.8245 25.7531 17.8245C25.0828 17.8245 24.5922 17.5064 24.5922 16.9251C24.5922 16.3437 25.0678 15.9817 25.8092 15.9086C26.004 15.894 26.3635 15.8721 26.7043 15.8574V14.5485L25.4535 14.6033C23.9518 14.7057 22.54 15.2578 22.54 16.9836C22.54 18.5083 23.656 19.2761 25.1577 19.2761C26.3298 19.2761 27.075 18.7825 27.4457 18.0585H27.5356V19.1335H29.5578V13.9379C29.5578 12.0951 27.9363 11.3419 26.2287 11.3273V11.3236Z'
              fill='#3434FF'
            />
            <path
              d='M10.1334 7.22486C9.59036 7.95978 8.97247 9.14442 10.0435 9.70384C11.1145 10.2633 12.5525 10 13.5936 9.51737C15.4285 8.6691 16.9189 7.03473 18.6528 5.95612C20.5027 4.80804 22.4987 3.87203 24.6108 3.27605C31.3214 1.3894 38.6313 3.39671 43.8628 7.78428C44.1212 8 44.3795 8.26691 44.6454 8.44607C40.6722 2.9287 33.4709 -0.0219385 26.6891 -6.22749e-07C20.7461 0.0182809 13.7209 2.36197 10.1334 7.22486Z'
              fill='#3434FF'
            />
            <path
              d='M44.6795 9.06032C44.6795 9.06032 41.7061 6.27787 38.2197 4.7605C38.2197 4.7605 39.5941 7.40401 40.9834 8.84094C42.2941 10.1974 43.0468 10.2925 43.9717 10.2742C44.2152 10.2706 44.4473 10.2486 44.6421 10.1974C45.4921 9.98536 44.9679 9.31991 44.6795 9.06032Z'
              fill='#3434FF'
            />
          </g>
          <defs>
            <clipPath id='clip0_1_6396'>
              <rect width='54' height='22' fill='white' />
            </clipPath>
          </defs>
        </svg>
      );
    case 'bell':
      return (
        <svg
          className={style.icon}
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='20'
          viewBox='0 0 18 20'
          fill={fillColor}
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M17.25 14.3621C16.875 14.3621 16.62 14.2421 16.29 13.9421C16.005 13.6721 15.855 13.3271 15.855 12.9821V7.32714C15.855 5.60214 15.12 3.95214 13.83 2.75214C12.54 1.55214 10.8 0.877136 9 0.877136C7.2 0.877136 5.46 1.55214 4.17 2.75214C2.88 3.95214 2.145 5.60214 2.145 7.32714V12.9821C2.145 13.3271 1.995 13.6871 1.71 13.9421C1.38 14.2421 1.125 14.3621 0.75 14.3621C0.33 14.3621 0 14.6921 0 15.1121C0 15.5321 0.33 15.8621 0.75 15.8621H17.25C17.67 15.8621 18 15.5321 18 15.1121C18 14.6921 17.67 14.3621 17.25 14.3621Z'
            fill='#9DA0A8'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M7.29 17.3621C6.585 17.3621 6 17.8721 6 18.4871C6 19.1021 6.57 19.6121 7.29 19.6121H10.725C11.43 19.6121 12.015 19.1021 12.015 18.4871C12.015 17.8721 11.445 17.3621 10.725 17.3621H7.29Z'
            fill='#9DA0A8'
          />
        </svg>
      );
    case 'home':
      return (
        <svg
          className={style.icon}
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill={fillColor}
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M3.65909 10.772C3.39817 11.0152 3.25 11.3559 3.25 11.7125V19.0714C3.25 20.1365 4.11345 21 5.17857 21H10.9643V17.1429C10.9643 16.4328 11.5399 15.8571 12.25 15.8571C12.9601 15.8571 13.5357 16.4328 13.5357 17.1429V21H19.3214C20.3865 21 21.25 20.1365 21.25 19.0714V11.7125C21.25 11.3559 21.1019 11.0152 20.8409 10.772L12.6684 3.15476C12.4276 2.94841 12.0724 2.94841 11.8316 3.15476L3.65909 10.772Z'
            fill='#9DA0A8'
          />
        </svg>
      );
    case 'tour-course':
      return (
        <svg
          className={style.icon}
          xmlns='http://www.w3.org/2000/svg'
          width='19'
          height='20'
          viewBox='0 0 19 20'
          fill={fillColor}
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M9.74062 0.977722C13.1194 0.977722 15.935 3.79333 15.935 7.17215C15.935 8.2749 15.556 9.36243 15.0262 10.3478C14.4945 11.337 13.7905 12.2605 13.0911 13.0468C12.3904 13.8347 11.6823 14.498 11.1307 14.9666C10.8552 15.2007 10.614 15.3901 10.4281 15.5243C10.3362 15.5906 10.2502 15.6488 10.1759 15.6934C10.1398 15.7151 10.0958 15.7401 10.0489 15.7617C10.0256 15.7724 9.99207 15.7869 9.95205 15.7996C9.92057 15.8097 9.8419 15.8333 9.74062 15.8333C9.63844 15.8333 9.55915 15.8093 9.52757 15.7991C9.48735 15.7861 9.45368 15.7715 9.43033 15.7607C9.3834 15.7388 9.33932 15.7136 9.30319 15.6917C9.22895 15.6468 9.14296 15.588 9.05119 15.5212C8.86538 15.3861 8.62431 15.1954 8.34891 14.9598C7.79755 14.4883 7.08986 13.8216 6.38947 13.0316C5.69048 12.2433 4.98686 11.3188 4.45523 10.332C3.92588 9.34934 3.54619 8.26625 3.54619 7.17215C3.54619 3.79333 6.3618 0.977722 9.74062 0.977722ZM9.74062 9.02214C8.71888 9.02214 7.89062 8.19388 7.89062 7.17215C7.89062 6.15043 8.71888 5.32215 9.74062 5.32215C10.7623 5.32215 11.5906 6.15043 11.5906 7.17215C11.5906 8.19388 10.7623 9.02214 9.74062 9.02214ZM13.7351 14.0689C13.9729 13.8016 14.2108 13.5215 14.4443 13.2306H14.9878H16.1754C16.4332 13.2306 16.6662 13.3842 16.7678 13.6211L18.6981 18.1255C18.7834 18.3246 18.7631 18.5533 18.6438 18.7341C18.5246 18.9149 18.3224 19.0237 18.1059 19.0237H1.37539C1.15877 19.0237 0.956641 18.9149 0.837393 18.7341C0.718145 18.5533 0.697733 18.3246 0.783065 18.1255L2.71349 13.6211C2.81504 13.3842 3.04803 13.2306 3.30583 13.2306H4.4933H5.05267C5.28089 13.5147 5.51321 13.7886 5.74532 14.0504C6.59795 15.0121 7.45962 15.824 8.13044 16.3975C8.46556 16.6842 8.7577 16.9153 8.98144 17.0779C9.09215 17.1585 9.19382 17.2278 9.27986 17.2799C9.32189 17.3054 9.37091 17.3332 9.42173 17.357C9.44704 17.3688 9.4824 17.384 9.52404 17.3974C9.55705 17.4081 9.6375 17.4324 9.74054 17.4324C9.84271 17.4324 9.92254 17.4085 9.95544 17.3981C9.99689 17.3848 10.0321 17.3697 10.0574 17.358C10.1081 17.3345 10.1571 17.3069 10.1991 17.2817C10.2852 17.23 10.3869 17.1612 10.4977 17.0813C10.7215 16.9198 11.0138 16.6904 11.3491 16.4055C12.0201 15.8354 12.8821 15.0278 13.7351 14.0689Z'
            fill='#7F828C'
          />
        </svg>
      );
    case 'community':
      return (
        <svg
          className={style.icon}
          xmlns='http://www.w3.org/2000/svg'
          width='19'
          height='18'
          viewBox='0 0 24 24'
          fill={fillColor}
        >
          <g clip-path='url(#clip0_41_1543)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M3.4643 0C2.95282 0 2.46226 0.203188 2.10059 0.564866C1.73892 0.926542 1.53573 1.41709 1.53573 1.92857V13.3957L0.283003 17.1539C0.208806 17.3764 0.261772 17.6217 0.421192 17.7939C0.580611 17.9661 0.821161 18.0377 1.04879 17.9808L6.11486 16.7143H16.3214C16.8329 16.7143 17.3235 16.5111 17.6852 16.1495C18.0469 15.7878 18.25 15.2972 18.25 14.7857V1.92857C18.25 1.41708 18.0469 0.926542 17.6852 0.564866C17.3235 0.203188 16.8329 0 16.3214 0H3.4643ZM5.23214 6.23003C5.23214 5.78623 5.59191 5.42646 6.03571 5.42646H13.75C14.1938 5.42646 14.5536 5.78623 14.5536 6.23003C14.5536 6.67383 14.1938 7.0336 13.75 7.0336H6.03571C5.59191 7.0336 5.23214 6.67383 5.23214 6.23003ZM6.03571 9.68068C5.59191 9.68068 5.23214 10.0405 5.23214 10.4843C5.23214 10.9281 5.59191 11.2878 6.03571 11.2878H11.1786C11.6224 11.2878 11.9821 10.9281 11.9821 10.4843C11.9821 10.0405 11.6224 9.68068 11.1786 9.68068H6.03571Z'
              fill='#9DA0A8'
            />
          </g>
          <defs>
            <clipPath id='clip0_41_1543'>
              <rect
                width='18'
                height='18'
                fill='white'
                transform='translate(0.25)'
              />
            </clipPath>
          </defs>
        </svg>
      );
    case 'mypage':
      return (
        <svg
          className={style.icon}
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill={fillColor}
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M12.7497 13.2857C15.59 13.2857 17.8925 10.9832 17.8925 8.14287C17.8925 5.30254 15.59 3 12.7497 3C9.90935 3 7.6068 5.30254 7.6068 8.14287C7.6068 10.9832 9.90935 13.2857 12.7497 13.2857ZM12.7499 14.5715C8.97653 14.5715 5.74555 16.8936 4.408 20.1867C4.24617 20.5851 4.55456 21 4.9846 21H20.5151C20.9451 21 21.2536 20.5851 21.0917 20.1867C19.7542 16.8936 16.5232 14.5715 12.7499 14.5715Z'
            fill='#7F828C'
          />
        </svg>
      );
    default:
      return null;
  }
};

const Icon = memo(function Icon({
  iconType,
  onClick,
  isActive = false,
}: IconProps) {
  return (
    <div className={style.iconContainer} onClick={onClick}>
      {renderIcon(iconType, isActive)}
    </div>
  );
});

export default Icon;
