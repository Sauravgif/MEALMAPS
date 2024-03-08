import React from "react";

const MaleAvatarSelected = () => {
  return (
    // <svg
    //   className="avatar-svgs male-selected-svg"
    //   width="76"
    //   height="76"
    //   viewBox="0 0 76 76"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g clipPath="url(#clip0_248_375)">
    //     <path
    //       d="M38 76C58.9868 76 76 58.9868 76 38C76 17.0132 58.9868 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9868 17.0132 76 38 76Z"
    //       fill="#739072"
    //     />
    //     <path
    //       d="M38.6803 49.6118C45.493 49.6118 51.0159 44.089 51.0159 37.2762C51.0159 30.4635 45.493 24.9407 38.6803 24.9407C31.8675 24.9407 26.3447 30.4635 26.3447 37.2762C26.3447 44.089 31.8675 49.6118 38.6803 49.6118Z"
    //       fill="#FFB6B6"
    //     />
    //     <path
    //       d="M31.5985 51.436L31.0412 45.8026L42.1699 43.7217L48.7414 59.7217L37.3128 72.8645L29.1699 56.8645L31.5985 51.436Z"
    //       fill="#FFB6B6"
    //     />
    //     <path
    //       d="M30.8622 48.6224L33.2952 49.1722C33.2952 49.1722 31.3826 43.1072 32.0318 42.5282C32.681 41.9492 34.2718 42.8615 34.2718 42.8615L35.9435 44.7358L37.9798 42.6626C37.9798 42.6626 40.1905 39.9137 41.0561 39.1417C41.9217 38.3697 40.5313 35.504 40.5313 35.504C40.5313 35.504 53.373 32.0413 48.5946 25.8127C48.5946 25.8127 45.7931 20.9292 44.8807 22.52C43.9684 24.1108 42.8805 21.5843 42.8805 21.5843L39.5585 22.216C39.5585 22.216 33.0022 18.3502 26.7795 26.6202C20.5568 34.8902 30.8622 48.6224 30.8622 48.6224Z"
    //       fill="#2F2E41"
    //     />
    //     <path
    //       d="M61.8797 67.5644C55.1383 73.0301 46.7983 76.0001 37.9997 76.0001C29.9654 76.0001 22.3126 73.5229 15.9111 68.9315C15.9226 68.8115 15.934 68.693 15.944 68.5744C16.114 66.7172 16.2654 64.9115 16.3654 63.4144C16.7526 57.6015 30.314 53.7272 30.314 53.7272C30.314 53.7272 30.3754 53.7887 30.4983 53.8958C31.2469 54.5529 34.2854 56.9358 39.614 57.6015C44.3654 58.1958 45.9297 55.3772 46.4026 54.0272C46.5454 53.6158 46.5883 53.3401 46.5883 53.3401L60.5368 59.9272C61.4468 61.2272 61.8026 64.0272 61.8726 67.1744C61.8754 67.3044 61.8783 67.433 61.8797 67.5644Z"
    //       fill="#4F6F52"
    //     />
    //     <path
    //       d="M64.87 11.13C57.6929 3.95285 48.15 0 38 0C27.85 0 18.3071 3.95285 11.13 11.13C3.95286 18.3071 0 27.85 0 38C0 47.2643 3.29286 56.0229 9.32715 62.9386C9.90286 63.6 10.5043 64.2443 11.13 64.87C11.2771 65.0171 11.4257 65.1643 11.5757 65.3072C11.9757 65.6943 12.3829 66.0729 12.7971 66.44C13.0486 66.6643 13.3029 66.8843 13.56 67.1C13.7614 67.27 13.9629 67.4371 14.1672 67.6014C14.1714 67.6057 14.1743 67.6086 14.1786 67.6114C14.7457 68.0686 15.3229 68.5086 15.9114 68.9314C22.3129 73.5229 29.9657 76 38 76C46.7986 76 55.1386 73.03 61.88 67.5643C62.43 67.1186 62.9686 66.6557 63.4972 66.1771C63.9643 65.7543 64.4214 65.3186 64.87 64.87C65.0114 64.7286 65.1529 64.5857 65.2914 64.4414C65.6772 64.0443 66.0514 63.64 66.4172 63.23C72.6129 56.27 76 47.3957 76 38C76 27.85 72.0471 18.3071 64.87 11.13ZM66.3243 62.8743C65.9671 63.28 65.6014 63.68 65.2271 64.07C64.6443 64.6771 64.0429 65.2657 63.4214 65.8329C63.1857 66.05 62.9471 66.2614 62.7057 66.4714C62.4314 66.71 62.1543 66.9443 61.8729 67.1743C59.6543 68.9957 57.2243 70.5672 54.6257 71.8471C53.5986 72.3543 52.5457 72.8157 51.4686 73.2286C47.2843 74.8343 42.7429 75.7143 38 75.7143C33.4229 75.7143 29.0343 74.8943 24.9729 73.3943C23.3057 72.78 21.6943 72.05 20.1471 71.2143C19.92 71.0914 19.6943 70.9671 19.47 70.84C18.29 70.1714 17.1486 69.4414 16.0529 68.6529C16.0172 68.6272 15.98 68.6 15.9443 68.5743C15.1643 68.0114 14.4057 67.4186 13.6729 66.7957C13.4043 66.5686 13.1386 66.3386 12.8771 66.1029C12.4514 65.7243 12.0343 65.3343 11.6271 64.9343C10.8557 64.1786 10.1186 63.3914 9.41429 62.5729C3.72715 55.9672 0.285714 47.3786 0.285714 38C0.285714 17.2043 17.2043 0.285714 38 0.285714C58.7957 0.285714 75.7143 17.2043 75.7143 38C75.7143 47.5229 72.1672 56.2314 66.3243 62.8743Z"
    //       fill="#3F3D56"
    //     />
    //   </g>
    //   <defs>
    //     <clipPath id="clip0_248_375">
    //       <rect width="76" height="76" fill="white" />
    //     </clipPath>
    //   </defs>
    // </svg>
    <svg
      className="avatar-svgs male-selected-svg"
      width="69"
      height="69"
      viewBox="0 0 69 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_488_262)">
        <circle cx="34.5" cy="34.5" r="34.5" fill="#9AAB5F" />
        <path
          d="M36.0422 41.7873C42.2274 41.7873 47.2416 36.7732 47.2416 30.5879C47.2416 24.4027 42.2274 19.3885 36.0422 19.3885C29.8569 19.3885 24.8428 24.4027 24.8428 30.5879C24.8428 36.7732 29.8569 41.7873 36.0422 41.7873Z"
          fill="#FFB6B6"
        />
        <path
          d="M26.7725 44.2951L29.107 38.329L41.1691 36.5132L42.465 49.72L30.2733 49.9794L26.7725 44.2951Z"
          fill="#FFB6B6"
        />
        <path
          d="M47.3499 32.6543C47.2045 33.2366 46.9107 34.6231 46.4519 34.6299C46.077 34.6354 45.7182 28.6204 46.0927 27.6254C46.5228 26.4824 45.3924 25.0366 44.5409 24.2943C43.0099 22.9598 39.6115 25.8254 36.1557 24.5273C36.0641 24.4929 36.0824 24.4968 34.9911 24.0614C31.6332 22.7217 31.4567 22.683 31.2644 22.6639C29.6366 22.5028 27.65 23.8349 26.8388 25.4589C25.9956 27.1472 26.7001 28.5952 25.9071 32.6795C25.8147 33.1556 25.6696 33.8341 25.4413 33.8442C25.0239 33.8624 24.6163 31.633 24.5096 31.0491C24.0624 28.6027 23.6313 26.2442 24.5096 23.5956C24.6054 23.3067 25.1959 22.2344 26.373 20.1017C28.0687 17.0294 28.9216 15.4874 29.168 15.2104C30.9357 13.2226 34.1531 11.4092 36.8545 12.1824C38.2198 12.5731 37.975 13.2014 39.6496 13.8128C42.6337 14.9024 42.9932 15.8039 43.4715 16.7456C43.7249 17.2444 45.25 15.4217 45.2397 16.375C45.2221 18.0107 47.2908 18.4833 48.5006 20.1017C49.151 20.9718 50.2642 20.9811 47.3499 32.6543Z"
          fill="#2F2E41"
        />
        <path
          d="M61 55.6331C60.5467 56.2178 60.0765 56.7905 59.5894 57.3498C53.0459 64.8624 44.3455 69 35.0915 69C27.0932 69 19.509 65.9091 13.3731 60.2193C13.3692 60.2164 13.3666 60.2134 13.3627 60.2088C12.5486 59.4553 11.7606 58.6537 11 57.8074C11.0143 57.6758 11.03 57.5457 11.0469 57.417C11.1537 56.5497 11.2722 55.7228 11.405 54.9617C12.4926 48.7231 26.8027 42.1735 27.1752 42.0029C27.1804 42.0015 27.183 42 27.183 42C27.183 42 29.0247 49.7938 36.9163 49.6936C42.2915 49.6263 41.2495 42 41.2495 42C41.2495 42 41.3147 42.0149 41.4371 42.0448C42.9896 42.4232 53.7688 45.1417 58.0213 48.8517C59.3172 49.9822 60.2471 52.3898 60.9153 55.2607C60.944 55.3834 60.9713 55.509 61 55.6331Z"
          fill="#BED081"
        />
        <circle
          cx="34.5"
          cy="34.5"
          r="33.5"
          stroke="#BED081"
          stroke-width="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_488_262">
          <rect width="69" height="69" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MaleAvatarSelected;