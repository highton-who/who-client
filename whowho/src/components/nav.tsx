

import React from 'react';
import { useNavigate } from 'react-router-dom';

type NavItem = 'plus' | 'home' | 'user';

interface NavProps {
  active?: NavItem;
  onPlusClick?: () => void;
  onHomeClick?: () => void;
  onUserClick?: () => void;
}

const ACTIVE_COLOR = '#DDA0DD';
const INACTIVE_COLOR = '#000000';

const wrapperStyle: React.CSSProperties = {
  width: '313px',
  height: '66px',
  borderRadius: '999px',
  background: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 34px',
  boxSizing: 'border-box',
};

const buttonStyle: React.CSSProperties = {
  border: 'none',
  background: 'transparent',
  padding: 0,
  margin: 0,
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

function PlusIcon({ active }: { active: boolean }) {
  const color = active ? ACTIVE_COLOR : INACTIVE_COLOR;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
      <path
        d="M24.1012 12.7079H1.31464M12.7079 1.31461V24.1011"
        stroke={color}
        strokeWidth="2.62921"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  const color = active ? ACTIVE_COLOR : INACTIVE_COLOR;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M1.31464 11.7479C1.31464 9.40747 1.31464 8.23776 1.84632 7.26846C2.37596 6.29813 3.34629 5.69692 5.28592 4.49245L7.33086 3.22356C9.38092 1.95058 10.4065 1.31461 11.5394 1.31461C12.6723 1.31461 13.6968 1.95058 15.7478 3.22356L17.7928 4.49245C19.7324 5.69692 20.7027 6.29813 21.2334 7.26846C21.7641 8.23878 21.7641 9.40747 21.7641 11.7469V13.3031C21.7641 17.2907 21.7641 19.2856 20.5657 20.5248C19.3674 21.764 17.44 21.764 13.5843 21.764H9.49441C5.63867 21.764 3.71029 21.764 2.51297 20.5248C1.31566 19.2856 1.31464 17.2918 1.31464 13.3031V11.7479Z"
        stroke={color}
        strokeWidth="2.62921"
      />
    </svg>
  );
}

function UserIcon({ active }: { active: boolean }) {
  const color = active ? ACTIVE_COLOR : INACTIVE_COLOR;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" aria-hidden="true">
      <path
        d="M14.9939 12.3923C16.7202 13.2072 18.1921 14.4766 19.2519 16.0643C20.3117 17.6521 20.9193 19.4984 21.0096 21.4052C21.0216 21.5799 20.9986 21.7552 20.942 21.9208C20.8853 22.0865 20.7962 22.2392 20.6797 22.3699C20.5633 22.5007 20.4219 22.6068 20.2638 22.6822C20.1058 22.7575 19.9343 22.8005 19.7594 22.8087C19.5845 22.8169 19.4098 22.79 19.2454 22.7298C19.081 22.6695 18.9304 22.577 18.8022 22.4577C18.6741 22.3384 18.5711 22.1947 18.4992 22.035C18.4274 21.8753 18.3882 21.7029 18.3839 21.5279C18.2883 19.5026 17.4165 17.5918 15.9494 16.1923C14.4823 14.7928 12.5326 14.012 10.505 14.012C8.47741 14.012 6.5277 14.7928 5.06059 16.1923C3.59348 17.5918 2.72166 19.5026 2.62611 21.5279C2.6025 21.8707 2.44559 22.1907 2.18899 22.4192C1.93239 22.6478 1.5965 22.7668 1.25324 22.7508C0.909988 22.7347 0.586657 22.5849 0.352491 22.3334C0.118324 22.0819 -0.0080613 21.7487 0.000398936 21.4052C0.0905453 19.4986 0.697889 17.6524 1.75732 16.0647C2.81676 14.4769 4.28833 13.2074 6.01429 12.3923C4.90829 11.4697 4.1133 10.2289 3.73748 8.83858C3.36165 7.44824 3.42323 5.97588 3.91383 4.62177C4.40444 3.26767 5.30025 2.09756 6.47942 1.2706C7.65859 0.443651 9.06387 0 10.5041 0C11.9443 0 13.3496 0.443651 14.5288 1.2706C15.708 2.09756 16.6038 3.26767 17.0944 4.62177C17.585 5.97588 17.6466 7.44824 17.2707 8.83858C16.8949 10.2289 16.0999 11.4697 14.9939 12.3923ZM14.887 7.00589C14.887 5.8437 14.4253 4.72912 13.6035 3.90733C12.7818 3.08554 11.6672 2.62386 10.505 2.62386C9.3428 2.62386 8.22821 3.08554 7.40643 3.90733C6.58464 4.72912 6.12296 5.8437 6.12296 7.00589C6.12296 8.16807 6.58464 9.28265 7.40643 10.1044C8.22821 10.9262 9.3428 11.3879 10.505 11.3879C11.6672 11.3879 12.7818 10.9262 13.6035 10.1044C14.4253 9.28265 14.887 8.16807 14.887 7.00589Z"
        fill={color}
      />
    </svg>
  );
}

export default function Nav({
  active = 'home',
  onPlusClick,
  onHomeClick,
  onUserClick,
}: NavProps) {
  const navigate = useNavigate();
  return (
    <nav style={wrapperStyle} aria-label="Bottom navigation">
      <button
        type="button"
        style={buttonStyle}
        onClick={() => {
          if (onPlusClick) {
            onPlusClick();
            return;
          }
          navigate('/create');
        }}
        aria-label="추가"
      >
        <PlusIcon active={active === 'plus'} />
      </button>

      <button
        type="button"
        style={buttonStyle}
        onClick={() => {
          if (onHomeClick) {
            onHomeClick();
            return;
          }
          navigate('/');
        }}
        aria-label="홈"
      >
        <HomeIcon active={active === 'home'} />
      </button>

      <button
        type="button"
        style={buttonStyle}
        onClick={() => {
          if (onUserClick) {
            onUserClick();
            return;
          }
          navigate('/profile');
        }}
        aria-label="사용자"
      >
        <UserIcon active={active === 'user'} />
      </button>
    </nav>
  );
}