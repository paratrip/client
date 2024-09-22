import { memo } from 'react';
import style from './Icon.module.css';

type IconProps = {
  iconType: string;
  onClick?: () => void;
  isActive?: boolean;
};

const renderIcon = (iconType: string, isActive: boolean) => {
  const fillColor = isActive ? '#3434ff' : '#9DA0A8'; // 활성화된 경우 색상 변경
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
          <g clipRule='url(#clip0_1_6396)'>
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
            fillRule='evenodd'
            clipRule='evenodd'
            d='M17.25 14.3621C16.875 14.3621 16.62 14.2421 16.29 13.9421C16.005 13.6721 15.855 13.3271 15.855 12.9821V7.32714C15.855 5.60214 15.12 3.95214 13.83 2.75214C12.54 1.55214 10.8 0.877136 9 0.877136C7.2 0.877136 5.46 1.55214 4.17 2.75214C2.88 3.95214 2.145 5.60214 2.145 7.32714V12.9821C2.145 13.3271 1.995 13.6871 1.71 13.9421C1.38 14.2421 1.125 14.3621 0.75 14.3621C0.33 14.3621 0 14.6921 0 15.1121C0 15.5321 0.33 15.8621 0.75 15.8621H17.25C17.67 15.8621 18 15.5321 18 15.1121C18 14.6921 17.67 14.3621 17.25 14.3621Z'
            fill='#9DA0A8'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
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
            fillRule='evenodd'
            clipRule='evenodd'
            d='M3.65909 10.772C3.39817 11.0152 3.25 11.3559 3.25 11.7125V19.0714C3.25 20.1365 4.11345 21 5.17857 21H10.9643V17.1429C10.9643 16.4328 11.5399 15.8571 12.25 15.8571C12.9601 15.8571 13.5357 16.4328 13.5357 17.1429V21H19.3214C20.3865 21 21.25 20.1365 21.25 19.0714V11.7125C21.25 11.3559 21.1019 11.0152 20.8409 10.772L12.6684 3.15476C12.4276 2.94841 12.0724 2.94841 11.8316 3.15476L3.65909 10.772Z'
            fill={fillColor}
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
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.74062 0.977722C13.1194 0.977722 15.935 3.79333 15.935 7.17215C15.935 8.2749 15.556 9.36243 15.0262 10.3478C14.4945 11.337 13.7905 12.2605 13.0911 13.0468C12.3904 13.8347 11.6823 14.498 11.1307 14.9666C10.8552 15.2007 10.614 15.3901 10.4281 15.5243C10.3362 15.5906 10.2502 15.6488 10.1759 15.6934C10.1398 15.7151 10.0958 15.7401 10.0489 15.7617C10.0256 15.7724 9.99207 15.7869 9.95205 15.7996C9.92057 15.8097 9.8419 15.8333 9.74062 15.8333C9.63844 15.8333 9.55915 15.8093 9.52757 15.7991C9.48735 15.7861 9.45368 15.7715 9.43033 15.7607C9.3834 15.7388 9.33932 15.7136 9.30319 15.6917C9.22895 15.6468 9.14296 15.588 9.05119 15.5212C8.86538 15.3861 8.62431 15.1954 8.34891 14.9598C7.79755 14.4883 7.08986 13.8216 6.38947 13.0316C5.69048 12.2433 4.98686 11.3188 4.45523 10.332C3.92588 9.34934 3.54619 8.26625 3.54619 7.17215C3.54619 3.79333 6.3618 0.977722 9.74062 0.977722ZM9.74062 9.02214C8.71888 9.02214 7.89062 8.19388 7.89062 7.17215C7.89062 6.15043 8.71888 5.32215 9.74062 5.32215C10.7623 5.32215 11.5906 6.15043 11.5906 7.17215C11.5906 8.19388 10.7623 9.02214 9.74062 9.02214ZM13.7351 14.0689C13.9729 13.8016 14.2108 13.5215 14.4443 13.2306H14.9878H16.1754C16.4332 13.2306 16.6662 13.3842 16.7678 13.6211L18.6981 18.1255C18.7834 18.3246 18.7631 18.5533 18.6438 18.7341C18.5246 18.9149 18.3224 19.0237 18.1059 19.0237H1.37539C1.15877 19.0237 0.956641 18.9149 0.837393 18.7341C0.718145 18.5533 0.697733 18.3246 0.783065 18.1255L2.71349 13.6211C2.81504 13.3842 3.04803 13.2306 3.30583 13.2306H4.4933H5.05267C5.28089 13.5147 5.51321 13.7886 5.74532 14.0504C6.59795 15.0121 7.45962 15.824 8.13044 16.3975C8.46556 16.6842 8.7577 16.9153 8.98144 17.0779C9.09215 17.1585 9.19382 17.2278 9.27986 17.2799C9.32189 17.3054 9.37091 17.3332 9.42173 17.357C9.44704 17.3688 9.4824 17.384 9.52404 17.3974C9.55705 17.4081 9.6375 17.4324 9.74054 17.4324C9.84271 17.4324 9.92254 17.4085 9.95544 17.3981C9.99689 17.3848 10.0321 17.3697 10.0574 17.358C10.1081 17.3345 10.1571 17.3069 10.1991 17.2817C10.2852 17.23 10.3869 17.1612 10.4977 17.0813C10.7215 16.9198 11.0138 16.6904 11.3491 16.4055C12.0201 15.8354 12.8821 15.0278 13.7351 14.0689Z'
            fill={fillColor}
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
          <g clipRule='url(#clip0_41_1543)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M3.4643 0C2.95282 0 2.46226 0.203188 2.10059 0.564866C1.73892 0.926542 1.53573 1.41709 1.53573 1.92857V13.3957L0.283003 17.1539C0.208806 17.3764 0.261772 17.6217 0.421192 17.7939C0.580611 17.9661 0.821161 18.0377 1.04879 17.9808L6.11486 16.7143H16.3214C16.8329 16.7143 17.3235 16.5111 17.6852 16.1495C18.0469 15.7878 18.25 15.2972 18.25 14.7857V1.92857C18.25 1.41708 18.0469 0.926542 17.6852 0.564866C17.3235 0.203188 16.8329 0 16.3214 0H3.4643ZM5.23214 6.23003C5.23214 5.78623 5.59191 5.42646 6.03571 5.42646H13.75C14.1938 5.42646 14.5536 5.78623 14.5536 6.23003C14.5536 6.67383 14.1938 7.0336 13.75 7.0336H6.03571C5.59191 7.0336 5.23214 6.67383 5.23214 6.23003ZM6.03571 9.68068C5.59191 9.68068 5.23214 10.0405 5.23214 10.4843C5.23214 10.9281 5.59191 11.2878 6.03571 11.2878H11.1786C11.6224 11.2878 11.9821 10.9281 11.9821 10.4843C11.9821 10.0405 11.6224 9.68068 11.1786 9.68068H6.03571Z'
              fill={fillColor}
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
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.7497 13.2857C15.59 13.2857 17.8925 10.9832 17.8925 8.14287C17.8925 5.30254 15.59 3 12.7497 3C9.90935 3 7.6068 5.30254 7.6068 8.14287C7.6068 10.9832 9.90935 13.2857 12.7497 13.2857ZM12.7499 14.5715C8.97653 14.5715 5.74555 16.8936 4.408 20.1867C4.24617 20.5851 4.55456 21 4.9846 21H20.5151C20.9451 21 21.2536 20.5851 21.0917 20.1867C19.7542 16.8936 16.5232 14.5715 12.7499 14.5715Z'
            fill={fillColor}
          />
        </svg>
      );
    case 'search':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <g clipPath='url(#clip0_20_1891)'>
            <path
              d='M1 8.99994C1 13.4182 4.58172 16.9999 9 16.9999C13.4183 16.9999 17 13.4182 17 8.99994C17 4.58166 13.4183 0.999939 9 0.999939C4.58172 0.999938 1 4.58166 1 8.99994Z'
              stroke='#7F828C'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M19 19.0001L15 15'
              stroke='#7F828C'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_20_1891'>
              <rect
                width='20'
                height='20'
                fill='white'
                transform='translate(20) rotate(90)'
              />
            </clipPath>
          </defs>
        </svg>
      );
    case 'write':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='52'
          height='52'
          viewBox='0 0 52 52'
          fill='none'
        >
          <g filter='url(#filter0_d_20_2478)'>
            <circle cx='26' cy='24' r='20' fill='#3434FF' />
            <path
              d='M18 31.5861H34M18 31.5861V27.5861L26 19.5861M18 31.5861L22 31.586L30 23.586M26 19.5861L28.8686 16.7174L28.8704 16.7157C29.2652 16.3208 29.463 16.123 29.691 16.0489C29.8919 15.9837 30.1082 15.9837 30.3091 16.0489C30.5369 16.123 30.7345 16.3205 31.1288 16.7149L32.8686 18.4547C33.2646 18.8507 33.4627 19.0488 33.5369 19.2771C33.6022 19.4779 33.6021 19.6943 33.5369 19.8951C33.4628 20.1233 33.265 20.3211 32.8695 20.7166L32.8686 20.7174L30 23.586M26 19.5861L30 23.586'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_20_2478'
              x='0'
              y='0'
              width='52'
              height='52'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='2' />
              <feGaussianBlur stdDeviation='3' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0.203922 0 0 0 0 0.203922 0 0 0 0 1 0 0 0 0.2 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_20_2478'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_20_2478'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      );
    case 'comment':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='19'
          height='18'
          viewBox='0 0 19 18'
          fill='none'
        >
          <path
            d='M14.1667 4H4.83333C4.47971 4 4.14057 4.13634 3.89052 4.37904C3.64048 4.62173 3.5 4.9509 3.5 5.29412V15L5.81133 13.3176C6.04213 13.1496 6.32284 13.0588 6.61133 13.0588H14.1667C14.5203 13.0588 14.8594 12.9225 15.1095 12.6798C15.3595 12.4371 15.5 12.1079 15.5 11.7647V5.29412C15.5 4.9509 15.3595 4.62173 15.1095 4.37904C14.8594 4.13634 14.5203 4 14.1667 4Z'
            fill='#9DA0A8'
          />
        </svg>
      );
    case 'nullHeart':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M19.2373 6.23731C20.7839 7.78395 20.8432 10.2727 19.3718 11.8911L11.9995 20.0001L4.62812 11.8911C3.15679 10.2727 3.21605 7.7839 4.76269 6.23726C6.48961 4.51034 9.33372 4.66814 10.8594 6.5752L12 8.00045L13.1396 6.57504C14.6653 4.66798 17.5104 4.51039 19.2373 6.23731Z'
            stroke='#7F828C'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'heart':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='19'
          height='18'
          viewBox='0 0 19 18'
          fill='none'
        >
          <path
            d='M14.928 4.67798C16.088 5.83797 16.1324 7.70451 15.0289 8.91835L9.49962 15L3.97109 8.91833C2.8676 7.70449 2.91204 5.83792 4.07202 4.67794C5.36721 3.38275 7.50029 3.50111 8.64453 4.9314L9.5 6.00034L10.3547 4.93128C11.499 3.50098 13.6328 3.38279 14.928 4.67798Z'
            fill='#9DA0A8'
          />
        </svg>
      );
    case 'fillHeart':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='21'
          height='21'
          viewBox='0 0 21 21'
          fill='none'
        >
          <path
            d='M16.6431 10.4095L10.4999 17.1669L4.35678 10.4095C3.13067 9.06074 3.18003 6.98681 4.46889 5.69794C5.90799 4.25884 8.27849 4.39013 9.54987 5.97935L10.4999 7.16691L11.45 5.97935C12.7213 4.39013 15.0918 4.25884 16.5309 5.69794C17.8198 6.9868 17.8692 9.06074 16.6431 10.4095Z'
            fill='#F43C35'
          />
        </svg>
      );
    case 'nullScrap':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M6 20V5.77778C6 5.28889 6.168 4.87052 6.504 4.52267C6.84 4.17481 7.24343 4.00059 7.71429 4H16.2857C16.7571 4 17.1609 4.17422 17.4969 4.52267C17.8329 4.87111 18.0006 5.28948 18 5.77778V20L12 17.3333L6 20Z'
            stroke='#7F828C'
            strokeWidth='2'
          />
        </svg>
      );
    case 'scrap':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='19'
          height='18'
          viewBox='0 0 19 18'
          fill='none'
        >
          <path
            d='M4.5 16V4.44444C4.5 4.04722 4.64 3.7073 4.92 3.42467C5.2 3.14204 5.53619 3.00048 5.92857 3H13.0714C13.4643 3 13.8007 3.14156 14.0807 3.42467C14.3607 3.70778 14.5005 4.0477 14.5 4.44444V16L9.5 13.8333L4.5 16Z'
            fill='#9DA0A8'
          />
        </svg>
      );
    case 'fillScrap':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='21'
          viewBox='0 0 20 21'
          fill='none'
        >
          <path
            d='M14.1667 3.8335H5.83333C5.3731 3.8335 5 4.20659 5 4.66683V17.2764C5 17.942 5.74179 18.339 6.29558 17.9698L9.53775 15.8083C9.81767 15.6217 10.1823 15.6217 10.4622 15.8083L13.7044 17.9698C14.2582 18.339 15 17.942 15 17.2764V4.66683C15 4.20659 14.6269 3.8335 14.1667 3.8335Z'
            fill='#3434FF'
          />
        </svg>
      );
    case 'topArrow':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='52'
          height='52'
          viewBox='0 0 52 52'
          fill='none'
        >
          <g filter='url(#filter0_d_20_2494)'>
            <circle cx='26' cy='24' r='19.5' fill='white' stroke='#5F5FFF' />
            <path
              d='M26 32V16'
              stroke='#3434FF'
              strokeWidth='2'
              strokeLinecap='round'
            />
            <path
              d='M20 22L26 16L32 22'
              stroke='#3434FF'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </g>
          <defs>
            <filter
              id='filter0_d_20_2494'
              x='0'
              y='0'
              width='52'
              height='52'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='2' />
              <feGaussianBlur stdDeviation='3' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_20_2494'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_20_2494'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      );
    case 'rightArrow':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M8 5L15 12L8 19'
            stroke='#D5D8DC'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'primaryRightArrow':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
        >
          <path
            d='M6.75 3.75L12 9L6.75 14.25'
            stroke='#8383FF'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'back':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M15 19L8 12L15 5'
            stroke='#9DA0A8'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'imgUpload':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M3.00005 17.0001C3 16.9355 3 16.8689 3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4801 4 19.9079 4.21799C20.2842 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.2881 21 17.6679 20.9822 17.9774M3.00005 17.0001C3.00082 17.9884 3.01337 18.5058 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8036C18.9215 20 19.4805 20 19.9079 19.7822C20.2842 19.5905 20.5905 19.2837 20.7822 18.9074C20.9055 18.6654 20.959 18.3813 20.9822 17.9774M3.00005 17.0001L7.76798 11.4375L7.76939 11.436C8.19227 10.9426 8.40406 10.6955 8.65527 10.6064C8.87594 10.5282 9.11686 10.53 9.33643 10.6113C9.58664 10.704 9.79506 10.9539 10.2119 11.4541L12.8831 14.6595C13.269 15.1226 13.463 15.3554 13.6986 15.4489C13.9065 15.5313 14.1357 15.5406 14.3501 15.4773C14.5942 15.4053 14.8091 15.1904 15.2388 14.7607L15.7358 14.2637C16.1733 13.8262 16.3921 13.6076 16.6397 13.5361C16.8571 13.4734 17.0896 13.4869 17.2988 13.5732C17.537 13.6716 17.7302 13.9124 18.1167 14.3955L20.9822 17.9774M20.9822 17.9774L21 17.9996M15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10Z'
            stroke='#9DA0A8'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'imgPreview':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M3.00005 17.0001C3 16.9355 3 16.8689 3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4801 4 19.9079 4.21799C20.2842 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.2881 21 17.6679 20.9822 17.9774M3.00005 17.0001C3.00082 17.9884 3.01337 18.5058 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8036C18.9215 20 19.4805 20 19.9079 19.7822C20.2842 19.5905 20.5905 19.2837 20.7822 18.9074C20.9055 18.6654 20.959 18.3813 20.9822 17.9774M3.00005 17.0001L7.76798 11.4375L7.76939 11.436C8.19227 10.9426 8.40406 10.6955 8.65527 10.6064C8.87594 10.5282 9.11686 10.53 9.33643 10.6113C9.58664 10.704 9.79506 10.9539 10.2119 11.4541L12.8831 14.6595C13.269 15.1226 13.463 15.3554 13.6986 15.4489C13.9065 15.5313 14.1357 15.5406 14.3501 15.4773C14.5942 15.4053 14.8091 15.1904 15.2388 14.7607L15.7358 14.2637C16.1733 13.8262 16.3921 13.6076 16.6397 13.5361C16.8571 13.4734 17.0896 13.4869 17.2988 13.5732C17.537 13.6716 17.7302 13.9124 18.1167 14.3955L20.9822 17.9774M20.9822 17.9774L21 17.9996M15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10Z'
            stroke='#3434FF'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'commentWriteOff':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
        >
          <circle cx='16' cy='16' r='16' fill='#9DA0A8' />
          <path
            d='M16 23V10'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M10 16L16 10L22 16'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      );
    case 'commentWriteOn':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
        >
          <circle cx='16' cy='16' r='16' fill='#3434FF' />
          <path
            d='M16 23V10'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M10 16L16 10L22 16'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
          />
        </svg>
      );
    case 'mypageUserDefaultImgBig':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='102'
          height='102'
          viewBox='0 0 102 102'
          fill='none'
        >
          <g filter='url(#filter0_d_249_1041)'>
            <circle cx='51' cy='49' r='43' fill='#3434FF' />
            <circle cx='51' cy='49' r='44' stroke='white' strokeWidth='2' />
          </g>
          <circle cx='50.9998' cy='38.8826' r='16.4412' fill='white' />
          <ellipse cx='50.5' cy='76.5' rx='30.5' ry='16.5' fill='white' />
          <defs>
            <filter
              id='filter0_d_249_1041'
              x='0'
              y='0'
              width='102'
              height='102'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='2' />
              <feGaussianBlur stdDeviation='3' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_249_1041'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_249_1041'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      );
    case 'mypageUserDefaultImgSmall':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='82'
          height='82'
          viewBox='0 0 82 82'
          fill='none'
        >
          <g filter='url(#filter0_d_187_1144)'>
            <circle cx='41' cy='39' r='34' fill='#3434FF' />
            <circle cx='41' cy='39' r='34.5' stroke='white' />
          </g>
          <circle cx='41' cy='31' r='13' fill='white' />
          <ellipse cx='40.5' cy='60.5' rx='23.5' ry='12.5' fill='white' />
          <defs>
            <filter
              id='filter0_d_187_1144'
              x='0'
              y='0'
              width='82'
              height='82'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='2' />
              <feGaussianBlur stdDeviation='3' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_187_1144'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect1_dropShadow_187_1144'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      );
    case 'communityUserDefaultImgSmall':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
        >
          <circle cx='20' cy='20' r='19.5' fill='#9DA0A8' stroke='#EFF1F4' />
          <circle cx='20.0001' cy='15.5294' r='7.26471' fill='#EFF1F4' />
          <ellipse
            cx='19.7212'
            cy='32.0151'
            rx='13.1324'
            ry='6.98529'
            fill='#EFF1F4'
          />
        </svg>
      );
    case 'communityUserDefaultImg30px':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
        >
          <circle cx='16' cy='16' r='16' fill='#D9D9D9' />
        </svg>
      );
    case 'userModifyImg':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
        >
          <circle cx='15' cy='15' r='14' fill='white' stroke='#D5D8DC' />
          <path
            d='M8 21H22M8 21V17.407L15 10.2211M8 21L11.5 21L18.5 13.8141M15 10.2211L17.51 7.6444L17.5116 7.64287C17.8571 7.28817 18.0302 7.11051 18.2297 7.04396C18.4054 6.98535 18.5947 6.98535 18.7704 7.04396C18.9698 7.11046 19.1427 7.28792 19.4877 7.64212L21.01 9.20487C21.3565 9.56059 21.5299 9.73853 21.5948 9.94362C21.6519 10.124 21.6519 10.3184 21.5948 10.4988C21.5299 10.7037 21.3568 10.8814 21.0108 11.2366L21.0101 11.2374L18.5 13.8141M15 10.2211L18.5 13.8141'
            stroke='#7F828C'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'kakaoTalk':
      return (
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='9' cy='9' r='9' fill='#FEE500' />
          <path
            d='M13.7236 8.99987C13.7236 11.3195 11.6081 13.1999 8.99851 13.1999C8.06869 13.1999 7.2016 12.9612 6.47058 12.5489L4.27344 13.1999L5.00582 11.2469C4.54201 10.5971 4.27344 9.82638 4.27344 8.99987C4.27344 6.68024 6.38892 4.7998 8.99851 4.7998C11.6081 4.7998 13.7236 6.68024 13.7236 8.99987Z'
            fill='#392020'
          />
        </svg>
      );
    case 'notiHeart':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='29'
          viewBox='0 0 28 29'
          fill='none'
        >
          <path
            d='M22.4435 7.7767C24.2479 9.58112 24.317 12.4846 22.6005 14.3728L13.9994 23.8332L5.39947 14.3728C3.68293 12.4846 3.75206 9.58105 5.55647 7.77664C7.57121 5.7619 10.8893 5.946 12.6693 8.17091L14 9.8337L15.3296 8.17072C17.1095 5.94581 20.4288 5.76196 22.4435 7.7767Z'
            fill='#F43C35'
            stroke='#F43C35'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'notiScrap':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='29'
          viewBox='0 0 28 29'
          fill='none'
        >
          <path
            d='M6.22266 25.3887V7.41342C6.22266 6.79552 6.44043 6.26674 6.87599 5.8271C7.31154 5.38745 7.83451 5.16725 8.44488 5.1665H19.556C20.1671 5.1665 20.6904 5.3867 21.126 5.8271C21.5615 6.26749 21.7789 6.79627 21.7782 7.41342V25.3887L14.0004 22.0184L6.22266 25.3887Z'
            fill='#3434FF'
          />
        </svg>
      );
    case 'notiComment':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='29'
          viewBox='0 0 28 29'
          fill='none'
        >
          <path
            d='M21.2586 6.72217H6.74009C6.19001 6.72217 5.66246 6.93426 5.2735 7.31178C4.88453 7.68931 4.66602 8.20134 4.66602 8.73524V23.8333L8.26142 21.2163C8.62044 20.9549 9.0571 20.8137 9.50587 20.8137H21.2586C21.8087 20.8137 22.3362 20.6016 22.7252 20.2241C23.1142 19.8465 23.3327 19.3345 23.3327 18.8006V8.73524C23.3327 8.20134 23.1142 7.68931 22.7252 7.31178C22.3362 6.93426 21.8087 6.72217 21.2586 6.72217Z'
            fill='#FFB744'
          />
        </svg>
      );
    case 'notiStar':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='29'
          viewBox='0 0 28 29'
          fill='none'
        >
          <path
            d='M10.2456 9.83992L3.85751 10.7652L3.74436 10.7882C3.57308 10.8336 3.41694 10.9237 3.29188 11.0491C3.16682 11.1745 3.07732 11.3309 3.03252 11.5022C2.98772 11.6734 2.98923 11.8535 3.03689 12.0241C3.08455 12.1946 3.17666 12.3494 3.3038 12.4727L7.93167 16.9731L6.84029 23.3301L6.82727 23.4401C6.81679 23.6171 6.85357 23.7937 6.93386 23.9518C7.01414 24.1099 7.13505 24.2438 7.28419 24.3399C7.43333 24.436 7.60535 24.4907 7.78263 24.4985C7.95992 24.5063 8.1361 24.467 8.29313 24.3844L14.0064 21.3835L19.7066 24.3844L19.8067 24.4304C19.972 24.4954 20.1516 24.5154 20.3272 24.4882C20.5027 24.461 20.6678 24.3876 20.8056 24.2756C20.9434 24.1636 21.0489 24.017 21.1112 23.8509C21.1736 23.6847 21.1906 23.505 21.1605 23.3301L20.0681 16.9731L24.6979 12.4717L24.776 12.3867C24.8876 12.2494 24.9608 12.0851 24.988 11.9103C25.0153 11.7356 24.9957 11.5568 24.9313 11.3921C24.8669 11.2274 24.76 11.0827 24.6213 10.9728C24.4827 10.8628 24.3174 10.7915 24.1422 10.7662L17.7541 9.83992L14.8985 4.05814C14.8159 3.89062 14.688 3.74956 14.5292 3.65092C14.3705 3.55228 14.1873 3.5 14.0004 3.5C13.8134 3.5 13.6302 3.55228 13.4715 3.65092C13.3128 3.74956 13.1849 3.89062 13.1022 4.05814L10.2456 9.83992Z'
            fill='#B0E809'
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
