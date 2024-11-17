interface  IconProps {
  onClick: () => void
}

export const ArrowLeftIcon = ({onClick}: IconProps) => {
  return (
    <div className={'cursor-pointer'} onClick={onClick}>
      <svg
        width="74"
        height="76"
        viewBox="0 0 74 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5263 31.1188L41.4197 15.7652C46.7525 12.6031 53.5 16.4466 53.5 22.6464L53.5 53.3536C53.5 59.5534 46.7525 63.397 41.4197 60.2349L15.5263 44.8812C10.3 41.7823 10.3 34.2177 15.5263 31.1188Z"
          stroke="white"
          stroke-width="4"
        />
        <path
          d="M16.23 44.8812C11.0037 41.7823 11.0037 34.2177 16.23 31.1188L41.1072 16.3677C46.44 13.2056 53.1875 17.0491 53.1875 23.2489L53.1875 52.7511C53.1875 58.9509 46.44 62.7944 41.1072 59.6323L16.23 44.8812Z"
          fill="#FF2D00"
        />
        <path
          d="M48.1 36.8125H31.2141L38.9633 30.1803L37 28.5L25.9 38L37 47.5L38.9633 45.8197L31.2141 39.1875H48.1V36.8125Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export const ArrowRightIcon = ({onClick}: IconProps) => {
  return (
    <div className={'cursor-pointer'}
      onClick={onClick}>
      <svg
        width="70"
        height="80"
        viewBox="0 0 70 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.2486 46.6774L31.906 62.7394C26.5871 66.249 19.5 62.4344 19.5 56.062L19.5 23.938C19.5 17.5656 26.5871 13.751 31.9059 17.2606L56.2486 33.3226C61.0407 36.4845 61.0407 43.5154 56.2486 46.6774Z"
          stroke="white"
          stroke-width="4"
        />
        <path
          d="M55.5051 33.3226C60.2972 36.4846 60.2972 43.5154 55.5051 46.6774L32.0934 62.1251C26.7746 65.6346 19.6875 61.8201 19.6875 55.4477L19.6875 24.5523C19.6875 18.1799 26.7746 14.3654 32.0934 17.8749L55.5051 33.3226Z"
          fill="#FF2D00"
        />
        <path
          d="M24.5 41.25H40.4731L33.1428 48.2313L35 50L45.5 40L35 30L33.1428 31.7688L40.4731 38.75H24.5V41.25Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
