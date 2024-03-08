import React from "react";

const FemaleAvatarSelected = () => {
  return (
    // <svg
    //   className="avatar-svgs female-selected-svg"
    //   width="76"
    //   height="76"
    //   viewBox="0 0 76 76"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g clipPath="url(#clip0_248_480)">
    //     <path
    //       d="M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76Z"
    //       fill="#739072"
    //     />
    //     <path
    //       d="M54.1699 54.1498H35.1699V28.4355L51.5985 37.4355L54.1699 54.1498Z"
    //       fill="#2F2E41"
    //     />
    //     <path
    //       d="M38.6793 49.6116C45.4921 49.6116 51.0149 44.0887 51.0149 37.276C51.0149 30.4633 45.4921 24.9404 38.6793 24.9404C31.8666 24.9404 26.3438 30.4633 26.3438 37.276C26.3438 44.0887 31.8666 49.6116 38.6793 49.6116Z"
    //       fill="#FFB6B6"
    //     />
    //     <path
    //       d="M31.5985 51.4355L31.0412 45.8021L42.1699 43.7212L48.7414 59.7212L37.3128 72.864L29.1699 56.864L31.5985 51.4355Z"
    //       fill="#FFB6B6"
    //     />
    //     <path
    //       d="M65.291 64.4416C65.1524 64.5859 65.011 64.7288 64.8696 64.8702C64.421 65.3188 63.9639 65.7545 63.4967 66.1773C56.4967 72.5259 47.5153 76.0002 37.9996 76.0002C29.2267 76.0002 20.9081 73.0473 14.1781 67.6116C14.1739 67.6088 14.171 67.6059 14.1667 67.6016C13.9624 67.4373 13.761 67.2702 13.5596 67.1002C13.5953 66.9973 13.6339 66.8959 13.6724 66.7959C15.8367 61.1573 20.111 58.3988 22.7053 57.1916C23.991 56.593 24.8639 56.3745 24.8639 56.3745L27.9096 50.8888L30.0539 54.8888L31.6339 57.8373L38.1167 69.933L43.7096 56.0073L45.4424 51.6902L45.8867 50.5845L47.9996 52.2288L49.9996 53.7845L54.0267 54.673L57.2939 55.3945L61.731 56.3745C63.5253 57.8359 64.6167 60.6159 65.2267 64.0702C65.2496 64.193 65.271 64.3173 65.291 64.4416Z"
    //       fill="#4F6F52"
    //     />
    //     <path
    //       d="M32.1906 23.2576C33.6932 20.7336 36.4529 19.0019 39.3792 18.7466C42.3055 18.4914 45.3233 19.7192 47.2402 21.945C48.3825 23.2713 49.1314 24.8956 50.2448 26.2463C52.6409 29.1528 56.7266 30.8522 57.7733 34.4706C58.23 36.0496 58.0024 37.7354 57.7713 39.3628C57.5732 40.7577 57.3752 42.1525 57.1771 43.5474C57.0229 44.6329 56.8751 45.7773 57.2821 46.7953C57.7597 47.9898 58.9025 48.772 59.6414 49.825C60.8986 51.6166 60.8067 54.2398 59.4271 55.939C58.8288 56.676 58.0356 57.2317 57.4084 57.9442C56.7811 58.6566 56.3159 59.6307 56.5786 60.5428C57.0818 62.2901 59.8221 62.7092 60.1226 64.5025C60.2763 65.4194 59.643 66.335 58.8132 66.7543C57.9835 67.1736 57.0067 67.1857 56.0838 67.0736C52.5762 66.6472 49.3285 64.4555 47.6208 61.3622C45.913 58.2689 45.7886 54.3528 47.2967 51.1574C48.5353 48.5329 50.8374 46.2137 50.8124 43.3117C50.7987 41.7307 50.0735 40.2541 49.3644 38.841C47.9131 35.9488 46.4618 33.0565 45.0105 30.1643C44.2331 28.615 43.3308 26.9454 41.7303 26.2799C40.4934 25.7655 39.0899 25.965 37.7668 26.1754C36.4438 26.3858 35.0423 26.5906 33.8017 26.0851C32.561 25.5797 31.6236 24.078 32.2147 22.8758"
    //       fill="#2F2E41"
    //     />
    //     <path
    //       d="M34.3532 23.3894C31.9699 22.605 29.2964 23.8643 27.683 25.7858C26.0695 27.7073 25.2868 30.1724 24.5413 32.5681C24.1142 33.9403 23.6871 35.3126 23.26 36.6848C22.8583 37.9757 22.4565 39.2666 22.0548 40.5575C21.5822 42.0759 21.1058 43.689 21.4936 45.2312C21.774 46.3462 22.4954 47.3585 22.511 48.5081C22.5272 49.7089 21.7752 50.7631 21.1162 51.767C20.4572 52.771 19.8385 53.9638 20.1525 55.1229C20.6301 56.886 23.0814 57.8551 22.947 59.6768C22.9022 60.2848 22.5506 60.8471 22.557 61.4567C22.5651 62.2323 23.1723 62.9025 23.8837 63.2115C24.5952 63.5205 25.3954 63.5372 26.1709 63.5236C28.5497 63.4818 30.9242 63.1993 33.2463 62.6818C34.1398 62.4827 35.0483 62.2386 35.792 61.7049C36.5357 61.1713 37.0905 60.2871 36.9937 59.3769C36.8429 57.9586 35.3179 57.1539 34.5483 55.9529C33.7924 54.7733 33.8099 53.2787 33.4839 51.9161C33.036 50.0435 31.9296 48.4086 31.0991 46.6715C27.9767 40.1406 29.0697 31.8162 33.7723 26.3128C34.188 25.8262 34.6423 25.3366 34.8158 24.7206C34.9892 24.1045 34.7656 23.3195 34.163 23.104"
    //       fill="#2F2E41"
    //     />
    //     <path
    //       d="M64.87 11.13C57.6929 3.95285 48.15 0 38 0C27.85 0 18.3071 3.95285 11.13 11.13C3.95285 18.3071 0 27.85 0 38C0 47.2643 3.29286 56.0229 9.32714 62.9386C9.90286 63.6 10.5043 64.2443 11.13 64.87C11.2771 65.0171 11.4257 65.1643 11.5757 65.3071C11.9757 65.6943 12.3829 66.0729 12.7971 66.44C13.0486 66.6643 13.3029 66.8843 13.56 67.1C13.7614 67.27 13.9629 67.4371 14.1671 67.6014C14.1714 67.6057 14.1743 67.6086 14.1786 67.6114C20.9086 73.0471 29.2272 76 38 76C47.5157 76 56.4971 72.5257 63.4971 66.1771C63.9643 65.7543 64.4214 65.3186 64.87 64.87C65.0114 64.7286 65.1529 64.5857 65.2914 64.4414C65.6771 64.0443 66.0514 63.64 66.4171 63.23C72.6129 56.27 76 47.3957 76 38C76 27.85 72.0471 18.3071 64.87 11.13ZM66.3243 62.8743C65.9671 63.28 65.6014 63.68 65.2271 64.07C64.6443 64.6771 64.0429 65.2657 63.4214 65.8329C63.1857 66.05 62.9471 66.2614 62.7057 66.4714C60.2671 68.5929 57.5529 70.4043 54.6257 71.8471C53.5986 72.3543 52.5457 72.8157 51.4686 73.2286C47.2843 74.8343 42.7429 75.7143 38 75.7143C33.4229 75.7143 29.0343 74.8943 24.9729 73.3943C23.3057 72.78 21.6943 72.05 20.1471 71.2143C19.92 71.0914 19.6943 70.9671 19.47 70.84C18.29 70.1714 17.1486 69.4414 16.0529 68.6528C15.2343 68.0657 14.44 67.4471 13.6729 66.7957C13.4043 66.5686 13.1386 66.3386 12.8771 66.1029C12.4514 65.7243 12.0343 65.3343 11.6271 64.9343C10.8557 64.1786 10.1186 63.3914 9.41429 62.5728C3.72715 55.9671 0.285714 47.3786 0.285714 38C0.285714 17.2043 17.2043 0.285714 38 0.285714C58.7957 0.285714 75.7143 17.2043 75.7143 38C75.7143 47.5229 72.1671 56.2314 66.3243 62.8743Z"
    //       fill="#3F3D56"
    //     />
    //   </g>
    //   <defs>
    //     <clipPath id="clip0_248_480">
    //       <rect width="76" height="76" fill="white" />
    //     </clipPath>
    //   </defs>
    // </svg>
    <svg
      className="avatar-svgs female-selected-svg"
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="34.5" cy="34.5" r="34.5" fill="#9AAB5F" />
      <path
        d="M50.1699 47.15H31.1699V21.4357L47.5985 30.4357L50.1699 47.15Z"
        fill="#2F2E41"
      />
      <path
        d="M34.6803 42.6116C41.493 42.6116 47.0159 37.0887 47.0159 30.276C47.0159 23.4633 41.493 17.9404 34.6803 17.9404C27.8675 17.9404 22.3447 23.4633 22.3447 30.276C22.3447 37.0887 27.8675 42.6116 34.6803 42.6116Z"
        fill="#FFB6B6"
      />
      <path
        d="M27.5985 44.4357L27.0412 38.8024L38.1699 36.7214L44.7413 52.7214L33.3128 65.8643L25.1699 49.8643L27.5985 44.4357Z"
        fill="#FFB6B6"
      />
      <path
        d="M61 56.6305C60.8661 56.7724 60.7294 56.9129 60.5927 57.052C60.1591 57.4933 59.7173 57.9219 59.2658 58.3378C52.5001 64.5825 43.8192 68 34.622 68C26.1428 68 18.1026 65.0954 11.5979 59.7486C11.5937 59.7458 11.591 59.743 11.5868 59.7388C11.3894 59.5772 11.1947 59.4128 11 59.2456C11.0345 59.1444 11.0718 59.0446 11.1091 58.9463C13.2009 53.3999 17.3322 50.6865 19.8396 49.4991C21.0823 48.9103 21.9259 48.6953 21.9259 48.6953L24.8697 43.2993L26.9422 47.2339L28.4694 50.1342L34.7352 62.0321L40.1409 48.3342L41.8158 44.0876L42.2452 43L44.2873 44.6174L46.2204 46.1477L50.1127 47.0217L53.2705 47.7313L57.5592 48.6953C59.2934 50.1328 60.3483 52.8674 60.9379 56.2651C60.96 56.386 60.9807 56.5082 61 56.6305Z"
        fill="#BED081"
      />
      <path
        d="M28.1916 16.2576C29.6942 13.7336 32.4539 12.0019 35.3802 11.7466C38.3065 11.4914 41.3243 12.7192 43.2412 14.945C44.3834 16.2713 45.1324 17.8956 46.2458 19.2463C48.6419 22.1528 52.7276 23.8522 53.7743 27.4706C54.231 29.0496 54.0034 30.7354 53.7723 32.3628C53.5742 33.7577 53.3761 35.1525 53.178 36.5474C53.0239 37.6329 52.8761 38.7773 53.2831 39.7953C53.7606 40.9898 54.9034 41.772 55.6423 42.825C56.8996 44.6166 56.8077 47.2398 55.4281 48.939C54.8298 49.676 54.0366 50.2317 53.4094 50.9442C52.7821 51.6566 52.3168 52.6307 52.5796 53.5428C53.0828 55.2901 55.8231 55.7092 56.1236 57.5025C56.2773 58.4194 55.644 59.335 54.8142 59.7543C53.9845 60.1736 53.0077 60.1857 52.0848 60.0736C48.5772 59.6472 45.3295 57.4555 43.6217 54.3622C41.9139 51.2689 41.7896 47.3528 43.2977 44.1574C44.5363 41.5329 46.8384 39.2137 46.8133 36.3117C46.7997 34.7307 46.0745 33.2541 45.3654 31.841C43.9141 28.9488 42.4628 26.0565 41.0115 23.1643C40.234 21.615 39.3318 19.9454 37.7313 19.2799C36.4943 18.7655 35.0908 18.965 33.7678 19.1754C32.4448 19.3858 31.0433 19.5906 29.8027 19.0851C28.562 18.5797 27.6246 17.078 28.2157 15.8758"
        fill="#2F2E41"
      />
      <path
        d="M30.3532 16.3894C27.9699 15.605 25.2964 16.8643 23.683 18.7858C22.0695 20.7073 21.2868 23.1724 20.5413 25.5681C20.1142 26.9403 19.6871 28.3126 19.26 29.6848C18.8583 30.9757 18.4565 32.2666 18.0548 33.5575C17.5822 35.0759 17.1058 36.689 17.4936 38.2312C17.774 39.3462 18.4954 40.3585 18.511 41.5081C18.5272 42.7089 17.7752 43.7631 17.1162 44.767C16.4572 45.771 15.8385 46.9638 16.1525 48.1229C16.6301 49.886 19.0814 50.8551 18.947 52.6768C18.9022 53.2848 18.5506 53.8471 18.557 54.4567C18.5651 55.2323 19.1723 55.9024 19.8837 56.2115C20.5952 56.5205 21.3954 56.5372 22.1709 56.5236C24.5497 56.4818 26.9242 56.1993 29.2463 55.6818C30.1398 55.4827 31.0483 55.2386 31.792 54.7049C32.5357 54.1713 33.0905 53.2871 32.9937 52.3769C32.8429 50.9586 31.3179 50.1539 30.5483 48.9529C29.7924 47.7733 29.8099 46.2787 29.4839 44.9161C29.036 43.0435 27.9296 41.4086 27.0991 39.6715C23.9767 33.1406 25.0697 24.8162 29.7723 19.3128C30.188 18.8262 30.6423 18.3366 30.8158 17.7206C30.9892 17.1045 30.7656 16.3195 30.163 16.104"
        fill="#2F2E41"
      />
      <circle cx="34.5" cy="34.5" r="33.5" stroke="#BED081" stroke-width="2" />
    </svg>
  );
};

export default FemaleAvatarSelected;